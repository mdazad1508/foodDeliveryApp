import { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props)=>{
const [amountIsValid,setAmountisValid] =useState(true);
const inputAmountRef = useRef();

 const onSubmitHandler =(event)=>{
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber =+enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
        setAmountisValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);

 }
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
           <Input label="Amount" ref={inputAmountRef} input={{type:"number", id:props.id,min:"1",max:"5",step:"1",defaultValue:"1"} } />
           <button>+Add</button>
           { !amountIsValid && <p>please enter a valid amount (1-5)</p> }
        </form>

    )
}

export default MealItemForm;