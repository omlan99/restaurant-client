import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    const location = useLocation()
    console.log(location)
    const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes("signup")
    return (
        <div>
            {hideHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;