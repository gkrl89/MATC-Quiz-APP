import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import { IQues } from '../../interface';
import Row from 'react-bootstrap/Row';

import '../Styles/quiz.css';
import EditQuestion from '../CRUD/editquestion';

import { useNavigate } from 'react-router-dom';

function Quizboard(props: any) {
  const isUpdate = props.isUpdate;
  const update = props.update;
  console.log('update value', update);

  const [data, setData] = useState<IQues[]>([]);
  const [formmodal, setFormmodal] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  const [sub, setSub] = useState<any>('');
  const [page, setPage] = useState('');
  const [num, setNum] = useState(0);
  const navigate = useNavigate();

  const handleClick = (id: string, page: string) => {
    getQuiz(id);
    setSub(id);
    setPage(page);
  };

  const ClickAdd = () => {
    navigate('/addques');
  };

  const getQuiz = (id: string) => {
    console.log('func called ');
    axios.get(`https://632aa5291090510116c4ad64.mockapi.io/${id}`).then((response: any) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    console.log('use effect called');
    axios.get(`https://632aa5291090510116c4ad64.mockapi.io/apt-maths`).then((response: any) => {
      console.log('called data back', response.data);
      setData(response.data);
    });
  }, [update]);

  const ClickDelete = (num: number) => {
    axios.delete(`https://632aa5291090510116c4ad64.mockapi.io/${sub}/${num}`).then((response) => {
      console.log('response', response.data);
    });

    setData(data.filter((data) => data.id !== num));
  };

  return (
    <>
      <div className="header">
        <h1>
          {' '}
          Quiz Board
          <Button
            variant="primary"
            onClick={() => {
              ClickAdd();
            }}>
            Add Question{' '}
          </Button>
        </h1>
      </div>

      <Row>
        <Button
          className="buttons"
          onClick={() => {
            handleClick('apt-maths', 'Maths');
          }}>
          Maths
        </Button>

        <Button
          className="buttons"
          onClick={() => {
            handleClick('apt-english', 'English');
          }}>
          English
        </Button>

        <Button
          className="buttons"
          onClick={() => {
            handleClick('apt-reason', 'Logical Reasoning');
          }}>
          Reasoning
        </Button>

        <Button
          className="buttons"
          onClick={() => {
            handleClick('jstech', 'Technical - JavaScript');
          }}>
          JS
        </Button>
      </Row>
      <div className="tablebody">
        <h1 style={{ color: 'blue', marginBottom: '2rem', textAlign: 'center' }}>{page}</h1>
        <table className="tables">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Option A</th>
              <th>Option B</th>
              <th>Option C</th>
              <th>Correct Option </th>
              <th>Edit Action</th>
              <th>Delete Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data: IQues, key) => {
              const number = data.id as number;
              return (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.qtext}</td>
                  <td>{data.ansa}</td>
                  <td>{data.ansb}</td>
                  <td>{data.ansc}</td>
                  <td>{data.correct}</td>
                  <td>
                    <Button
                      className="buttons"
                      onClick={() => (setNum(number), setisEdit(true), setFormmodal(true))}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="buttons"
                      onClick={() => {
                        ClickDelete(num);
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isEdit && (
          <EditQuestion sub={sub} num={num} formmodal={formmodal} setFormmodal={setFormmodal} />
        )}
        {/* {isUpdate && getQuiz(sub)}; */}
      </div>
    </>
  );
}
export default Quizboard;
