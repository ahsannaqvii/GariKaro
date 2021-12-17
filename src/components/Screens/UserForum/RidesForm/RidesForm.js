import React, { useRef, useState , useContext } from "react";
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
  // const [upperBound, setupperBound] = useState(5);
  const totalSeats=props.Seats;
  // const [confirmRide, setconfirmRide] = useState(false);
  // const determineVehicleType=()=>{
  //     if(props.vehicleType==="Car"){
  //       setupperBound(4);
  //     }
  //     else {
  //       setupperBound(1);
  //     }
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    // determineVehicleType();
    const enteredSeats = amountInputRef.current.value;
    const enteredSeatNumber = +enteredSeats; //converted to _isInteger

    if (
        enteredSeats.trim().length === 0 ||
        enteredSeatNumber < 1 ||
        enteredSeatNumber > props.Seats
    ) {
      setSeatValid(false);
      return;
    }
  };
  const buttonHandler=()=>{
    contextData.pageShown();
    props.riderID(props.id)
    props.setSeats(props.enteredSeatNumber) 
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1", //validation
          max: {totalSeats}, //validation
          step: "1", //validation
          defaultValue: "1", //validation
        }}
      />
      
      <Button onClick={buttonHandler}>Book Ride</Button>
      {!seatValid && <p>Enter a valid amount!</p>}
    </form>
  );
}

export default RidesForm;
