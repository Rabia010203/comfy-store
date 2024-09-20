import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormInput } from "../components";
import SelectInput from './SelectInput';
import FormRange from './FormRange';
import FormCheck from './FormCheck';
 const Filters = () => {
  const {meta, params} = useLoaderData();
 const {search, sort, shipping, prize, category, company} = params;
  return (
    <Form className='rounded-md  grid gap-x-4 px-8 py-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center bg-base-200'>
{/* search */}
<FormInput type="search" name="search" label="search product" defaultValue={search} size="input-sm"/>
{/* categories */}
<SelectInput label="select category" defaultValue={category}  name="category" list={meta.categories} size="select-sm"/>
{/* companies */}
<SelectInput label="select company" defaultValue={company} name="company" list={meta.companies} size="select-sm"/>
{/* sort by */}
<SelectInput label="sort by" name="sort" list={["a-z", "z-a", "high", "low"]} size="select-sm" defaultValue={sort}/>
{/* mix-max price */}
<FormRange label="select price" name="price-range" size="range-sm" price={prize}/>
{/* checkbox for free shipping */}
<FormCheck label="free shipping" name="shipping" size="checkbox-sm" defaultChecked={shipping}/>
{/* buttons */}
<button type='submit' className='btn btn-primary btn-sm'>
  search
</button>
<Link to="/products" className='btn btn-accent btn-sm'>
  reset
</Link>
    </Form>
  )
}
export default Filters;