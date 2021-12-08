import "./UserForum.css";
import React, { useState } from "react";
import {Row , Col , Tab , Tabs, Form , Card} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "../../hooks/use-input";
import axios from "axios";

function UserForum (){
    return (
            <div className="maincontainer" >
                <Tabs defaultActiveKey="allrides" id="uncontrolled-tab-example" className="mb-3"> 
                    <Tab eventKey="allrides" title="ALL RIDES" >
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                                <Col sm={12}>
                                    <Form.Control type="textarea" placeholder="search locations"/>
                                </Col>
                            </Form.Group>
                        </Form>
                        <div className="postedRide">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ahsan Naqvi</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Posted By: Ahsan Naqvi</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    Ride ID 19778949494
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    26 Sep, 2021 12:02 PM
                                    </Card.Subtitle>
                                </Card.Body>
                                </Card>
                        </div>
                        <hr/>
                        <div className="postedRide">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Mustafa Bawany</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Posted By: Mustafa Bawany</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    Ride ID 19778949494
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    26 Sep, 2021 2:06 PM
                                    </Card.Subtitle>
                                </Card.Body>
                                </Card>
                        </div>
                    </Tab>


                    <Tab eventKey="myrides" title="MY RIDES">
                    <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                                <Col sm={12}>
                                    <Form.Control type="textarea" placeholder="search for a location" />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div className="postedRide">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ahsan Naqvi</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Posted By: Amjad Talpur</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    Booking ID 19778949494
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    26 Sep, 2021 12:02 PM
                                    </Card.Subtitle>
                                </Card.Body>
                                </Card>
                        </div>
                        <hr/>
                        <div className="postedRide">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ahsan Naqvi</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Posted By: Mustafa Bawany</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    Booking ID 19778949494
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    26 Sep, 2021 2:06 PM
                                    </Card.Subtitle>
                                </Card.Body>
                                </Card>
                        </div>
                        
                    </Tab>
                </Tabs>

                
            </div>
                

    );
} 

export default UserForum;