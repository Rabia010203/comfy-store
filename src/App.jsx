import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  About,
  Cart,
  Checkout,
  Error,
  HomePageLayout,
  Login,
  Orders,
  Register,
  SingleProduct,
  Products,
  Landing,
} from "./pages";
import { ErrorElement } from "./components";


// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as checkoutLoader } from "./pages/Checkout";
import { action as checkoutAction } from "./components/CheckoutForm";
import { loader as OrdersLoader } from "./pages/Orders";
import { store } from "../store";
const queryClient = new QueryClient({
 defaultOptions: {
queries:{
  staleTime: 1000 * 60 * 5
}
 }
})
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader(queryClient),
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: ProductsLoader(queryClient),
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader(queryClient),
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "checkout",
          element: <Checkout />,
          loader: checkoutLoader(store),
          action: checkoutAction(store, queryClient),
        },
        {
          path: "orders",
          element: <Orders />,
          loader: OrdersLoader(store, queryClient),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
    </QueryClientProvider>
  
);
};

export default App;
