import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IQues } from '../../interface';
import '../Styles/navbar.css';
import '../Styles/quiz.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AptReason() {
  const [questions, setQuestions] = useState<IQues[]>([]);
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(0);
  const [body, setBody] = useState(false);

  const msg = 'You have completed the test. And your Score is ';
  const [showmsg, setShowmsg] = useState(false);
  const [btn, setBtn] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage] = useState(1);

  const indexofLastPost = currentPage * postsperPage;
  const indexofFirstPost = indexofLastPost - postsperPage;
  const currentPosts = questions.slice(indexofFirstPost, indexofLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClick = (ans: string, correct: string) => {
    if (currentPage < questions.length) setCurrentPage(currentPage + 1);
    else setSubmit(true);

    if (ans === correct) {
      setScore(score + 1);
    }
  };

  const ClickBtn = () => {
    setBtn(false);
    setBody(true);
  };

  const handleSubmit = () => {
    setShowmsg(true);
    setBody(false);
  };

  useEffect(() => {
    axios.get('https://632aa5291090510116c4ad64.mockapi.io/apt-reason').then((response: any) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Logical Reasoning</h1>
      <h3 style={{ color: ' rgb(39, 14, 75)', marginTop: '1rem' }}>About</h3>
      <p className="para">
        {' '}
        This is a simulation of a real pre-employment assessment test. This test consists of 10
        logical reasoning questions .
      </p>
      <h3 style={{ color: ' rgb(39, 14, 75)' }}>What is a logical reasoning test?</h3>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
        A logical reasoning test is used measure a candidate’s problem solving ability. They assess
        the ability to come to conclusions based on logic. You are presented with a series of shapes
        and are required to find patterns and rules to help you find the correct answer.
      </p>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
        These tests may be encountered for any position at any level of recruitment, but they may be
        particularly common when recruiting for positions which require significant problem solving
        ability or higher use of logic{' '}
      </p>

      {btn && (
        <div>
          <h4
            style={{
              color: 'green',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            {' '}
            When you are ready, click "Begin" to start the test.{' '}
          </h4>
          <h4 className="bton" onClick={ClickBtn}>
            Begin
          </h4>
        </div>
      )}
      {showmsg && (
        <div>
          <h3
            style={{
              textAlign: 'center',
              color: 'blue',
              marginTop: '5rem',
              marginBottom: '5rem'
            }}
          >
            {' '}
            {msg} {score} !!!!{' '}
          </h3>
          <h4
            style={{
              textAlign: 'center',
              color: 'black',
              marginTop: '5rem',
              marginBottom: '20rem'
            }}
          >
            Please complete other sections.
          </h4>
        </div>
      )}
      {body && (
        <Row className="quesbody">
          <Col>
            <ul>
              {currentPosts.map((ques: any) => (
                <li key={ques.id} className="list-group-item">
                  <h2 className="ques">
                    Question : {ques.id} / {questions.length}
                  </h2>
                  <h2 className="ques">{ques.qtext}</h2>
                  <h3
                    className="opt"
                    onClick={() => {
                      handleClick(ques.ansa, ques.correct);
                    }}
                  >
                    {ques.ansa}
                  </h3>
                  <h4
                    className="opt"
                    onClick={() => {
                      handleClick(ques.ansb, ques.correct);
                    }}
                  >
                    {ques.ansb}
                  </h4>
                  <h4
                    className="opt"
                    onClick={() => {
                      handleClick(ques.ansc, ques.correct);
                    }}
                  >
                    {ques.ansc}
                  </h4>
                </li>
              ))}
            </ul>
          </Col>
          <Col style={{ display: 'grid', placeItems: 'right' }}>
            {submit && (
              <h4 className="bton" onClick={handleSubmit}>
                Submit
              </h4>
            )}
          </Col>
        </Row>
      )}
    </>
  );
}
export default AptReason;
