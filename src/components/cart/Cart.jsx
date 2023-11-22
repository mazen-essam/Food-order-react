import React, { useContext, useRef, useState } from "react";
import { CartContext } from "../../Context";
import Dialog from "../ui/Dialog";
export default function Cart() {
   const { itemsCount } = useContext(CartContext);
   const [isOpen, setIsOpen] = useState(true);

   const handleOpen = () => {
      dialog.current.open();
      //   setIsOpen(true);
   };
   const HandleClose = () => {
      dialog.current.close();
   };
   const dialog = useRef();

   return (
      <div className="cart" onClick={handleOpen}>
         <p>
            <i className="fa-solid fa-cart-shopping"></i> Cart{" "}
            <span className="Cart-items-count">{itemsCount}</span>
         </p>
         <Dialog ref={dialog} close={HandleClose} />
      </div>
   );
}
