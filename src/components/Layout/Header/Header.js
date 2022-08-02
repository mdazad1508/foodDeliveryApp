import React from "react";
import styles from "./Header.module.css";
import myImage from "../../images/Food_header.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";


const Header = (props) => {
   
 
  return (
    <React.Fragment>
    <div className={styles.header}  >
      <h1 > Food app </h1>
      <HeaderCartButton className={styles.btn} onClick={props.onShowCart} />
      
    </div>
    <div className={styles.img}>
    <img src= {myImage} alt="this is a food buffet " />
    </div>
    </React.Fragment>
  );
};

export default Header;
