import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/navbar.css';

function Home() {
  return (
    <>
      <Row className="row1">
        <Col>
          <h3 style={{ color: 'blue' }}>How to Prepare</h3>

          <h1 style={{ color: 'rgb(39, 14, 75)' }}>
            How Job Candidates Can Prepare For Employment Tests
          </h1>
          <p className="para">
            Have you applied for a job and been asked to take a pre-employment test? It may seem
            intimidating, but there’s no reason to stress! No matter what type of assessment you've
            been asked to take, there are a couple of steps you can take to prepare yourself. So how
            should you get ready for a K-Hirer assessment?
          </p>
          <p className="para">
            Familiarize yourself with the different types of assessments you may be asked to take so
            you feel more at ease. Read About Us.
          </p>
        </Col>
        <Col className="image"></Col>
      </Row>
      <Row>
        <Col>
          {' '}
          <h1
            style={{
              color: 'rgb(39, 14, 75)',
              marginBottom: '3rem',
              textAlign: 'center',
              backgroundColor: 'rgb(242, 241, 241)'
            }}
          >
            Take it from the experts
          </h1>
        </Col>
      </Row>

      <Row>
        <Col className="notes">
          <p className="notespara">
            {' '}
            Hiring on skills should be the norm and it's we're doing with K-Hirer! We signed up 3
            weeks ago and already used them to assess 50+ candidates, the first feedback are great
            and we're confident that they'll help us improve a lot our hiring process.
          </p>

          <h3 className="author">Arthur.N</h3>
        </Col>

        <Col className="notes">
          <p className="notespara">
            {' '}
            Beyond being useful to existing firms, K-Hirer is a resource-saving tool, suitable
            especially for startups with limited capacities to engage in robust, all-out hirings to
            fill all departments.
          </p>

          <h3 className="author">Albert Erne</h3>
        </Col>
        <Col className="notes">
          <p className="notespara">
            {' '}
            This solution is easy to use, the interface is super well designed. This allowed us as a
            company to find candidates that are way much more excited to join us.
          </p>

          <h3 className="author">Nicolas.L</h3>
        </Col>
      </Row>
    </>
  );
}

export default Home;
