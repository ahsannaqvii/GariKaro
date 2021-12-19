import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./MyProfile.css";
import {Card , ListGroup , ListGroupItem , Button , Col , Row , Modal , Form} from "react-bootstrap";
import profilePic from "../../../assets/images/male.png"
import { useHistory} from "react-router";
import { render } from "@testing-library/react";

function  MyProfile(props) {
    let history = useHistory();
    const [emailShow , setemailShow] = useState(false);
    const [rollNOShow , setrollnoShow] = useState(false);
    const [passwordShow , setpasswordShow] = useState(false);
    const [contactShow , setcontactShow] = useState(false);
    const [nameShow , setnameShow] = useState(false);

    const [email , setEmail] = useState("");
    const [contactNum , setContactNumber] = useState("");
    const [fname , setFirstName] = useState("");
    const [lname , setLastName] = useState("");
    const [pass , setPassword] = useState("");
    const [rollNo , setRollNo] = useState("");
    
    useEffect (() => {
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
        
    }, []);
   
    const emailShowhandler = () => setemailShow(true);
    const emailClosehandler = () => setemailShow(false);

    const rollnoShowhandler = () => setrollnoShow(true);
    const rollnoClosehandler = () => setrollnoShow(false);

    const passwordShowhandler = () => setpasswordShow(true);
    const passwordClosehandler = () => setpasswordShow(false);

    const contactShowhandler = () => setcontactShow(true);
    const contactClosehandler = () => setcontactShow(false);

    const nameShowhandler = () => setnameShow(true);
    const nameClosehandler = () => setnameShow(false);

    const fnamechangeHandler = (e) =>{
        setFirstName(e.target.value);
    }
    const lnamechangeHandler = (e) =>{
        setLastName(e.target.value);
    }

    const passwordchangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const emailchangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const rollNochangeHandler = (e) => {
        setRollNo(e.target.value)
    }
    const contactNumchangeHandler = (e) => {
        setContactNumber(e.target.value)
    }

    const submitHandler = async () => {
        const userInfo = {
            rollNo: rollNo,
            fname: fname,
            lname : lname,
            password: pass,
            contactNumber : contactNum,
            emailID : email
        }
        const result = await axios.post(
            "http://localhost:4000/profile/" , userInfo
            );
            console.log(result);
            emailClosehandler();
            rollnoClosehandler();
            passwordClosehandler();
            contactClosehandler(); 
            nameClosehandler(); 
    }    
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
                        <Button style={{width:"100%" , background: "#5B0A0C"}} onClick={nameShowhandler}>Edit Name</Button>
                        <Modal show={nameShow} onHide={nameClosehandler}>
                            <Modal.Header closeButton>
                            <Modal.Title>Change Name</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                    <label>Enter New First Name</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        onChange={fnamechangeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <label>Enter New Last Name</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        onChange={lnamechangeHandler}
                                    />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={nameClosehandler}>
                                Close
                            </Button>
                            <Button style={{background: "#5B0A0C"}} onClick={submitHandler}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                        </Row>
                        </ListGroupItem>
                    
                    <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {pass}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}} onClick={passwordShowhandler}>Edit Password</Button>
                        <Modal show={passwordShow} onHide={passwordClosehandler}>
                            <Modal.Header closeButton>
                            <Modal.Title>Change Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                    <label>Enter New Password</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="password"
                                        required
                                        placeholder="Enter New Password"
                                        onChange={passwordchangeHandler}
                                    />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={passwordClosehandler}>
                                Close
                            </Button>
                            <Button style={{background: "#5B0A0C"}} onClick={submitHandler}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {email}
                        </Col> 
                        <Col sm={6}>

                        <Button style={{width:"100%" , background: "#5B0A0C"}} onClick={emailShowhandler}>Edit Email</Button>
        
                        <Modal show={emailShow} onHide={emailClosehandler}>
                            <Modal.Header closeButton>
                            <Modal.Title>Change Email</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                    <label>Enter New Email</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="email"
                                        required
                                        placeholder="abc@gmail.com"
                                        onChange={emailchangeHandler}
                                    />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={emailClosehandler}>
                                Close
                            </Button>
                            <Button style={{background: "#5B0A0C"}} onClick={submitHandler}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {rollNo}
                        </Col> 
                        <Col sm={6}>   
                        <Button style={{width:"100%" , background: "#5B0A0C"}} onClick={rollnoShowhandler} disabled>Edit Roll No</Button>
                        <Modal show={rollNOShow} onHide={rollnoClosehandler}>
                            <Modal.Header closeButton>
                            <Modal.Title>Change Roll Number</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                    <label>Enter New Roll Number</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        required
                                        placeholder="KXXXXXX"
                                        onChange={rollNochangeHandler}
                                    />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={rollnoClosehandler}>
                                Close
                            </Button>
                            <Button style={{background: "#5B0A0C"}} onClick={submitHandler}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                        </Row>
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <Row>
                        <Col sm={6}>
                        {contactNum}
                        </Col> 
                        <Col sm={6}>   
                        
                        
                        <Button style={{width:"100%" , background: "#5B0A0C"}} onClick={contactShowhandler}>Edit Contact Number</Button>
                        <Modal show={contactShow} onHide={contactClosehandler}>
                            <Modal.Header closeButton>
                            <Modal.Title>Change Contact Number</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                    <label>Enter New Contact Number</label>
                                    </Col>
                                    <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        required
                                        placeholder="Enter Contact Number"
                                        onChange={contactNumchangeHandler}
                                    />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={contactClosehandler}>
                                Close
                            </Button>
                            <Button style={{background: "#5B0A0C"}} onClick={submitHandler}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </Col>
                        </Row>
                        </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
        </Row>

  );
}
export default MyProfile;
