import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <div className='text-center mt-5 mb-3'>
        <img src={Logo} alt="Logo" />
        <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div>
        <Button variant='danger'>Latest</Button>
      </div>
    </Container>
  );
};

export default Header;