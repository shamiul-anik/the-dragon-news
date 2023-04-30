import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaArrowLeft, FaRegCalendar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import editorsInsightImage1 from '../../assets/img/editorsInsight1.png';
import editorsInsightImage2 from '../../assets/img/editorsInsight2.png';
import editorsInsightImage3 from '../../assets/img/editorsInsight3.png';

const News = () => {

	const news = useLoaderData();
	const { category_id, title, details, image_url } = news;

	return (
		<div>
			<h3 className='fw-bolder mb-3 fs-5'>Dragon News</h3>
			<Card className='p-4 shadow-sm'>
				<Card.Img variant="top" src={image_url} />
				<Card.Body className='p-0'>
					<Card.Title className='fs-4 fw-bolder text-justify lh-base mt-3'>{ title }</Card.Title>
					<Card.Text className='text-secondary text-justify'>{ details }</Card.Text>
					<Link to={`/category/${category_id}`}>
						<Button className='font-bold mt-2' variant="danger"><FaArrowLeft /> All news in this category</Button>
					</Link>
				</Card.Body>
			</Card>

			<h3 className='fw-bolder mt-4 mb-3 fs-4'>Editors Insight</h3>
			<Row xs={1} md={2} lg={3} className="g-4">
				<Col>
					<Card>
						<Card.Img variant="top" src={editorsInsightImage1} alt='Editors Insight Image 1' />
						<Card.Body>
							<Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<FaRegCalendar className='text-secondary' />
								<span className='text-secondary mb-0'>Jan 4, 2022</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={editorsInsightImage2} alt='Editors Insight Image 2' />
						<Card.Body>
							<Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<FaRegCalendar className='text-secondary' />
								<span className='text-secondary mb-0'>Jan 4, 2022</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={editorsInsightImage3} alt='Editors Insight Image 3' />
						<Card.Body>
							<Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<FaRegCalendar className='text-secondary' />
								<span className='text-secondary mb-0'>Jan 4, 2022</span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default News;