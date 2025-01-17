import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
            <NavLink><FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashbooard/cart">
            <FaShoppingCart></FaShoppingCart>
             M cart</NavLink>
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
