import React, { useContext } from "react";
// import AuthContext2 from "../../store/auth-context2";
import classes from "./RideDetails.module.css";
// import MealItemForm from "./MealItemForm";
function MealItem(props) {
//   const cartContext = useContext(AuthContext2);
  const price = `$${props.price.toFixed(2)}`;

//   const AddToCartHandler = (amount) => {
//     cartContext.addItem({
//       id: props.id,
//       amount: amount,
//       price: props.price,
//       name: props.name,
//     });
//   };
  
  return (
    <li className={classes.meal}>
      <div>
        {" "}
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* <div>
        <MealItemForm addToCart={AddToCartHandler} />
      </div> */}
    </li>
  );
}

export default MealItem;
