import React from "react";
import { FaCalendar, FaCalendarCheck, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { FaLetterboxd, FaSquareLetterboxd, FaStreetView } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hook/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <NavLink to={'/dashboard/home'}><FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
            <NavLink to="" className ="uppercase">
            <FaCalendar></FaCalendar>
             Reservation</NavLink>
          </li>
          <li>
            <NavLink to="" className ="uppercase">
            <FaWallet></FaWallet>
             Payment History</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className ="uppercase">
            <FaShoppingCart></FaShoppingCart>
             My cart ({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="" className ="uppercase">
            <FaStreetView></FaStreetView>
             Add Review</NavLink>
          </li>
          <li>
            <NavLink to="" className ="uppercase">
            <FaCalendarCheck></FaCalendarCheck>
             My Booking</NavLink>
          </li>
          <div className="divider"></div>


          <li>
            <NavLink to="/" className ="uppercase">
            <FaHome></FaHome>
             Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu" className ="uppercase">
            <FaList></FaList>
             Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salads" className ="uppercase">
            <FaShoppingBag></FaShoppingBag>
             Order</NavLink>
          </li>
          <li>
            <NavLink to="" className ="uppercase">
            <FaSquareLetterboxd></FaSquareLetterboxd>
                Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
      
      </div>
    </div>
    
  );
};

export default Dashboard;
