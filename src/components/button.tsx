import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Buttons() {
  return (
    <Link to="/adminlogin">
      <Button style={{ backgroundColor: 'rgb(39, 14, 75)' }}>Admin</Button>
    </Link>
  );
}
export default Buttons;
