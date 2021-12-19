// import classes from "./RideDetails.module.css";
// import RidesForm from "../RidesForm/RidesForm";
import "./History.css"
import {Tabs , Tab , Button , Card , Row , Col} from 'react-bootstrap'
import PastRides from "./PastRides";
import MyRides from "./MyRides";


function History(props) {
  return (
    <Tabs defaultActiveKey="My Rides" className="mb-3 tabsAlignment">
        <Tab eventKey="My Rides" title="My Rides">
            <MyRides 
                rollNo={props.rollNo}
            />
        </Tab>
        <Tab eventKey="Posted Rides" title="Posted Rides">
            <PastRides 
                rollNo={props.rollNo}
            />
        </Tab>
        </Tabs>
  );
}

export default History;
