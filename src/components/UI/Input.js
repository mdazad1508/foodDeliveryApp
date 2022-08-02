import React from "react";

import styles from "./Input.module.css";

const Input =React.forwardRef((props,ref)=>{
    return (
        <div className={styles.input}>
        <label htmlFor={props.input.id} > {props.label} </label>
         <input ref={ref} {...props.input} /> 

        </div>

    )
}
)

export default Input;

//{...props.input} />   it will copy all the objects as it is in the object