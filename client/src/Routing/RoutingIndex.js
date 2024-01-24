import React from 'react'
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from './ProtectedRouter';
import Pagenotfound from '../helpers/Pagenotfound';
// import Signin from '../components/auth/Signin';


const Signin = () => {
    return (
        <div>
            kalai
        </div>
    )
}
function RoutingIndex() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Signin />} />
                <Route element={<ProtectedRouter />}>
                    <Route path="/*" element={<Pagenotfound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutingIndex