import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Styles/about.css'

function ContactForm(){

    return(
        <>    
        <div className = "cform">
        <Form style={{marginTop:"2rem"}}>
        <Form.Group className="my - 5" controlId="item">
          <Form.Label style={{ fontSize: "20px" }}>
            {" "}
            Name:
          </Form.Label>
          <Form.Control
          id='name'
            type="text"
            name="name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my - 5" controlId="item">
          <Form.Label style={{ fontSize: "20px" }}>
            {" "}
            Phone :
          </Form.Label>
          <Form.Control
          id = 'accno'
            type="tel"
            name="phone"
            
          ></Form.Control>

        </Form.Group>
        
        <Form.Group className="my - 5" controlId="item">
          <Form.Label style={{ fontSize: "20px" }}> Email ID:</Form.Label>
          <Form.Control
          id='mail'
            type="text"
            name="mail"
            
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my - 5" controlId="item">
          <Form.Label style={{ fontSize: "20px" }}>
            {" "}
            Message :
          </Form.Label>
          <Form.Control
          id='phone'
            type="message"
            name="msg"
         
          ></Form.Control>
          </Form.Group>
      
        <Button style={{marginTop:"1.5rem" , backgroundColor:"rgb(39, 14, 75)"}}
          variant="primary"
          type="submit"
          id='button' 
          
        >
          Send
        </Button>{" "}
        <Button style={{marginTop:"1.5rem" , backgroundColor:"rgb(39, 14, 75)"}}>
          Cancel
        </Button>{" "}
      </Form>
      </div>
      </>

    )
}
export default ContactForm;