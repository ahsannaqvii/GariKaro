// import classes from "./RideDetails.module.css";
// import RidesForm from "../RidesForm/RidesForm";
import {Button , Card , Row , Col} from 'react-bootstrap'

function RideItem(props) {

  return (
    <Col sm={5} >
        <Card>
        <Card.Header as="h5" style={{background: "#5b0a0ced" , color: "white"}}>Mr.Muhammad Mustafa</Card.Header>
        <Card.Body>
          <Card.Title>Ride ID: {props.id}</Card.Title>
          <Card.Text>
            {props.pickUp}
          </Card.Text>
          <Card.Text>
          {props.dest}
          </Card.Text>
          <Card.Text>
            Fare: {props.Fare}
          </Card.Text>
          <Card.Text>
            Seats: {props.Seats}
          </Card.Text>
          <Card.Text>
            Time: {props.L_Time}
          </Card.Text>
          <Card.Text>
            Date: {props.Date}
          </Card.Text>
          <Card.Text>
            Vehicle Registration Number: {props.carRegNumb}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RideItem;
