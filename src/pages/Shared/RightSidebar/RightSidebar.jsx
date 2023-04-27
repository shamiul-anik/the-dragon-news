import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QZone from '../QZone/QZone';
import BackgroundImage from '../../../assets/bg.png';

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
						<Link className='text-decoration-none' to="https://www.facebook.com/" target='_blank'>
							<ListGroup.Item className='d-flex gap-2 align-items-center'><FaFacebook /> Facebook</ListGroup.Item>
						</Link>
						<Link className='text-decoration-none' to="https://www.twitter.com/" target='_blank'>
							<ListGroup.Item className='d-flex gap-2 align-items-center'><FaTwitter /> Twitter</ListGroup.Item>
						</Link>
						<Link className='text-decoration-none' to="https://www.instagram.com/" target='_blank'>
							<ListGroup.Item className='d-flex gap-2 align-items-center'><FaInstagram /> Instagram</ListGroup.Item>
						</Link>
					</ListGroup>
			</div>
			
			<QZone></QZone>

			<div className='mt-4 position-relative'>
				<img className='img-fluid w-100' src={BackgroundImage} alt="Background Image" />
				<div className='position-absolute top-0 left-0 right-0 bottom-0'>
					<div className="h-100 d-flex flex-column justify-content-center align-items-center text-center text-white p-5">
						<h3 className='fs-2 fw-bolder'>Create an Amazing Newspaper</h3>
						<p className='fs-5 mt-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
						<Button className='fw-semibold px-4 py-2 fs-5 mt-3' variant="danger">Learn More</Button>
					</div>
				</div>
			</div>
    </>
  );
};

export default RightSidebar;