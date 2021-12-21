import React, { useState, useContext, useEffect } from "react";
import classes from "./RideConfirm.module.css";
import Modal2 from "../../../UI/Modal/Modal";
import axios from "axios";
import { useHistory } from "react-router";
import AuthContext from "../../../store/auth-context";
import AuthContext2 from "../../../store/auth-context2";

import RideItem from "./RideItem";

function RideConfirm(props) {
  let history = useHistory();
  const contextData = useContext(AuthContext2);
  const contextData1 = useContext(AuthContext);

  const [details, setDetails] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchRides = async () => {
      const loadedRides = [];
      await axios
        .get("http://localhost:4000/ride-confirmation", {
          params: {
            id: props.id,
          },
        })
        .then((response) => {
          loadedRides.push({
            id: response.data[0].Ride_ID,
            rollNo: response.data[0].Driver_RollNo,
            vehicleType: response.data[0].Vehicle_Type,
            Date: response.data[0].Date,
            Fare: response.data[0].Fare,
            L_Time: response.data[0].Leaving_Time,
          });

          setDetails(loadedRides);
          setTotalAmount(props.seats * response.data[0].Fare);
        })
        .catch((err) => {
          throw err;
        });
    };

    fetchRides().catch((error) => {
      throw error;
    });
  }, []);
  const rideResults = (
    <ul className={classes["cart-items"]}>
      {details.map((item) => (
        <RideItem
          id={item.id}
          Driver_RollNo={item.rollNo}
          Date={item.Date}
          L_Time={item.L_Time}
          vehicleType={item.vehicleType}
          Fare={item.Fare}
        />
      ))}
    </ul>
  );

  const confirmRidePost = () => {
    console.log(props.id);
    const data = {
     
      id: props.id,
      rollNo: contextData1.rollNo,
      bookedSeats: props.seats,
    };
    console.log("");
    axios
      .post("http://localhost:4000/ride-confirmation", data)
      .then((response) => {
        history.push("/history");
      })
      .catch((err) => {
        throw err;
      });
  };
  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={contextData.pageHidden}
      >
        Close
      </button>
      <button className={classes.button} onClick={confirmRidePost}>
        Confirm Ride
      </button>
    </div>
  );

  const rideModalContent = (
    <React.Fragment>
      {rideResults}
      <div className={classes.total}>
        <span>Total Fare</span>
        <span>{TotalAmount}</span>
      </div>
      {modalActions}
    </React.Fragment>
  );

  return (
    <Modal2>
      {rideModalContent}
    </Modal2>
  );
}
export default RideConfirm;
