import React from "react";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/dashboard"
import Layout from "../helpers/Layout";


const AppRouter = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Dashboard/>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter;