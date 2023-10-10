import React from "react";
import { Route, Routes } from "react-router-dom";
import Sellform from "./pages/Sellform";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; // Import the ProductDetails component
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

export default function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sell" element={<Sellform />} />
            <Route path="/product/:id" component={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
  );
}
