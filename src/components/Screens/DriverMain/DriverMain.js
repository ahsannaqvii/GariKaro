import "./DriverMain.css";
import React, { useState } from "react";
import {Form , Row, Col , Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInput from "../../hooks/use-input";
import axios from "axios";
import carsvg from '../../../assets/images/car.svg';
import bikesvg from '../../../assets/images/bike.jpeg';
import map from '../../../assets/images/map.png';
import Input from './PlacesAutocomplete';
import Maps from './RouteMap2';

function DriverMain (){
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
                        <Input/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDropoff">
                    <Form.Label column sm={6}>
                    Drop-Off / Stop
                    </Form.Label>
                    <Col sm={6}>
                        {/* <Form.Control type="textarea" placeholder="search for a location" /> */}
                        <Input />
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
            {/* <img src={map} className="map" height="90%"></img> */}
            <Maps />
            </Col>
            
        </Row>

    );
} 

export default DriverMain;