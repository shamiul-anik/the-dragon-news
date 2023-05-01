import React from 'react';
import Logo from '../../../assets/img/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

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
          Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...
          {/* {news.find( n => others_info.is_todays_pick)} */}
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;