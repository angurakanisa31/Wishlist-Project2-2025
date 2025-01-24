import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/FunctionComponents/Navbar";
import Product from "./components/FunctionComponents/Product";
import Wishlist from "./components/FunctionComponents/Wishlist";

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    if (!wishlist.includes(item)) {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/product"
            element={<Product addToWishlist={addToWishlist} />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist wishlist={wishlist} />}
          />
          <Route
            path="/"
            element={<Product addToWishlist={addToWishlist} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
