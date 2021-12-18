import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import { Form, Row, Col, Button } from "react-bootstrap";
import { CirclePicker } from "react-color";
import { useParams, Route, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";
import Modal2 from "../../UI/Modal/Modal";
import VehicleItem from "./VehicleItem";
import CarFound from "./CarFound";

function Step2(props) {
  const params1 = useParams();
  const history = useHistory();
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carMake, setcarMake] = useState("");
  const [carColor, setCarColor] = useState({ background: "#fff" });
  const [carFound, setcarFound] = useState(false);
  const [carRegistrationNumber, setcarRegistrationNumber] = useState(params1.carReg)

  const RegHandler=(e)=>{
    setcarRegistrationNumber(e.target.value);
  }
  const ColorhandleChange = (color) => {
    setCarColor({ background: color.hex });
  };

  const carModelhandleChange = (e) => {
    setCarModel(e.target.value);
  };

  const carNamehandleChange = (e) => {
    setCarName(e.target.value);
  };

  const carMakehandleChange = (e) => {
    setcarMake(e.target.value);
  };
  const negCarFound = () => {
    setcarFound(false);
  };

  const carDetails = async () => {
    const carInfo = {
      pickup: props.pickUp,
      dropoff: props.dest,
      seats: props.seats,
      driver: props.Name,
      leavingTime: props.time,
      rollNo: props.rollNo,
      Fare: props.Fare,
      Date: props.Date,
      carType: props.carType,
      name: props.Name,
      CarRegistrationNumber: carRegistrationNumber,
      pickUp: props.pickUp,
      dest: props.dest,
      //Jo data found hoa hai woh yahan bhej dena, warna agar gaari found nai hoi tou form se data already araha hai
      carName: carName,
      carModel: carModel,
      carMake: carMake,
      carColor: carColor,
    };
    console.log("KYA YECHALRAHA HAI?");
    const result = await axios.post(
      "http://localhost:4000/car-details/" + params1.carReg,
      carInfo
    );
    console.log(result);
    console.log("CAR FOUNDSTEP TWO : " + carFound);
    history.push("/user");
    //IF ride added : false -- that mean ride already exists.
    //If ride Added : true  - ride added
    //if car added :false -- gari already exists.
    //if car added : true -- gari dalgye hai car-details wale page se .
  };
  useEffect(() => {
    // console.log(params1.carReg);
    const fetchRides = async () => {
      const result = await axios.get(
        "http://localhost:4000/car-details/" + params1.carReg
      );
      console.log(result);
      if (result.data.length == 0) {
        console.log("empty array");
        setcarFound(false);
      } else {
        console.log("fill array");
        setcarFound(true);
        setCarModel(result.data[0].Car_Model);
        setcarMake(result.data[0].Car_Make);
        setCarName(result.data[0].Car_Name);
      }
      console.log(result);

    };
    console.log("CAR FOUNDSTEP TWO : " + carFound);
    fetchRides().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      {carFound && (
        <CarFound
          carMake={carMake}
          carModel={carModel}
          carName={carName}
          carID={carRegistrationNumber}
          onClick={carDetails}
          carNeg={negCarFound}
        />
      )}
      {!carFound && (
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Form className="formLayout">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPickup"
              >
                <Form.Label column sm={6}>
                  Car Make
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="textarea"
                    placeholder="HONDA"
                    onChange={carMakehandleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPickup"
              >
                <Form.Label column sm={6}>
                  Car Number
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="textarea"
                    placeholder="KBC-6006"
                    onChange={RegHandler}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPickup"
              >
                <Form.Label column sm={6}>
                  Car Name
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="textarea"
                    placeholder="Car Name"
                    onChange={carNamehandleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPickup"
              >
                <Form.Label column sm={6}>
                  Car Model
                </Form.Label>
                <Col sm={6}>
                  <Form.Control
                    type="textarea"
                    placeholder="YYYY"
                    onChange={carModelhandleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-5"
                controlId="formHorizontalPickup"
              >
                <Form.Label column sm={6}>
                  Car Color
                </Form.Label>
                <Col sm={6}>
                  <CirclePicker
                    colors={[
                      "#020202",
                      "#FCF9F9",
                      "#3f51b5",
                      "#6d6b6a",
                      "#673ab7",
                      "#637f64",
                      "#89cff0",
                      "#03a9f4",
                      "#00bcd4",
                      "#009688",
                      "#4caf50",
                      "#8bc34a",
                      "#cddc39",
                      "#ffeb3b",
                      "#ffc107",
                      "#ff9800",
                      "#ff5722",
                      "#795548",
                      "#607d8b",
                    ]}
                    color={carColor.background}
                    onChangeComplete={ColorhandleChange}
                  />
                </Col>
              </Form.Group>
              <Button
                style={{ background: "#5B0A0C" }}
                className="mb-3 step2-submit-btn"
                type="button"
                onClick={carDetails}
              >
                Post Ride
              </Button>
            </Form>
          </Col>
          <Col sm={2}></Col>
        </Row>
      )}
    </div>
  );
}

export default Step2;
// const rideResults = (
//   <ul className="cart-items">
//     <VehicleItem carModel={carModel} carMake={carMake} carName={carName} carName={carName} />
//     ))
//   </ul>
// );
// const MODELLING = (
//   <div className="actions">
//     <button className="button--alt" onClick={negCarFound}>
//       Edit
//     </button>

//     <button className="button" onClick={negCarFound}>
//       Post Ride{" "}
//     </button>

//   </div>
// );
// const ABC = () => {
//   console.log("KYN NAI CHALRAHA BAY?");
//   <React.Fragment>
//     {rideResults}
//     <div className="total">
//       <span>Total Fare</span>
//       {/* <span>{props.id}</span> */}
//     </div>
//     {MODELLING}
//   </React.Fragment>;
// };
