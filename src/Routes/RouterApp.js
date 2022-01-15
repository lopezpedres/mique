import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Layout from "../Layouts/Layout";
import NotFound from "../Pages/NotFound";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout/>} />
                <Route  path="*" element={<NotFound/>} />
            </Routes>

            
            
        </BrowserRouter>
    )
}

export default RouterApp
