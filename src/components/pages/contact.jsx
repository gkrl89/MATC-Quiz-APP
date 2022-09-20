import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../contactForm";

function Contact() {
  return (
    <>
      <div>
        <h1
          style={{
            color: "rgb(39, 14, 75)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Talk to our experts{" "}
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.2rem" , marginBottom:"2rem"}}>
          Looking for a quote? Want to see a demo? Need more information? Just
          unsure? Get in touch with one of our experts to answer all your
          questions.{" "}
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col style={{ borderRight: "solid" }}>
          <h2
            style={{
              color: "rgb(39, 14, 75)",
              marginTop: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Get a Custom Price Quote
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            Choose a pricing plan that fits the needs of your business. All our
            plans feature unlimited testing with a flat-fee subscription.
          </p>
        </Col>
        <Col style={{ borderRight: "solid" }}>
          <h2
            style={{
              color: "rgb(39, 14, 75)",
              marginTop: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            View a Product Demonstration
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
          See our products in action and learn how you can use our assessments to make better hiring decisions. 
          </p>
        </Col>
        <Col style={{ borderRight: "solid" }}>
          <h2
            style={{
              color: "rgb(39, 14, 75)",
              marginTop: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Learn the Science Behind the Tests
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
          Speak with an I/O psychologist to understand how our assessments leverage science to deliver consistent results.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
      <h1
            style={{
              color: "rgb(39, 14, 75)",
              marginTop: "3rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}>
      Get in Touch with Us
      </h1>
      </Row>
      <Row>
        <Col></Col>
        <ContactForm />
        <Col></Col>
      </Row>
    </>
  );
}
export default Contact;
