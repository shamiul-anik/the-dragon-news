import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/img/logo.png';
import moment from 'moment';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import UserIcon from '../../../assets/img/user.png';

const Header = () => {

  // const [news, setNews] = useState([]);
  // const { others_info } = news;

  // useEffect(() => {
  //   fetch("http://localhost:5000/news")
  //     .then(res => res.json())
  //     .then(data => setNews(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <Container>
      <div className='text-center mt-5 mb-3'>
        <img src={Logo} alt="Logo" />
        <p className='text-secondary mt-3 fs-6'>Journalism Without Fear or Favour</p>
        <p className='text-secondary fw-bold fs-5'>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className='d-flex gap-3 my-3 bg-secondary bg-opacity-10 p-3'>
        <Button variant='danger'>Latest</Button>
        <Marquee className='fs-5 fw-bold' pauseOnHover={true} speed={80}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          {/* {news.find( n => others_info.is_todays_pick)} */}
        </Marquee>
      </div>
      
      {/* Navbar */}
      <Navbar className='bg-white fs-5 mb-5' bg="light" expand="lg">
        <Container className='px-0' fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 fw-semibold" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
              <Nav.Link to="career">Career</Nav.Link>
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