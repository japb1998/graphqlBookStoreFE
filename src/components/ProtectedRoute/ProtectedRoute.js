import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    const isAuth = true;

    return (!isAuth ? <Navigate to="/"/> : <Outlet/> )

}
