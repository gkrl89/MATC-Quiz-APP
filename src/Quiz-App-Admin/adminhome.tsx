import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function AdminHome() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            navigate('/adminsignup');
          }}
        >
          Signup
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigate('/adminlogin');
          }}
        >
          Login
        </Button>
      </div>
    </>
  );
}
export default AdminHome;
