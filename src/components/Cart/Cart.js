import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContex from "../../store/cart-contex";

const Cart = (props)=>{

    const ctx = useContext(CartContex);
    const hasItems = ctx.items.length>0;
   
    const cartItems = [
        ctx.items.map(item=> <li> <pre>{item.name}  {item.amount}  {item.price}</pre> </li> )]

    return <Modal onAction ={props.onClose}>
         <ul>
          {cartItems}
        </ul>
        <div className={styles.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose} >Close</button>
        { hasItems && <button className={styles.button} onClick={props.onClose} >Order</button>}

        </div>
          
    </Modal>
}

export default Cart;