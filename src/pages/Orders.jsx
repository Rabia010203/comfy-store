import React from "react";
import { SectionTitle, OrdersList } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { redirect} from "react-router-dom";
import ComplexPaginationContainer from "../components/ComplexPaginationContainer";

const getOrdersQuery = (params, user) => {
  return {
     queryKey: ['orders', user.username, params.page ? parseInt(params.page):1],
     queryFn: () => {
      return customFetch.get(
        '/orders',
        
        {  params,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
     }
  }
}
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to the view orders");
      return redirect("/login");
    }
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      const response = await queryClient.ensureQueryData(getOrdersQuery(params, user))

      return { orders: response.data.data, meta:response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }
  };

const Orders = () => {
  
  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer/>
    </>
  );
};
export default Orders;
