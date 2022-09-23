import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SampleForm = () => {
  const [question, setQuestion] = useState({
    qtext: '',
    ansa: '',
    ansb: '',
    ansc: '',
    correct: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setQuestion(() => {
      return {
        ...question,
        [name]: value
      };
    });
  };

  const ClickAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    axios
      .post('https://632aa5291090510116c4ad64.mockapi.io/jstech', question)
      .then((response: any) => {
        console.log(response, '2');
      })
      .catch((err: number | string) => {
        console.log(err);
      });

    setQuestion({
      qtext: '',
      ansa: '',
      ansb: '',
      ansc: '',
      correct: ''
    });
  };

  return (
    <>
      <div className="body">
        <div className="header">
          <h1>Add question</h1>
        </div>{' '}
        <form>
          <div className="form">
            <label> Question : </label>
            <input type="text" name="qtext" onChange={handleChange} value={question.qtext} />

            <label> Option A:</label>
            <input type="text" name="ansa" onChange={handleChange} value={question.ansa} />

            <label> Option B :</label>
            <input type="text" name="ansb" onChange={handleChange} value={question.ansb} />

            <label> Option C :</label>
            <input type="text" name="ansc" onChange={handleChange} value={question.ansc} />

            <label> Correct Option :</label>
            <input type="text" name="correct" onChange={handleChange} value={question.correct} />

            <button
              type="submit"
              onClick={(e) => {
                ClickAdd(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SampleForm;
