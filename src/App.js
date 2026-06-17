
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";
import MyOrders from "./pages/MyOrders/MyOrders";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            theme="light"
          />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;

