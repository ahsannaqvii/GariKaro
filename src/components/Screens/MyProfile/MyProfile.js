import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./MyProfile.css";
import {Card , ListGroup , ListGroupItem , Button , Col , Row} from "react-bootstrap";
import profilePic from "../../../assets/images/male.png"

function  MyProfile(props) {
    const [email , setEmail] = useState("");
    const [contactNum , setContactNumber] = useState("");
    const [fname , setFirstName] = useState("");
    const [lname , setLastName] = useState("");
    const [pass , setPassword] = useState("");
    const [rollNo , setRollNo] = useState("");

    axios
    .get("http://localhost:4000/profile", {
        params: {
            rollNo: props.rollNo,
        },
    })
    .then((response) => {
        setContactNumber(response.data[0].Contact_Number);
        setEmail(response.data[0].Email_ID);
        setFirstName(response.data[0].First_Name);
        setLastName(response.data[0].Last_Name);
        setPassword(response.data[0].Password);
        setRollNo(response.data[0].Roll_Number);
    })
    .catch((err) => {
        throw err;
    });
    
      

  return (
      <Row>
          <Col sm={6}>
            <Card className="cardStyling">
                <Card.Img variant="top" style={{height:"13rem" , borderRadius:"100%"}} src={profilePic} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {fname + " " + lname}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}}>Edit Name</Button>
                        </Col>
                        </Row>
                        </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {pass}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}}>Edit Password</Button>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {email}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}}>Edit Email</Button>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {rollNo}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}}>Edit Roll No</Button>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {contactNum}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}}>Edit Contact Number</Button>
                        </Col>
                        </Row>
                        </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
        <Col sm={6}>
            {/* <img src={randomimage} style={{marginTop:"1.5rem"}}/> */}
        </Col>
        </Row>
    

  );
}
export default MyProfile;
