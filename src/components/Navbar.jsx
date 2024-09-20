import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

 const Navbar = () => {
const dispatch = useDispatch()
const handleTheme = () => {
  dispatch(toggleTheme())

}
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  
  
  return (
    <nav className='bg-base-200 h-16  lg:flex justify-around'>
        <div className='navbar align-element'>
<div className='navbar-start'>
    <NavLink to="/" className="hidden lg:flex items-center btn btn-primary text-3xl">c</NavLink>


<div className='dropdown'>
<label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2  menu menu-sm dropdown-content rounded-box shadow bg-base-200 w-52">
<NavLinks/>
            </ul>
</div>

</div>
<div className='navbar-center hidden lg:flex'>
<ul className='menu menu-horizontal'>
<NavLinks/>
</ul>
</div>
<div className="navbar-end">
<label className='swap swap-rotate'>
  <input type='checkbox' onChange={handleTheme}/>
  {/* white theme */}
<BsSunFill className='swap-on'/>
{/* dark theme */}
<BsMoonFill className='swap-off'/>
</label>
    <NavLink to="cart" className="btn btn-ghost btn-md ml-4 btn-circle">

<div className='indicator'>
<BsCart3 className='h-6 w-6'/>
<span className='badge badge-sm badge-primary indicator-item'> {numItemsInCart}</span>
</div>
    </NavLink>
</div>
        </div>
    </nav>
  )
}
export default Navbar;