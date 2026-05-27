import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import Layout from "./components/Layout/Layout";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // This stays constant
      children: [
        {
          index: true, // This is the default page for "/"
          element: <Home />,
        },
        {
            path: "/product-details/:id",
            element: <ProductDetails />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        }
      ],
    },
  ]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();