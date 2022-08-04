import { useContext,useState,useEffect } from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContex from "../../../store/cart-contex";



const HeaderCartButton = (props) => {

const [btnIsHighlighted,setBtnIsHighlighted] =useState(false);

const ctx =useContext(CartContex);
const {items} =ctx;

const numberOfCartItems = ctx.items.reduce((curNum,item)=>{
  return curNum +item.amount;
},0);



useEffect(()=>{
  if(items.length===0){
    return;
  }
 setBtnIsHighlighted(true);

 const timer =setTimeout(()=>{
  setBtnIsHighlighted(false);
 },300);

 return ()=>{
  clearTimeout(timer);
 }

},[items])



  return (
    <button className={`${styles.button} ${props.className} ${btnIsHighlighted ? styles.bump : ""}`} onClick={props.onClick} >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
