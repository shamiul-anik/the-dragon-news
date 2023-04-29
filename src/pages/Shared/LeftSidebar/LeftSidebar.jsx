import React, { useEffect, useState } from 'react';
import { Nav, NavLink, Navbar } from 'react-bootstrap';
import './LeftSidebar.css';

const LeftSidebar = () => {

	const [categories, setCategories] = useState([]);

	useEffect(()=> {
		fetch("./data/categories.json")
		.then(res => res.json())
		.then(data => setCategories(data));
	}, []);

	console.log(categories);

	return (
		<div>
			<div>
				<h3 className='fw-bolder fs-5'>All Category</h3>

				{/* Left Navbar */}
				<Navbar className='category_navbar bg-white fw-bold fs-6 mb-3' bg="light">
					<Nav className="d-flex flex-column flex-grow-1">
						{
							categories.map(category => <Nav.Link key={category.id} to={category.id}>{category.name}</Nav.Link>)
						}
					</Nav>
				</Navbar>
			</div>
		</div>
	);
};

export default LeftSidebar;