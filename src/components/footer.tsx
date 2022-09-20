import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Styles/footer.css';
function Footer (){


    return(
        <>
        <div className="footerbody">
            <Row>
                <Col style={{marginLeft:"1rem"}}> Hire the best
               </Col>
                <Col><h5>Address</h5><p>No:5 , Avenue Road , LandMark Street </p><p>City Post , US </p></Col>
                <Col> <h5>Mail US</h5> <p>admin@khirer.co.in</p></Col>
                <Col> <h5>K-Hirer</h5> <p>We Hire For You!!!</p></Col>
                <Col><h5>FAQ</h5><p> Click the Link below </p></Col>
            </Row>
            
            </div>
        </>
    )
}
export default Footer;