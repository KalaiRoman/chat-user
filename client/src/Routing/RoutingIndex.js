import React from 'react'
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from './ProtectedRouter';
import Pagenotfound from '../helpers/Pagenotfound';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';
import Chatuser from '../components/chat/Chatuser';
import Avatarimages from '../components/avatarimages/Avatarimages';
// import Signin from '../components/auth/Signin';



function RoutingIndex() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Signin />} />
                <Route exact path="/register" element={<Signup />} />

                <Route element={<ProtectedRouter />}>
                    <Route exact path="/chatuser" element={<Chatuser />} />
                    <Route exact path="/useravatar" element={<Avatarimages />} />

                    <Route path="/*" element={<Pagenotfound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutingIndex