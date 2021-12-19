import axios from "axios";
// import { useEffect, useState } from "react";
import {Button , Card , Row , Col} from 'react-bootstrap'
// import Card from "../../UI/Card/Card";
// import classes from "../PastRides/PastRides.module.css";
// import RideDetails from "../UserForum/RideDetails/RideDetails";
// import UserSummary from "../UserForum/UserSummary";
// import RideConfirm from "./RidesForm/RideConfirm";
// import AuthContext2 from "../../store/auth-context2";

// const loadedRides = [];
const PastRides = () => {
//     const [seatsRemaining, setseatsRemaining] = useState(4);

//     const seatChangeHandler = (n) => {
//         console.log("PROP VALUE " + n);
//         setseatsRemaining(n);
//     };
//     const [details, setDetails] = useState([]);
//     const [Loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isRideConfirm, setisRideConfirm] = useState(false);
//     const [ID, setID] = useState(1);
//     const showRideHandler = () => {
//         setisRideConfirm(true);
//     };
//     const closeRideHandler = () => {
//         setisRideConfirm(false);
//     };

    // useEffect(() => {
    //     const fetchRides = async () => {
    //     const response = await axios.get("http://localhost:4000/forum");
    //     for (let key in response.data) {
    //         loadedRides.push({
    //         id: response.data[key].Ride_ID,
    //         name: response.data[key].Driver_Name,
    //         rollNo: response.data[key].Driver_RollNo,
    //         vehicleType: response.data[key].Vehicle_Type,
    //         pickUp: response.data[key].Pickup_Location,
    //         dropoff: response.data[key].Dropoff_Location,
    //         Seats: response.data[key].Seats,
    //         Date: response.data[key].Date,
    //         Fare: response.data[key].Fare,
    //         L_Time: response.data[key].L_Time,
    //         carRegNumb: response.data[key].Car_Registration_Number,
    //         });
    //     }
    //     setDetails(loadedRides);
    //     setLoading(false);
    //     };

    //     fetchRides().catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //     setError(error.message);
    //     });
    // }, []);
//   if (Loading) {
//     return (
//       <section className={classes.mealsLoading}>
//         <p>Loading ...</p>
//       </section>
//     );
//   }

//   if (error) {
//     <section className={classes.errorState}>
//       <p>{error}</p>
//     </section>;
//   }
  // const setDriverID = (id) => {
  //   setID(id);
  // };
  // const ridesList = details.map((ride) => (
  //   <RideDetails
  //     id={ride.id}
  //     name={ride.name}
  //     // Driver_RollNo={ride.rollNo}
  //     dest={ride.dropoff}
  //     vehicleType={ride.vehicleType}
  //     // L_Time={ride.L_Time}
  //     carRegNumb={ride.carRegNumb}
  //     pickUp={ride.pickUp}
  //     Seats={ride.Seats}
  //     Date={ride.Date}
  //     riderID={setDriverID}
  //     setSeats={seatChangeHandler}
  //   />
  // ));

  return (
    <Row>
      <Col style={{margin : "1.5rem"}}>
        <Card>
        <Card.Header as="h5">Past-Rides</Card.Header>
        <Card.Body>
          <Card.Title>Mr.Muhammad Mustafa</Card.Title>
          <Card.Text>
            Gulshan-e-Iqbal, Karachi, Sindh, Pakistan
          </Card.Text>
          <Card.Text>
            Gulshan-e-Maymar, Karachi, Sindh, Pakistan
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    );
};

export default PastRides;
