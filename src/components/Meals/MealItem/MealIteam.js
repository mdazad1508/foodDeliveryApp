import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContex from "../../../store/cart-contex";

const MealItem = (props) => {
  
  const ctx = useContext(CartContex);

  const price = `$${props.price.toFixed(2)}`;

  const onAddtoCartHandler =(amount)=>{

    ctx.addItem({
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.title
    })

  }
  return (
    <li className={styles.meal}>
      <div >
        <h3>{props.title}</h3>
        <div className={styles.discription}>{props.discription} </div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        
        <MealItemForm id={props.id} onAddToCart ={onAddtoCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
