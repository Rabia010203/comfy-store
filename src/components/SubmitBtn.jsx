import React from 'react'

 const SubmitBtn = ({text}) => {
  return (
    <div className='form-control'>
        <button type="submit" className='btn  btn-primary mt-2'><h4 className='text-sm uppercase text-slate-50'>{text}</h4></button>
        

    </div>
  )
}
export default SubmitBtn