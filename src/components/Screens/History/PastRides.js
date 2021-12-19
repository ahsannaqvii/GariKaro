import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {Row} from 'react-bootstrap';
import classes from "../History/PastRides.module.css";
import RideInfo from "./RideInfo";

const PastRides = (props) => {
    const [details, setDetails] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    var loadedRides = [];
    useEffect(() => {
      loadedRides = [];
      const fetchRides = async () => {
      const response = await axios.get("http://localhost:4000/past-rides",
      {
        params: {
          rollNo: props.rollNo
        }
      });
    for (let key in response.data) {
        loadedRides.push({
        id: response.data[key].Ride_ID,
        name: response.data[key].Driver_Name,
        rollNo: response.data[key].Driver_RollNo,
        vehicleType: response.data[key].Vehicle_Type,
        pickUp: response.data[key].Pickup_Location,
        dropoff: response.data[key].Dropoff_Location,
        Seats: response.data[key].Seats,
        Date: response.data[key].Date,
        Fare: response.data[key].Fare,
        L_Time: response.data[key].Leaving_Time,
        carRegNumb: response.data[key].Car_Registration_Number,
        });
        
    }
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
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    <section>
      <p>{error}</p>
    </section>;
  }

  console.log(loadedRides);
  const ridesList = details.map((ride) => (
    <RideInfo
      id={ride.id}
      name={ride.name}
      dest={ride.dropoff}
      vehicleType={ride.vehicleType}
      L_Time={ride.L_Time}
      carRegNumb={ride.carRegNumb}
      pickUp={ride.pickUp}
      Seats={ride.Seats}
      Date={ride.Date}
      Fare={ride.Fare}
    />
  ));

  return (
    <Row className={classes.setPage}>
      {ridesList}
    </Row>
    );
};

export default PastRides;
