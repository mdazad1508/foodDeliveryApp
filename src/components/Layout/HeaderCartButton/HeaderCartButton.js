import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContex from "../../../store/cart-contex";



const HeaderCartButton = (props) => {

const ctx =useContext(CartContex);

const numberOfCartItems = ctx.items.reduce((curNum,item)=>{
  return curNum +item.amount;
},0)

  return (
    <button className={`${styles.button} ${props.className}`} onClick={props.onClick} >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
