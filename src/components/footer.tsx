import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles/footer.css';
function Footer() {
  return (
    <>
      <div className="footerbody">
        <h1 style={{ textAlign: 'center', color: 'grey' }}>K-Hirer</h1>
        <h4 style={{ textAlign: 'center', color: 'grey' }}>We Hire for you!!!! </h4>
        <Row>
          <h5 style={{ color: 'grey' }}>Our Clients</h5>
          <Col className="rowimg"></Col>
          <Col>
            <h5 style={{ color: 'grey' }}>Address</h5>
            <p>No:5 , Avenue Road , LandMark Street </p>
            <p>City Post , India </p>
          </Col>
          <Col>
            {' '}
            <h5 style={{ color: 'grey' }}>Mail Us</h5> <p>admin@khirer.co.in</p>
          </Col>
          <Col>
            <h5 style={{ color: 'grey' }}>Support</h5>
            <p> FAQ</p>
            <p>Phone: +91-9876543210</p>{' '}
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Footer;
