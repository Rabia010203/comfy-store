import { Filters, ProductsContainer, Pagination } from "../components";
import { customFetch } from "../utils";
const url = '/products'
// search, sort, shipping, prize, category, company
const AllProductsQuery = (paramsQuery) => {
  const {shipping, search, company, sort, prize, category, page} = paramsQuery;
return {
  queryKey:['products', 
    search ?? '',
    sort ?? 'a-z',
    company ?? 'all',
    category ?? 'all',
    prize ?? 10000,
    shipping ?? false,
    page ?? 1
  ],
  queryFn: () => {
return customFetch(url, {
  params: paramsQuery,
});
  }
  
}
}
export const loader = (queryClient) => async ({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

  const response = await queryClient.ensureQueryData(AllProductsQuery(params))
  const products = response.data.data;
  const meta = response.data.meta;
return {products, meta, params}
}
 const Products = () => {
    return (
      <>
        <Filters/>
        <ProductsContainer/>
        <Pagination/>
      </>
    )
  }
  export default Products;