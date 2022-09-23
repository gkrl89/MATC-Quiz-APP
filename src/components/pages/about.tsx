import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/about.css';

function About() {
  return (
    <>
      <Row>
        <Col>
          <h2
            style={{
              color: 'rgb(39, 14, 75)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            {' '}
            Take a deep breath{' '}
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            Assessments are designed so that employers can learn about you in an objective way. Keep
            in mind that your assessment results are just one of many factors companies use to
            evaluate applicants. Before you start your assessments, give yourself the time and space
            to relax so that you can show your best self in the assessment.
          </p>
          <h2
            style={{
              color: 'rgb(39, 14, 75)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            {' '}
            Set the stage{' '}
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            Many employers ask applicants to take a test before the interview stage. If you are
            taking a test remotely, not at an employer’s place of business, figure out how long it
            will take you to complete the tests and then limit all distractions during that time.
            Criteria’s tests can be taken on any device, including laptop, desktop, tablet, or
            mobile devices. Use a device that you feel most comfortable with, and take time to turn
            off or mute any notifications that may pop up during the assessment. If you are in a
            shared space, let others around you know that you are planning to take an assessment for
            a certain amount of time.
          </p>
          <h2
            style={{
              color: 'rgb(39, 14, 75)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            {' '}
            Read the instructions{' '}
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            The most common mistake test-takers make is rushing through instructions. You can take
            as much time as you want to read and understand them! The instructions will often give
            you hints about optimal test strategy: for example, if there is no penalty for wrong
            answers, don’t be afraid to guess and move on if you’re stuck on a tough question..
          </p>
        </Col>
        <Col className="aboutimg"></Col>
      </Row>
      <Row>
        <Col>
          <h1
            style={{
              color: 'rgb(39, 14, 75)',
              marginBottom: '3rem',
              textAlign: 'center',
              backgroundColor: 'rgb(242, 241, 241)'
            }}
          >
            {' '}
            Get Familiar with the Tests{' '}
          </h1>
          <h4>Personality Tests</h4>
          <p style={{ fontSize: '1.2rem' }}>
            Personality tests are designed to measure traits that are associated with successful
            performance of a certain role. They evaluate behavioral traits that don't tend to change
            much over time. There are no right or wrong answers on these tests, but in specific jobs
            certain traits are known to predict how well your personality matches the requirements
            of the job. These tests help determine if you'd be happy and comfortable in a position
            long-term. So don't fake it! You can't change your personality and you shouldn't have to
            for a job. You could wind up in a role that isn't a good match for you and end up where
            you are now: looking for a new job.
          </p>
          <h4>Aptitude Tests</h4>
          <p style={{ fontSize: '1.2rem' }}>
            Cognitive aptitude tests measure your critical thinking, problem-solving, attention to
            detail, and ability to learn and use new information. Criteria's most popular aptitude
            test is the CCAT, which gives employers an idea of how fast you learn and how well
            you'll perform in your new position. Want to know more about the Criteria Cognitive
            Aptitude Test?
          </p>
          <h4>Skills Tests</h4>
          <p style={{ fontSize: '1.2rem' }}>
            Skills tests let employers figure out what you already know. Some tests check your basic
            math and verbal skills, while others confirm your computer literacy. There are tests
            that demonstrate your familiarity with computers, how fast you type, or how well you
            know a particular Microsoft Office program. These are simple tests designed to prove
            that you’ve got the necessary skills to succeed in the role.
          </p>
        </Col>
      </Row>
    </>
  );
}
export default About;
