import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home'
import React from 'react';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            index: true,
            element: <Home />
        }]
    }
])

export default router;