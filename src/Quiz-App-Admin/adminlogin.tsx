import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../components/Styles/admin.css';
import customAxios from '../components/axios';

const initialValues = {
  uname: '',

  pwd: ''
};

const validationSchema = Yup.object({
  uname: Yup.string().required('This field is Required'),

  pwd: Yup.string().required('This field is Required')
});

function AdminLogin() {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log('Form data', values);
      customAxios
        .post('/auth/login', { userid: formik.values.uname })
        .then((resp) => {
          console.log('resp data', resp);
          if (resp?.data?.status === 'Successful Login') {
            localStorage.setItem('access_token', resp.data.token);
            localStorage.setItem('refresh_token', resp.data.refreshToken);
          } else {
            alert('Login failed');
          }
        })
        .catch((err) => console.error(err.message));

      resetForm();
    },

    validationSchema
  });

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <div className="form">
            <Container>
              <h1 style={{ marginBottom: '2rem' }}>User Login form</h1>
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
                <Button
                  variant="success"
                  type="submit"
                  style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                  Login
                </Button>
                <h5>Not a Registered User ?</h5>
                <Link to="/adminsignup"> Click here to Sign Up!!!</Link>
              </Form>
            </Container>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default AdminLogin;
