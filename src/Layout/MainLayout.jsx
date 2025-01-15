import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    const location = useLocation()
    const hideHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {hideHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;