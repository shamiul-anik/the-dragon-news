import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import UserIcon from '../../../assets/user.png';

const Header = () => {
  return (
    <Container>
      <div className='text-center mt-5 mb-3'>
        <img src={Logo} alt="Logo" />
        <p className='text-secondary mt-3 fs-6'>Journalism Without Fear or Favour</p>
        <p className='text-secondary fw-bold fs-5'>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className='d-flex my-3 bg-secondary bg-opacity-10 p-3'>
        <Button variant='danger'>Latest</Button>
        <Marquee className='fs-5 fw-bold' pauseOnHover={true} speed={80}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
      
      {/* Navbar */}
      <Navbar className='bg-white fs-5 mb-5' bg="light" expand="lg">
        <Container className='px-0' fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 fw-semibold" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Career</Nav.Link>
            </Nav>
            <Form className="d-flex gap-3">
              <img src={UserIcon} alt="User Icon" />
              <Button className='px-5' variant="secondary">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;