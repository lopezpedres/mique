import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home";
import Layout from "../Layouts/Layout";
import Projects from "../Pages/Projects";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route  path="*" element={<Projects/>} />
            </Routes>

            </Layout>
            
        </BrowserRouter>
    )
}

export default RouterApp
