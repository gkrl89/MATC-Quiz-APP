import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles/about.css';

function ContactForm() {
  const msg = 'Your message has been sent. Support will contact you shortly ';

  const [ismsg, setisMsg] = useState(false);

  return (
    <>
      <div className="cform">
        {ismsg && <div style={{ color: 'blue', fontSize: '1.2rem' }}>{msg}</div>}
        <Form style={{ marginTop: '2rem' }}>
          <Form.Group className="my - 5" controlId="item">
            <Form.Label style={{ fontSize: '20px' }}> Name:</Form.Label>
            <Form.Control id="name" type="text" name="name" required></Form.Control>
          </Form.Group>
          <Form.Group className="my - 5" controlId="item">
            <Form.Label style={{ fontSize: '20px' }}> Phone :</Form.Label>
            <Form.Control id="accno" type="tel" name="phone" required></Form.Control>
          </Form.Group>
          <Form.Group className="my - 5" controlId="item">
            <Form.Label style={{ fontSize: '20px' }}> Email ID:</Form.Label>
            <Form.Control id="mail" type="text" name="mail" required></Form.Control>
          </Form.Group>
          <Form.Group className="my - 5" controlId="item">
            <Form.Label style={{ fontSize: '20px' }}> Message :</Form.Label>
            <Form.Control id="phone" type="message" name="msg" required></Form.Control>
          </Form.Group>
          <Button
            style={{ marginTop: '1.5rem', backgroundColor: 'rgb(39, 14, 75)' }}
            variant="primary"
            id="button"
            onClick={() => {
              setisMsg(true);
            }}
          >
            Send
          </Button>{' '}
          <Button
            type="reset"
            style={{ marginTop: '1.5rem', backgroundColor: 'rgb(39, 14, 75)' }}
            onClick={() => {
              setisMsg(false);
            }}
          >
            Reset
          </Button>{' '}
        </Form>
      </div>
    </>
  );
}
export default ContactForm;
