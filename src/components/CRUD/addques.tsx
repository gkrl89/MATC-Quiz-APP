import React, { ReactEventHandler, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import '../Styles/admin.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// import { AddQuestion } from './slices';

const initialValues = {
  qtext: '',
  ansa: '',
  ansb: '',
  ansc: '',
  correct: ''
};

const validationSchema = Yup.object({
  qtext: Yup.string().required('This field is Required'),
  ansa: Yup.string().required('This field is Required'),
  ansb: Yup.string().required('This field is Required'),
  correct: Yup.string().required('This field is Required')
});

function AddQues() {
  const [sub, setSub] = useState('');
  const errMsg = 'Password and Confirm Password must be same!!! ';
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log('Form data', values);
      if (
        formik.values.ansa === formik.values.correct ||
        formik.values.ansb === formik.values.correct ||
        formik.values.ansc === formik.values.correct
      ) {
        console.log('called');

        axios
          .post(`https://632aa5291090510116c4ad64.mockapi.io/${sub}`, values)
          .then((response: any) => {
            console.log(response, '2');
          })
          .catch((err: number | string) => {
            console.log(err);
          });

        resetForm();
      } else {
        alert('please enter the correct answer properly');
      }

      validationSchema;
    }
  });

  return (
    <>
      {' '}
      <div>
        <Container>
          <h1>Add question</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Select Subject:</Form.Label>
              <Form.Control
                as="select"
                value={sub}
                onChange={(e) => {
                  setSub(e.target.value);
                }}>
                <option value="apt-maths">Maths</option>
                <option value="apt-english">English</option>
                <option value="apt-reason">Reasoning</option>
                <option value="jstech">JavaScript</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Question :</Form.Label>
              <Form.Control
                type="text"
                name="qtext"
                value={formik.values.qtext}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option A</Form.Label>
              <Form.Control
                type="text"
                name="ansa"
                value={formik.values.ansa}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option B</Form.Label>
              <Form.Control
                type="text"
                name="ansb"
                value={formik.values.ansb}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Option C</Form.Label>
              <Form.Control
                type="text"
                name="ansc"
                value={formik.values.ansc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correct Option</Form.Label>
              <Form.Control
                type="text"
                name="correct"
                value={formik.values.correct}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Button style={{ marginTop: '1rem' }} type="submit" variant="primary">
              Add
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}
export default AddQues;
