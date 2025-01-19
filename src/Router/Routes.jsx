import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import UserHome from "../Pages/Dashboard/UserHome";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path : "/order/:category",
        element  : <Order></Order>
      },
      {
        path : "login",
        element: <Login></Login>
      },
      {
        path : 'signup',
        element : <SignUp></SignUp>
    }
      
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path : 'allUsers',
        element : <AllUsers></AllUsers>
      },
      {
        path : 'addItems',
        element : <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      }


    ]
  }
]);
