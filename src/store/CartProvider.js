import React, { useReducer } from "react";
import CartContex from "./cart-contex";

const defaultCartState={
  items:[],
  totalAmount:0
}

const cartReducer = (state,action)=>{
 if(action.type==="ADD"){
  const updatedItems = state.items.concat(action.item);
  const updatedTotalAmount= state.totalAmount + action.item.price *action.item.amount;
   
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
 }
  
}

const CartProvider = (props) => {

  const [cartState,cartDispatch] =useReducer(cartReducer,defaultCartState)
    
  const addItemHandler = (item) => {
    cartDispatch({type:"ADD",item:item})
  };
  const removeItemHandler = (id) => {
    cartDispatch({type:"REMOVE",id:id})
  };

  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
