import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
    const tokens = localStorage.getItem("user_token");
    return tokens ?
        <><Outlet /></>
        : <>
            <Navigate to="/" />
        </>

}

export default ProtectedRouter