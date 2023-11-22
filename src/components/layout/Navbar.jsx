import React from "react";
import Cart from "../cart/Cart";
export default function Navbar() {
   return (
      <div className="navbar">
         <div className="item">
            <h3>ReactMeals</h3>
         </div>
         <div className="item2">
            <Cart />
         </div>
      </div>
   );
}
