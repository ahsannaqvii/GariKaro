import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
// import MealItem from './MealItem/MealItem';
import classes from "./UserForum.module.css";
import RideDetails from "./RideDetails/RideDetails";
import UserSummary from "./UserSummary";
import RideConfirm from "./RidesForm/RideConfirm";
import AuthContext2 from "../../store/auth-context2";

const UserForum = (props) => {
  const [seatsRemaining, setseatsRemaining] = useState(4);

  const seatChangeHandler = (n) => {
    console.log("PROP VALUE " + n);
    setseatsRemaining(n);
  };
  const [details, setDetails] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRideConfirm, setisRideConfirm] = useState(false);
  const [ID, setID] = useState(1);
  const showRideHandler = () => {
    setisRideConfirm(true);
  };
  const closeRideHandler = () => {
    setisRideConfirm(false);
  };

  useEffect(() => {
    const fetchRides = async () => {
      const response = await axios.get("http://localhost:4000/forum");
      const loadedRides = [];
      for (let key in response.data) {
      
        loadedRides.push({
          id: response.data[key].Ride_ID,
          name: response.data[key].Driver_Name, //printed
          rollNo: response.data[key].Driver_RollNo,
          vehicleType: response.data[key].Vehicle_Type,
          pickUp: response.data[key].Pickup_Location, //printed
          dropoff: response.data[key].Dropoff_Location, //printed
          Seats: response.data[key].Seats, //printed
          Date: response.data[key].Date,
          Fare: response.data[key].Fare,
          L_Time: response.data[key].Leaving_Time,
          carRegNumb: response.data[key].Car_Registration_Number, //printed
        });
      }
      console.log(loadedRides);
      setDetails(loadedRides);
      setLoading(false);
    };

    fetchRides().catch((error) => {
      console.log(error);
      setLoading(false);
      setError(error.message);
    });
  }, []);
  if (Loading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    <section className={classes.errorState}>
      <p>{error}</p>
    </section>;
  }
  const setDriverID = (id) => {
    setID(id);
  };
  const ridesList = details.map((ride) => (
    <RideDetails
      id={ride.id}
      name={ride.name}
      // Driver_RollNo={ride.rollNo}
      dest={ride.dropoff}
      vehicleType={ride.vehicleType}
      // L_Time={ride.L_Time}
      carRegNumb={ride.carRegNumb}
      pickUp={ride.pickUp}
      Seats={ride.Seats}
      Date={ride.Date}
      riderID={setDriverID}
      setSeats={seatChangeHandler}
    />
  ));

  return (
    <AuthContext2.Provider
      value={{ pageShown: showRideHandler, pageHidden: closeRideHandler }}
    >
      <UserSummary />

      <section className={classes.meals}>
        <Card css3={classes.meals}>
          <ul>{ridesList}</ul>
        </Card>
      </section>
      {isRideConfirm && (
        <RideConfirm
          id={ID}
          seats={seatsRemaining}
          myPickUp={props.mypickUp}
          myDest={props.myDest}
        />
      )}
      {/* //RIDE CONFIRM MAI ID BHIJWANI PAREGI , PHIR RIDE CONFIRM KE PAGE MAI US ID KELIYE DRIVER DATA UTHALENA */}
    </AuthContext2.Provider>
  );
};

export default UserForum;
