import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserIcon from '../../../assets/img/user.png';
import { AuthContext } from '../../../providers/AuthProvider';

const HeaderNavbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar className='bg-white fs-5 mb-5' bg="light" expand="lg">
        <Container className='px-0' fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex gap-4 mx-auto fw-semibold" navbarScroll>
              <NavLink className='header-navlink text-decoration-none text-secondary' to="/category/0">Home</NavLink>
              <NavLink className='header-navlink text-decoration-none text-secondary' to="/about">About</NavLink>
              <NavLink className='header-navlink text-decoration-none text-secondary' to="/career">Career</NavLink>
            </Nav>
            <Form className="d-flex align-items-center gap-3">
              {
                user &&
                <>
                  <img src={UserIcon} alt="User Icon" />
                  <div>{user.displayName}</div>
                </>
              }

              {
                user ?
                  <Button className='px-4 py-2' variant="danger">Logout</Button> :
                  <Link to='/login'>
                    <Button className='px-4 py-2' variant="secondary">Login</Button>
                  </Link>
              }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default HeaderNavbar;