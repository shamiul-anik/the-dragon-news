import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';

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
			</div>
		</div>
	);
};

export default LeftSidebar;