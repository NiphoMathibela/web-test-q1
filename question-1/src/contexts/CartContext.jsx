import { createContext, useState, useEffect} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../config/firebase-config"

export const CartContext = createContext();



const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{cart, setCart}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;




// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartContextProvider = (props) => {
//   const [cart, setCart] = useState([]);

//   return (
//     <CartContext.Provider value={{cart, setCart}}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartContextProvider;
