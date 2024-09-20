import React from 'react'
import { Form, redirect } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../utils";
import { clearItem } from '../features/cart/cartSlice';

export const action = (store, queryClient) => async ({request}) => {
  const formData = await request.formData();
const {name, address} = Object.fromEntries(formData);
const {cartItems, numItemsInCart, orderTotal} = store.getState().cartState;
const user = store.getState().userState.user;
const info = {
  name,
  address,
  chargeTotal: orderTotal,
  orderTotal: formatPrice(orderTotal),
  cartItems,
  numItemsInCart,
};
  try{
const response = await customFetch.post('/orders', {data:info },{
  headers: {
    Authorization: `Bearer ${user.token}`
  }
})
store.dispatch(clearItem());
toast.success("order placed successfully");
queryClient.removeQueries(['orders']);
return redirect('/orders');
  }catch(error){
    const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing the order";
      toast.error(errorMessage);
       if(error?.response?.status === 401 || 403) return redirect("/login")
  }
    
}
const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
        <h2 className='text-xl capitalize font-medium'>shipping information</h2>
        <FormInput label="first name" name="name" type="text"/>
        <FormInput label="address" name="address" type="text"/>
        <div className='mt-4'>
        <SubmitBtn text="place your order"/>
        </div>
        
    </Form>
  )
}

export default CheckoutForm