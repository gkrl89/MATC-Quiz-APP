import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../components/Styles/admin.css';
import { useNavigate } from 'react-router-dom';
import customAxios from '../components/axios';
import axios from 'axios';

const initialValues = {
  uname: '',
  email: '',
  pwd: '',
  cpwd: ''
};

const validationSchema = Yup.object({
  uname: Yup.string().required('This field is Required'),
  email: Yup.string().required('This field is Required'),
  pwd: Yup.string().required('This field is Required'),
  cpwd: Yup.string().required('This field is Required')
});

function AdminSignup() {
  const errMsg = 'Password and Confirm Password must be same!!! ';
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log('Form data', values);
      if (formik.values.pwd === formik.values.cpwd) {
        const uname = formik.values.uname;
        const pwd = formik.values.pwd;

        axios
          .post('https://62fb40bbabd610251c040f32.mockapi.io/userlist', values)
          .then((response: any) => {
            console.log(response, '2');
          })
          .catch((err: number | string) => {
            console.log(err);
          });

        customAxios
          .post('/auth/signup')
          .then((res: any) => {
            if (res.status === 201) {
              console.log('res', res);
              alert('User registered successfully!!');
              navigate('/adminlogin');
            } else {
              alert('Failed to register user');
            }
          })
          .catch((err: any) => console.error('error'));

        resetForm();
      }

      validationSchema;
    }
  });

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <div className="form">
            <Container>
              <h1 style={{ marginBottom: '2rem' }}>User Sign Up form</h1>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Label>Enter User Name :</Form.Label>
                <Form.Control
                  type="text"
                  name="uname"
                  value={formik.values.uname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}></Form.Control>
                {formik.touched.uname && formik.errors.uname ? (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.uname}
                  </div>
                ) : null}
                <Form.Label>Enter Email ID:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}></Form.Control>
                {formik.touched.email && formik.errors.email ? (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.email}
                  </div>
                ) : null}
                <Form.Label>Enter Password :</Form.Label>
                <Form.Control
                  type="password"
                  name="pwd"
                  value={formik.values.pwd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}></Form.Control>
                {formik.touched.pwd && formik.errors.pwd ? (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.pwd}
                  </div>
                ) : null}
                <Form.Label>Confirm Password :</Form.Label>
                <Form.Control
                  type="password"
                  name="cpwd"
                  value={formik.values.cpwd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}></Form.Control>
                {formik.touched.cpwd && formik.errors.cpwd ? (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.cpwd}
                  </div>
                ) : null}

                <Button variant="success" type="submit" style={{ marginTop: '2rem' }}>
                  Submit
                </Button>
              </Form>
            </Container>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default AdminSignup;
