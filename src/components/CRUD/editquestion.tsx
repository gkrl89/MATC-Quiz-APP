import React, { useState, useEffect } from 'react';
import { IQues } from '../../interface';
import axios from 'axios';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Quizboard from '../pages/dashboard';

export default function EditQuestion(props: any) {
  const [data, setData] = useState<IQues>({
    qtext: '',
    ansa: '',
    ansb: '',
    ansc: '',
    correct: ''
  });
  const [isUpdate, setisUpdate] = useState(false);
  const [update, setUpdate] = useState(0);
  const sub = props.sub;
  const num = props.num;
  const formmodal = props.formmodal;
  const setFormmodal = props.setFormmodal;

  useEffect(() => {
    axios.get(`https://632aa5291090510116c4ad64.mockapi.io/${sub}/${num}`).then((response: any) => {
      setData(response.data);
    });
  }, [num]);

  const handleClose = () => setFormmodal(false);

  const ClickUpdate = (number: any) => {
    setisUpdate(true);
    setFormmodal(false);

    axios
      .put(`https://632aa5291090510116c4ad64.mockapi.io/${sub}/` + number, {
        qtext: data.qtext,
        ansa: data.ansa,
        ansb: data.ansb,
        ansc: data.ansc,
        correct: data.correct
      })
      .then((response) => {
        setUpdate(Math.random());
        console.log(response, 'response update');
        setData({
          qtext: data.qtext,
          ansa: data.ansa,
          ansb: data.ansb,
          ansc: data.ansc,
          correct: data.correct
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value
      };
    });
  };

  return (
    <>
      <Modal show={formmodal} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Update Question</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter Question :</Form.Label>
              <Form.Control type="text" name="qtext" value={data.qtext} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option A</Form.Label>
              <Form.Control type="text" name="ansa" value={data.ansa} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option B</Form.Label>
              <Form.Control type="text" name="ansb" value={data.ansb} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option C</Form.Label>
              <Form.Control type="text" name="ansc" value={data.ansc} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correct Option</Form.Label>
              <Form.Control
                type="text"
                name="correct"
                value={data.correct}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              ClickUpdate(data.id);
            }}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {isUpdate && <Quizboard isUpdate={isUpdate} update={update} setisUpdate={setisUpdate} />}
    </>
  );
}
