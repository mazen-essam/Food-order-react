import React from "react";
import { seafoodMenu } from "../../MenuItems";
import { CartContext } from "../../Context";
import { useContext } from "react";
export default function Menu() {
   const { itemsCount, addItems,delItems, state1, state2, state3, state4, state5 } =
      useContext(CartContext);
   const state = [state1, state2, state3, state4, state5];
   return (
      <div className="container-menu">
         <div className="menu">
            {seafoodMenu.map((item) => {
               return (
                  <div className="item" key={item.name}>
                     <div className="dis">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p className="item-price">{item.price}$</p>
                     </div>
                     <div className="add">
                        <p>Amount : {state[item.id - 1]}</p>
                        <button
                           className="btn"
                           onClick={() => {
                              addItems(item.id);
                           }}
                        >
                           + Add
                        </button>
                        
                        <button
                           className="btn"
                           onClick={() => {
                              delItems(item.id);
                           }}
                        >
                           - remove
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
