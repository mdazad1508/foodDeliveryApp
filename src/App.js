import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

   const [cartClicked,setCartClicked] = useState(false);
    
   const showCartHandler =()=>{
    setCartClicked(true);
   }

   const hideCartHandler =()=>{
    setCartClicked(false);
   }


  return (
    <CartProvider>
     {cartClicked && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
    <Meals/>
    </main>
     </CartProvider>
  );
}

export default App;

//since everyone here needs access of cart provider to change state so we wrapped it in CartProvider
