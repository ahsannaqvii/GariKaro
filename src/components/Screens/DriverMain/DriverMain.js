import "./DriverMain.css";
import  { useState, useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import Input from "./PlacesAutocomplete";
import Maps from "./DirectionPath";
import AuthContext from "../../store/auth-context";
import { useHistory} from "react-router";

function DriverMain(props) {
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

  const [seats, setSeats] = useState(0);

  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("Car");
  const [carRegistrationNumber, setcarRegistrationNumber] = useState("AXP-9999");
  const [Fare, setFare] = useState(0);
  const [Date, setDate] = useState("12-12-2000");

  const SeatshandleChange = (e) => {
    setSeats(e.target.value);
  };

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
    const rollNo = contextData.rollNo;
    setFare(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const driverHandler = async () => {
    const name = contextData.userName;
    const rollNo = contextData.rollNo;
    const d = {
      pickup: pickUp,
      dropoff: dest,
      seats: seats,
      driver: name,
      leavingTime: time,
      rollNo: rollNo,
      Fare: Fare,
      carType: carType,
      carRegistrationNumber: carRegistrationNumber,
      Date: Date,
    };
    props.set(d);
    try {
      const response = await axios.post("http://localhost:4000/driver", d);

      if (response.data.carFound === "true") {
        props.carRegister(1, carRegistrationNumber,  response.data.carFound );
      } else if (response.data.carFound === "false") {
        props.carRegister(2, carRegistrationNumber);
      }
      history.push({
        pathname: '/car-details/' + carRegistrationNumber,        
      });
    } 
    catch (err) {
        throw err;
    }
  };

  return (
    <Row>
      <Col sm={6}>
        <Form className="formLayout" method="POST">
          <Row>
            <Col>
              <label>Driver</label>
            </Col>
            <Col>
              <Form.Select className="mb-3 dropdownForm">
                <Col>
                  <Form.Control type="dropdown" placeholder="Driver" required />
                </Col>

                <option value="Select driver">Select driver</option>
                <option>{contextData.userName}</option>
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
              <Input className = "inputbox" name="setPick" parentCallback={setPickUp} required=""/>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDropoff"
            required={true}
          >
            <Form.Label column sm={6}>
              Drop-Off / Stop
            </Form.Label>
            <Col sm={6}>
              <Input name="setDest" parentCallback={setDest} required=""/>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDropoff"
          >
            <Form.Label column sm={6} required>
              Car Type
            </Form.Label>
            <Col sm={6}>
              <Row>
                <Col sm={6}>
                  <Form.Check
                    type="radio"
                    name="CarType"
                    value="Car"
                    id={`Car`}
                    label={`Car`}
                    className="mb-3"
                    onChange={carTypeChangeHandler}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Check
                    type="radio"
                    value="Bike"
                    name="CarType"
                    id={`Bike`}
                    label={`Bike`}
                    className="mb-3"
                    onChange={carTypeChangeHandler}
                  />
                </Col>
              </Row>
           
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
                required={true}
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
                required={true}
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
                required
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
                required={true}
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
                required
                onChange={FareHandleChange}
              />
            </Col>
          </Row>
          <button
            style={{ background: "#5B0A0C" }}
            className="submit-btn"
            type="button"
            onClick={driverHandler}
            // to={`/car-details/${carRegistrationNumber}`}
          >
            Next
          </button>

          <div className="BelowForm mb-3">
            
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

//RouteMap Work
// const [showingInfoWindow, setInfo] = useState(false);
// const [activeMarker, setMarker] = useState({});
// const [selecetdPlace, setPlace] = useState({});
// const [org, setOrigin] = useState({ lat: 24.918027, lng: 67.0632675 });
// const [mapReference, setMapReference] = useState(null);
// const [mapsReference, setMapsReference] = useState(null);
   {/* <Button
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
              </Button> */}