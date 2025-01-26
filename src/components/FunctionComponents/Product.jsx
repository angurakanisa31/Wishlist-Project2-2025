import React from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";

const Product = ({ addToWishlist }) => {
  return (
    <div>
      <h2>This page is meant for Adding Product according to wish!!</h2>
      <ul>
        {[
          'Ride a bike to Ladakh',
          'Build a house',
          'Got placed in FAMG',
          'Buy a Mini Cooper Car',
          'Explore Travelling Places',
          'Buy an iPhone',
          'Traveling alone',
          'Travelling with friends in trekking',
          'Bought an expensive gift for mom',
          'Bought a princess dress',
          'Big Teddy Bear in Blue color',
          'Room full of toys',
          'Live in village',
          'Ride a RX100 Bike',
          'Explore the world',
          'I want an elder brother'
        ].map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addToWishlist(item)}>Add to wishlist</button>
          </li>
        ))}
      </ul>
      <Link to="/wishlist">Go to Wishlist</Link>
    </div>
  );
};

export default Product;
