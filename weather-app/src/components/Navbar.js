import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Navbar.css'
import { useState } from 'react';


function WeatherNav({navToApp}) {
  const [location, setLocation] = useState('');

  const returnLocationToApp = async () => {
    console.log(location);
    await navToApp(location);
  }

  return (
    <Navbar bg="dark" expand="xxl" variant="dark">
      <Container className='container'>
        <Navbar.Brand href="#home" className='title'>WeatherApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Form className="d-flex">
            <input
              type="text"
              placeholder="City Name"
              className="me-2"
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
            <Button variant="outline-light" onClick={returnLocationToApp}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WeatherNav;