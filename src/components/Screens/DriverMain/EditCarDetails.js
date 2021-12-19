import React , {useState } from "react";
import useInput from "../../hooks/use-input";
import { Form, Row, Col, Button } from "react-bootstrap";
import { CirclePicker } from "react-color";
const EditCarDetails = (props) => {
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carMake, setcarMake] = useState("");
  const [carColor, setCarColor] = useState({ background: "#fff" });
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
  return (
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
          >
            Post Ride
          </Button>
        </Form>
      </Col>
      <Col sm={2}></Col>
    </Row>
  );
};

export default EditCarDetails;