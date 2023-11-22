import React, { createContext, useCallback, useEffect } from "react";
import { useContext, useState } from "react";
export const CartContext = createContext({
   itemsCount: 0,
   state1: 0,
   state2: 0,
   state3: 0,
   state4: 0,
   state5: 0,
   allAmount: 0,
   addItems: () => {},
   delItems: () => {},
   delAll: () => {},
});
export default function Context({ children }) {
   const [state1, setState1] = useState(0);
   const [state2, setState2] = useState(0);
   const [state3, setState3] = useState(0);
   const [state4, setState4] = useState(0);
   const [state5, setState5] = useState(0);
   const [itemsCount, setItemsCount] = useState(0);
   const [allAmount, setAllAmount] = useState(
      +state1 * 16 + +state2 * 24 + +state3 * 20 + +state4 * 35 + +state5 * 20
   );
   // Functions to add and delete from each state
   const addToState1 = () => setState1(state1 + 1);
   const deleteFromState1 = () => setState1(state1 - 1);

   const addToState2 = () => setState2(state2 + 1);
   const deleteFromState2 = () => setState2(state2 - 1);

   const addToState3 = () => setState3(state3 + 1);
   const deleteFromState3 = () => setState3(state3 - 1);

   const addToState4 = () => setState4(state4 + 1);
   const deleteFromState4 = () => setState4(state4 - 1);

   const addToState5 = () => setState5(state5 + 1);
   const deleteFromState5 = () => setState5(state5 - 1);

   // Function to add all states together
   const addAllStates = () => {
      const sum = +state1 + +state2 + +state3 + +state4 + +state5;
      alert(`Sum of all states: ${sum}`);
   };

   const HandleADDitems = (e) => {
      if (e == 1) {
         setState1((prevState) => {
            return prevState + 1;
         });
      } else if (e == 2) {
         setState2((prevState) => {
            return prevState + 1;
         });
      } else if (e == 3) {
         setState3((prevState) => {
            return prevState + 1;
         });
      } else if (e == 4) {
         setState4((prevState) => {
            return prevState + 1;
         });
      } else if (e == 5) {
         setState5((prevState) => {
            return prevState + 1;
         });
      }
      setItemsCount((prevState) => {
         return prevState + 1;
      });
   };
   //    const HandleDELitems = (e) => {
   //       setItemsCount((prevState) => {
   //          return prevState - 1;
   //       });
   //       if (e == 1) {
   //          deleteFromState1();
   //       } else if (e == 2) {
   //          deleteFromState2();
   //       } else if (e == 3) {
   //          deleteFromState3();
   //       } else if (e == 4) {
   //          deleteFromState4();
   //       } else if (e == 5) {
   //          deleteFromState5();
   //       }
   //    };
   const HandleDELitems = (e) => {
      if (e === 1 && state1 > 0) {
         decrementAll();
         setState1((prevState) => prevState - 1);
      } else if (e === 2 && state2 > 0) {
         decrementAll();
         setState2((prevState) => prevState - 1);
      } else if (e === 3 && state3 > 0) {
         decrementAll();
         setState3((prevState) => prevState - 1);
      } else if (e === 4 && state4 > 0) {
         decrementAll();
         setState4((prevState) => prevState - 1);
      } else if (e === 5 && state5 > 0) {
         decrementAll();
         setState5((prevState) => prevState - 1);
      } else {
         // Handle invalid input or state already at zero
         console.log("Invalid input or state is already at zero");
      }
   };
   const HandleDElALL = () => {
      setItemsCount(0);
      setState1(0);
      setState2(0);
      setState3(0);
      setState4(0);
      setState5(0);
   };
   useEffect(() => {
      setAllAmount(
         +state1 * 16 +
            +state2 * 24 +
            +state3 * 20 +
            +state4 * 35 +
            +state5 * 20
      );
   }, [state1, state2, state3, state4, state5]);
   const decrementAll = useCallback(() => {
      setItemsCount((prevState) => {
         return prevState - 1;
      });
   }, HandleDELitems);

   const CTXvalue = {
      itemsCount: itemsCount,
      addItems: HandleADDitems,
      delItems: HandleDELitems,
      delAll: HandleDElALL,
      state1: state1,
      state2: state2,
      state3: state3,
      state4: state4,
      state5: state5,
      allAmount: allAmount,
   };
   //    useEffect(() => {
   //       localStorage.setItem("menuItems", [
   //          state1,
   //          state2,
   //          state3,
   //          state4,
   //          state5,
   //       ]);
   //       const items = localStorage.getItem("menuItems");
   //       setState1(items[0]);
   //       setState2(items[1]);
   //       setState3(items[2]);
   //       setState4(items[3]);
   //       setState5(items[4]);
   //    }, []);
   return (
      <CartContext.Provider value={CTXvalue}>{children}</CartContext.Provider>
   );
}
