import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
    const tokens = true;
    return tokens ?
        <><Outlet /></>
        : <>
            <Navigate to="/login" />
        </>

}

export default ProtectedRouter