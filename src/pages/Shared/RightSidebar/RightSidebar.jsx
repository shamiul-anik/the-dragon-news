import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QZone from '../QZone/QZone';

const RightSidebar = () => {
  return (
    <>
    <div>
      <h3 className='fw-bold fs-5'>Login with</h3>
      <Button className='mt-2 w-100 fw-semibold' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button className='mt-2 w-100 fw-semibold' variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
    </div>
		
    <div className='mt-5'>
      <h3 className='fw-bold fs-5'>Find Us On</h3>
        <ListGroup>
          <Link className='text-decoration-none' to="https://www.facebook.com/" target='_blank'><ListGroup.Item className='d-flex gap-2 align-items-center'><FaFacebook /> Facebook</ListGroup.Item></Link>
          <Link className='text-decoration-none' to="https://www.twitter.com/" target='_blank'><ListGroup.Item className='d-flex gap-2 align-items-center'><FaTwitter /> Twitter</ListGroup.Item></Link>
          <Link className='text-decoration-none' to="https://www.instagram.com/" target='_blank'><ListGroup.Item className='d-flex gap-2 align-items-center'><FaInstagram /> Instagram</ListGroup.Item></Link>
        </ListGroup>
    </div>
    
		<QZone></QZone>
    </>
  );
};

export default RightSidebar;