import React, { useEffect, useState } from 'react';
import { Card, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './LeftSidebar.css';
import firstImage from '../../../assets/img/1.png';
import secondImage from '../../../assets/img/2.png';
import thirdImage from '../../../assets/img/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const LeftSidebar = () => {

	const [categories, setCategories] = useState([]);

	useEffect(()=> {
		// fetch("https://raw.githubusercontent.com/shamiul-anik/the-dragon-news/main/public/data/categories.json")
		// fetch("./data/categories.json")
		fetch("http://localhost:5000/categories")
		.then(res => res.json())
		.then(data => setCategories(data))
		.catch(error => console.error(error));
	}, []);

	// console.log(categories);

	return (
		<div>
			<div>
				<h3 className='fw-bolder fs-5'>All Category</h3>

				{/* Left Navbar */}
				<Navbar className='category_navbar bg-white fw-bold fs-6 mb-3' bg="light">
					<Nav className="d-flex flex-column flex-grow-1">
						{
							categories.map(category => <NavLink className='nav-link' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
						}
					</Nav>
				</Navbar>

				{/* Cards */}
				<div className='d-flex flex-column gap-4'>
					<Card>
						<Card.Img variant="top" src={firstImage} alt='First Image' />
						<Card.Body>
							<Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<p className='fw-bold mb-0 me-3'>Sports</p>
								<FaRegCalendar />
								<p className='text-secondary mb-0'>Jan 4, 2022</p>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={secondImage} alt='Second Image' />
						<Card.Body>
							<Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<p className='fw-bold mb-0 me-3'>Sports</p>
								<FaRegCalendar />
								<p className='text-secondary mb-0'>Jan 4, 2022</p>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={thirdImage} alt='Third Image' />
						<Card.Body>
							<Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
							<Card.Text className='d-flex align-items-center gap-2 mt-3'>
								<p className='fw-bold mb-0 me-3'>Sports</p>
								<FaRegCalendar />
								<p className='text-secondary mb-0'>Jan 4, 2022</p>
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				
			</div>
		</div>
	);
};

export default LeftSidebar;