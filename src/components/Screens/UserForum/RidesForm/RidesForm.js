import React, { useRef, useState, useContext  , useEffect} from "react";
import AuthContext2 from "../../../store/auth-context2";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input/Input";
import classes from "./RidesForm.module.css";
import axios from 'axios';

function RidesForm(props) {
  //SEAT LOGIC IS BUILT ON THE LOGIC KEH BACKEND SE DATA REFRESH HUKE ATA RAHEGA
  const contextData = useContext(AuthContext2);
  const amountInputRef = useRef();
  const [seatValid, setSeatValid] = useState(true);
  const [userSeats, setuserSeats] = useState(1);
  const totalSeats = props.Seats;

  const submitHandler = (e) => {
    e.preventDefault();
    
  };
  
  async function buttonHandler(){
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
