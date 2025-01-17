import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../Hook/useCart';

const Navbar = () => {
    const [cart] = useCart();
    const {user, signOutUser} = useContext(AuthContext)
       const handleLogOut = () =>{
      signOutUser()
      .then(() => {})
      .catch(error => console.log(error))
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logging Out",
        showConfirmButton: false,
        timer: 1500
      });
    }
    const navOptopns =<>
     <li><Link to={'/'}>Home</Link></li>
      
      <li><Link to={'/menu'}>Menu</Link></li>
      <li><Link to={'/order/salads'}>Order</Link></li>
      <li><Link to={'/login'}>Login</Link></li>

      {
        user ? <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button> : <button className='btn '> Login</button>
      }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl  mx-auto bg-opacity-60 bg-red-500 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-red-500 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">
        {navOptopns}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
     {navOptopns}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <Link to={'/login'}><button className="btn">
        <FaShoppingCart className='mr-2'></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button></Link>
  </div>
</div>    
        </div>
    );
};

export default Navbar;