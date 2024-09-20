import React from 'react'
import { useLoaderData } from 'react-router-dom'
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
const OrdersList = () => {
    const {orders, meta} = useLoaderData();
    console.log(orders, meta)
  return (
    <div className='mt-8'>
<h2 className='mb-4 text-md capitalize tracking-wider'>Total Orders : {meta.pagination.total}</h2>
<div className='overflow-x-auto'>
<table className='table table-zebra'>
<thead>
<tr>
<th>Name</th>
<th>Address</th>
<th>Products</th>
<th>cost</th>
<th className='hidden sm:block'>Date</th>

</tr>
    
</thead>
<tbody>
{orders.map((order) => {
    const {name, address, numItemsInCart, orderTotal, createdAt} = order.attributes;
    const date = day(createdAt).format('hh:mm a - MMM Do, YYYY');

    return <tr key={order.id}>
    
    <td>{name}</td>
        <td>{address}</td>
        <td>{numItemsInCart}</td>
        <td>{orderTotal}</td>
        <td className='hidden sm:block'>{date}</td>
    
        

    </tr>
})}
</tbody>

</table>
</div>

    </div>
  )
}

export default OrdersList