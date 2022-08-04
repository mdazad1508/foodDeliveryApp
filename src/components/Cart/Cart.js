import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContex from "../../store/cart-contex";
import CartItem from "./CartItem";

const Cart = (props)=>{

    const ctx = useContext(CartContex);
    const hasItems = ctx.items.length>0;

    const cartItemRemoveHandler =(id)=>{
        ctx.removeItem(id)
    }

    const cartItemAddHandler=(item)=>{
        ctx.addItem(item);
    }
   
    const cartItems = [
        ctx.items.map(item=> <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd ={cartItemAddHandler.bind(null,item)}/> )]

    return <Modal onAction ={props.onClose}>
         <ul className={styles["cart-items"]}>
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