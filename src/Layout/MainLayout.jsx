import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h2>Hello Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;