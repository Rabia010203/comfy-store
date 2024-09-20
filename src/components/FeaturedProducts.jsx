import React from 'react'
import { SectionTitle } from '../components';

import { ProductsGrid } from './ProductsGrid'

 const FeaturedProducts = () => {
  return (
    <div className=''>
        <SectionTitle text="Featured Products"/>
        <ProductsGrid/>
    </div>
  )
}
export default FeaturedProducts;