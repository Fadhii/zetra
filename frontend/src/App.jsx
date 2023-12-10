import React from "react";
import { Route, Routes } from "react-router-dom";
import Sellform from "./pages/Sellform";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; // Import the ProductDetails component
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Help from "./pages/Help";
import FaqPage from "./pages/FaqPage";
import Selling from "./pages/Selling";


export default function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sell" element={<Sellform />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/product/:id" component={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<Services />} />

            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/*" element={<Error />} />

          </Routes>
      </div>
  );
}