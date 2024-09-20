import React, { useState } from 'react'
import { formatPrice } from '../utils';

const FormRange = ({name, label, size, prize}) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(prize || maxPrice)
  return (
    <div className='form-control'>
    <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
    </label>
    <input value={selectedPrice} className={`range range-primary ${size}`} type="range" min={0}  max={maxPrice} name={name} onChange={(e) => setSelectedPrice(e.target.value)} step={step}/>
    <div className='w-full flex justify-between items-center  p-2'>
        <span className='font-medium text-sm'>0</span>
        <span className='font-medium text-sm'>Max : {formatPrice(maxPrice)}</span>
    </div>
    </div>
  )
}
export default FormRange