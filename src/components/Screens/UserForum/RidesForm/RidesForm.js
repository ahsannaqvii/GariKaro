import React, { useRef, useState, useContext  , useEffect} from "react";
import AuthContext2 from "../../../store/auth-context2";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input/Input";
// import Input from "../../UI/Input/Input";
import classes from "./RidesForm.module.css";

function RidesForm(props) {
  //SEAT LOGIC IS BUILT ON THE LOGIC KEH BACKEND SE DATA REFRESH HUKE ATA RAHEGA
  const contextData = useContext(AuthContext2);
  const amountInputRef = useRef();
  const [seatValid, setSeatValid] = useState(true);
  const [userSeats, setuserSeats] = useState(1);
  // const [upperBound, setupperBound] = useState(5);
  const totalSeats = props.Seats;
  // const [confirmRide, setconfirmRide] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // determineVehicleType();
    // const enteredSeats = amountInputRef.current.value;
    // console.log(enteredSeats + "ORIGINAL");
    // const enteredSeatNumber = + enteredSeats; //converted to _isInteger
    // const ss=enteredSeatNumber;
    // console.log(ss + "ORIGINAL");

    // if (
    //   enteredSeats.trim().length === 0 || enteredSeats < 0 || enteredSeats > props.Seats
    // ) {
    //   setSeatValid(false);  
    //   return;
    // }
    // else{
    //   setuserSeats(userSeats);
    //   // console.log(enteredSeats + "BEFORE UPDATE");
    //   // console.log(enteredSeatsU + "STATE VALUE");
    // }
    
  };
  // const seatHandler = (e) => {
  //   setuserSeats(e.target.value);
  // }

  const buttonHandler = () => {
    console.log("HELLO" + userSeats);
    props.riderID(props.id);
    props.setSeats(userSeats);
    contextData.pageShown();  
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>

      <input
        className = {classes.inputBox}
        id ="amount"
        type= "number"
        min= "0" 
        max= { totalSeats }
        step= "1" 
        value= {userSeats}
        onChange= {event => setuserSeats(event.target.value)}
        defaultValue= "0" 
      />
      
      <Button onClick={buttonHandler}>Book Ride</Button>
      {!seatValid && <p>Enter a valid amount!</p>}
    </form>
  );
}

export default RidesForm;
