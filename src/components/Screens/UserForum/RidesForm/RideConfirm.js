import React, { useState, useContext, useEffect } from "react";
import classes from "./RideConfirm.module.css";
import Modal2 from "../../../UI/Modal/Modal";
import axios from "axios";
import AuthContext2 from "../../../store/auth-context2";

function RideConfirm(props) {

  const contextData = useContext(AuthContext2);
    // const totalAmount=props.Seats*props.Fare;
    //TODO : CALCULATE FARE ON THE BASIS OF SEATS AND FARE RETURNED BY DRIVER DB.

    useEffect(() => {
      const fetchRides = async () => {
        await axios.get(
          "http://localhost:4000/ride-confirmation" 
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err)=> {
          throw err;
        })
      };
    }, []);
    
  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={contextData.pageHidden}
      >
        Close
      </button>
      <button className={classes.button}>Confirm Ride</button>
    </div>
  );

  const rideModalContent = (
    <React.Fragment>
      {/* {rideResults} */}
      <div className={classes.total}>
        <span>Total Fare</span>
        {/* <span>{props.id}</span>  ye rahi ID , ab is ID ke basis pai backend se is rider ka data uthalo aur response lado   */}
        {/* jab tum props.seats access karoge tou you will get remaining seats tou wo backend ke table mai alter kardena */}
      </div>
      {modalActions}
    </React.Fragment>
  );

  return (
    <Modal2 > 
      {/* onclick implement karlena */}
      {rideModalContent}
    </Modal2>
  );
}
export default RideConfirm;
  //   const rideResults = (
  //     <ul className={classes["cart-items"]}>
  //       {cartCtx.items.map((item) => (
  //         <CartItem
  //           key={item.id}
  //           name={item.name}
  //           amount={item.amount}
  //           price={item.price}
  //         />
  //       ))}
  //     </ul>
  //   );