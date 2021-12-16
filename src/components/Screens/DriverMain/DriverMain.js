import "./DriverMain.css";
import React, { useState, useEffect, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import carsvg from "../../../assets/images/car.svg";
import bikesvg from "../../../assets/images/bike.jpeg";
import Input from "./PlacesAutocomplete";
import Maps from "./DirectionPath";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

function DriverMain() {
  let history = useHistory();
  const contextData = useContext(AuthContext);

  const [pickUp, setPickUp] = useState({
    address: "",
    lat: 24.918027,
    lng: 67.0632675,
  });
  const [dest, setDest] = useState({
    address: "",
    lat: 24.8568991,
    lng: 67.0632675,
  });
  const [org, setOrigin] = useState({ lat: 24.918027, lng: 67.0632675 });
  const [mapReference, setMapReference] = useState(null);
  const [mapsReference, setMapsReference] = useState(null);
  //RouteMap Work
  const [showingInfoWindow, setInfo] = useState(false);
  const [activeMarker, setMarker] = useState({});
  const [selecetdPlace, setPlace] = useState({});

  useEffect(() => {}, [pickUp, dest, mapReference, mapsReference]);

  const [seats, setSeats] = useState(0);
  // const [driverInfo , setDriver] = useState("Select Driver");
  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("Car");
  const [carRegistrationNumber, setcarRegistrationNumber] =
    useState("AXP-9999");
  const [Fare, setFare] = useState(0);
  const [Date, setDate] = useState("12-12-2000");

  const SeatshandleChange = (e) => {
    setSeats(e.target.value);
  };

  // const DriverhandleChange = (e) => {
  //     setDriver(e.target.value);
  // }

  const timehandleChange = (e) => {
    setTime(e.target.value);
  };

  const carTypeChangeHandler = (e) => {
    setCarType(e.target.value);
  };

  const carRegHandler = (e) => {
    setcarRegistrationNumber(e.target.value);
  };

  const FareHandleChange = (e) => {
    setFare(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  async function driverHandler() {
    const name = contextData.userName;
    const email=contextData.emailID;
    // const email=contextData.userEmail;
    console.log("DRIVERNAME BAHU HARD:");
    console.log(email);
    const d = {
      pickup: pickUp,
      dropoff: dest,  
      seats: seats,
      driver: name,
      leavingTime: time,
      email: email,
      Fare: Fare,
      //   carType: carType,
      carRegistrationNumber: carRegistrationNumber,
      Date: Date,
    };
    history.push("/user");
    try {
      const result = await axios.post("http://localhost:4000/driver", d);
      if (!result.statusText === "OK") {
        throw new Error("Couldnt fetch Data!");
      }

      console.log(result);
    } catch (err) {
      console.error("FAILED!");
      // setuserAuthenticated(false);
    }
  }

  return (
    <Row>
      <Col sm={6}>
        <Form className="formLayout">
          <Row>
            <Col>
              <label>Driver</label>
            </Col>
            <Col>
              {/* onChange ={DriverhandleChange} */}
              <Form.Select className="mb-3 dropdownForm">
                <Col>
                  <Form.Control type="dropdown" placeholder="Driver" />
                </Col>

                <option value="Select driver">Select driver</option>
                <option>{contextData.userName}</option>
                {/* value = "Ahsan Naqvi" */}
              </Form.Select>
            </Col>
          </Row>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPickup"
          >
            <Form.Label column sm={6}>
              {" "}
              Pickup{" "}
            </Form.Label>
            <Col sm={6}>
              <Input name="setPick" parentCallback={setPickUp} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDropoff"
          >
            <Form.Label column sm={6}>
              Drop-Off / Stop
            </Form.Label>
            <Col sm={6}>
              <Input name="setDest" parentCallback={setDest} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDropoff"
          >
            <Form.Label column sm={6}>
              Car Type
            </Form.Label>
            <Col sm={6}>
              <Button
                style={{ background: "#EEEEEE" }}
                value="car"
                type="button"
                variant="light"
                className="cartype-btn"
                onClick={carTypeChangeHandler}
              >
                <img src={carsvg}></img>
              </Button>
              <Button
                style={{ background: "#EEEEEE" }}
                value="bike"
                type="button"
                variant="light"
                className="cartype-btn"
                onClick={carTypeChangeHandler}
              >
                <img src={bikesvg}></img>
              </Button>
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <label>Leaving Time</label>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="time"
                placeholder="time"
                onChange={timehandleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label> Number of seats </label>
            </Col>
            <Col>
              <Form.Select
                className="mb-3 dropdownForm"
                onChange={SeatshandleChange}
              >
                <Col>
                  <Form.Control type="dropdown" placeholder="Seats" />
                </Col>
                <option value="0">Select Number Of Seats</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <label>Car Registration Number</label>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="AAA-000"
                onChange={carRegHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Leaving Date</label>
            </Col>
            <Col>
              <Form.Control
                className="mb-3"
                type="date"
                placeholder="date"
                onChange={dateHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Fare</label>
            </Col>
            <Col>
              <Form.Control
                className="mb-4"
                type="number"
                placeholder="PKR"
                onChange={FareHandleChange}
              />
            </Col>
          </Row>
          <Button
            style={{ background: "#5B0A0C" }}
            className="submit-btn"
            type="submit"
            onClick={driverHandler}
          >
            Next
          </Button>

          <div className="BelowForm mb-3">
            <a>View Scheduled Rides</a>
            <br />
            <a>View Past Rides</a>
          </div>
        </Form>
      </Col>

      <Col sm={6}>
        <Maps places={[pickUp, dest]} />
      </Col>
    </Row>
  );
}

export default DriverMain;
{
  /* <input type="radio" id="myButton" />
<label><img src={bikesvg}></img></label> */
}
{
  /* <Form.Check 
    type="radio"
    name = "CarType"
    id={`Car`}
    label={carsvg}
    className = "mb-3"
/>   */
}

{
  /* <Form.Check 
    type="radio"
    name = "CarType"
    id={`Bike`}
    label={`Bike`}
    className = "mb-3"
/>   */
}
