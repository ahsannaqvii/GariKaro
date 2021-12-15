import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import {Form , Row, Col , Button} from "react-bootstrap";
import {CirclePicker} from 'react-color';

import axios from "axios";

function Step2 (){ 
    const [state , setState] = useState({background: '#fff'});

    const handleChangeComplete = (color) =>{
        setState({background: color.hex});
    }

    const vehicle = () => {
        const a = {
            
          };
          axios
            .post("http://localhost:4000/driver2", a)
            .then((res) => {});
    }
    
    return (
        
        <Row>
            <Col sm={2}>
            </Col>
            <Col sm={8}>
                <Form className = "formLayout"> 
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                        <Form.Label column sm={6}>
                        Car Name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="textarea" placeholder="Car Name" /> 
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                        <Form.Label column sm={6}>
                        Car Model
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="textarea" placeholder="Car Model" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPickup">
                        <Form.Label column sm={6}>
                        Car Registration Year
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="textarea" placeholder="YYYY" />        
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-5" controlId="formHorizontalPickup">
                        <Form.Label column sm={6}>
                        Car Color
                        </Form.Label>
                        <Col sm={6}>
                            <CirclePicker color={state.background} onChangeComplete={handleChangeComplete}/>                       
                        </Col>
                    </Form.Group>
                    <Button style={{background:"#5B0A0C"}} className="mb-3 step2-submit-btn" type="submit" onClick={vehicle}>Post Ride</Button>
                </Form>
            </Col>
                <Col sm={2} >
                </Col>
            
        </Row>

    );
} 

export default Step2;