import "./DriverMain.css";
import React, { useState, useEffect } from "react";
import {Form , Row, Col , Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useInput from "../../hooks/use-input";
// import axios from "axios";
import carsvg from '../../../assets/images/car.svg';
import bikesvg from '../../../assets/images/bike.jpeg';
import PlacesAutoComplete from './PlacesAutocomplete';
// import GoogleMaps from './RouteMap7';
// import GoogleMapReact from 'google-map-react';
import GMaps from './GMaps'

const DUMMY_LOCATIONS = [
     {address:"", lat: 24.918027, lng:67.0632675} , 
  ];
function DriverMain (){ 
    // const [pickUp ,setPickUp]= useState({address:"", lat: 24.918027, lng:67.0632675});
    // const [dest, setDest] = useState({address:"", lat: 24.8568991, lng: 67.0632675});
    const [Locations, setLocations] = useState(DUMMY_LOCATIONS)
   
    const LocationHandler = (newLocation) => {
        //construcing new array and also a dynamic list
        setLocations((prevLocations) => {
          return [newLocation, ...prevLocations];
        });
        console.log("AHSANyar");
        console.log(DUMMY_LOCATIONS);
      };
    return (
        <Row>
       
            <Col>
            <Form className = "formLayout">
                <Row>  
                    <Col>
                        <label> Driver </label>
                    </Col>
                    <Col>
                        <Form.Select className="mb-3 dropdownForm">
                            <Col>
                                <Form.Control type="dropdown" placeholder="Driver" />
                            </Col>
                                <option>Select driver</option>
                                <option>Ahsan Naqvi</option>
                                <option>Mustafa Bawany</option>
                        </Form.Select>
                    </Col>
                </Row>
                
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                    <Form.Label column sm={6}>
                    Pickup
                    </Form.Label>
                    <Col sm={6}>
                        {/* <Form.Control type="textarea" placeholder="search for a location" /> */}
                        <PlacesAutoComplete name= "setPick" onAddLocation={LocationHandler} />
                        {/* parentCallback={setPickUp} */}
                       
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDropoff">
                    <Form.Label column sm={6}>
                    Drop-Off / Stop
                    </Form.Label>
                    <Col sm={6}>
                        {/* <Form.Control type="textarea" placeholder="search for a location" /> */}
                        <PlacesAutoComplete name= "setDest" onAddLocation={LocationHandler}/>
                        {/* parentCallback={setDest} */}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDropoff">
                    <Form.Label column sm={6}>
                    Car Type
                    </Form.Label>
                    <Col sm={6}>
                        <Button style={{background:"#F2F5F8"}} type="submit" variant="light" className="cartype-btn">
                            <img src={carsvg}></img>
                        </Button>
                        <Button style={{background:"#F2F5F8"}} type="submit" variant="light" className="cartype-btn">
                            <img src={bikesvg}></img>
                        </Button>
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <label>Leaving Time</label>
                    </Col>
                    <Col>
                        <Form.Check 
                            type="radio"
                            id={`NOW`}
                            label={`NOW`}
                            className = "mb-3"
                        />  
                    </Col>
                </Row>

                <Row>  
                    <Col>
                        <label> Payment </label>
                    </Col>
                    <Col>
                        <Form.Select className="mb-5 dropdownForm">
                            <Col>
                                <Form.Control type="dropdown" placeholder="Payment" />
                            </Col>
                                <option>Select payment option</option>
                                <option>Cash</option>
                                <option>Credit Card</option>
                        </Form.Select>
                    </Col>
                </Row>
                
                <Button style={{background:"#5B0A0C"}} className="submit-btn" type="submit">Post Ride</Button>
                
                <div className="BelowForm mb-3">
                    
                    <a>View Scheduled Rides</a>
                    <br/>
                    <a>View Past Rides</a>
                </div>
                </Form>
            </Col>

            <Col>
              <div style={{ height: "650px", width: "90%" , marginTop: "1.5rem"}}  id="renderr">   
               <GMaps places={Location}/>
         
            </div>
            
            </Col>
            
        </Row>

    );
} 

export default DriverMain;