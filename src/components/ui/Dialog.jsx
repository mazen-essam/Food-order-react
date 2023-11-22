import React, { useContext, useRef, useState } from "react";
import { forwardRef } from "react";
import { seafoodMenu } from "../../MenuItems";
import { useImperativeHandle } from "react";
import { CartContext } from "../../Context";
const Dialog = forwardRef(function Dialog({ open, close }, ref) {
   const {
      delAll,
      addItems,
      delItems,
      allAmount,
      itemsCount,
      state1,
      state2,
      state3,
      state4,
      state5,
   } = useContext(CartContext);
   const items = [state1, state2, state3, state4, state5];
   const dialog = useRef();
   useImperativeHandle(ref, () => {
      return {
         open: () => {
            dialog.current.showModal();
         },
         close: () => {
            dialog.current.close();
         },
      };
   });

   return (
      <>
         <dialog ref={dialog}>
            {seafoodMenu.map((item) => {
               return (
                  <>
                     <div className="item-container" key={item.id}>
                        <div className="item">{item.name}</div>
                        <div className="item">
                           {items[item.id - 1]}
                           <button
                              onClick={() => {
                                 addItems(item.id);
                              }}
                           >
                              +
                           </button>{" "}
                           <button
                              onClick={() => {
                                 delItems(item.id);
                              }}
                           >
                              -
                           </button>
                        </div>
                     </div>
                  </>
               );
            })}
            <form
               method="dialog"
               onSubmit={() => {
                  close();
               }}
            >
               <div className="total">
                  <p>
                     Total ammount : <span>{allAmount}$</span>
                  </p>
               </div>
               <button>close</button>
               <button
                  onClick={() => {
                     delAll();
                     close();
                  }}
               >
                  Check out
               </button>
            </form>
         </dialog>
      </>
   );
});
export default Dialog;
