import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

	const [showPassword, setShowPassword] = useState(false);

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	return (
		<Container className='bg-white shadow w-25 rounded p-4'>
			<h4 className='text-center fs-4 fw-bold mt-3 mb-4'>Login your account</h4>

			<hr className='text-secondary my-4' />

			<Form noValidate validated={validated} onSubmit={handleSubmit}>

				<Form.Group as={Col} controlId="validationCustomEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter your email address"
						defaultValue=""
					/>
					{/* <Form.Control.Feedback>You must enter your email address.</Form.Control.Feedback> */}
					<Form.Control.Feedback type="invalid">You must enter your email address.</Form.Control.Feedback>
				</Form.Group>
				
				{/* <Form.Group as={Col} controlId="validationCustom02">
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Enter your password"
						defaultValue=""
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type="invalid">You must enter your password.</Form.Control.Feedback>
				</Form.Group> */}
				
				<Form.Group className='mt-4' as={Col} controlId="validationCustomPassword">
					<Form.Label>Password</Form.Label>
					<InputGroup className="mb-3">
						<Form.Control
							required
							type={showPassword ? "text" : "password" }
							placeholder="Enter your password"
							aria-label="Password"
							aria-describedby="password"
							defaultValue=""
						/>
						<InputGroup.Text className='p-0'>
							<Button variant='outline-none' onClick={ () => setShowPassword(!showPassword) }>
								{showPassword ? <FaEyeSlash className='fs-5' /> : <FaEye className='fs-5' /> }
							</Button>
						</InputGroup.Text>
						{/* <Button variant="outline-secondary" id="password">
							<FaEye className='fs-5' />
							<FaEyeSlash className='fs-5' />
						</Button> */}
						<Form.Control.Feedback type="invalid">You must enter your password.</Form.Control.Feedback>
					</InputGroup>

					{/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
				</Form.Group>
				
				
				{/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
					<Form.Label>Username</Form.Label>
					<InputGroup hasValidation>
						<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
						<Form.Control
							type="text"
							placeholder="Username"
							aria-describedby="inputGroupPrepend"
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please choose a username.
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group> */}

				{/* <Row className="mb-3">
					<Form.Group as={Col} md="6" controlId="validationCustom03">
						<Form.Label>City</Form.Label>
						<Form.Control type="text" placeholder="City" required />
						<Form.Control.Feedback type="invalid">
							Please provide a valid city.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="validationCustom04">
						<Form.Label>State</Form.Label>
						<Form.Control type="text" placeholder="State" required />
						<Form.Control.Feedback type="invalid">
							Please provide a valid state.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="3" controlId="validationCustom05">
						<Form.Label>Zip</Form.Label>
						<Form.Control type="text" placeholder="Zip" required />
						<Form.Control.Feedback type="invalid">
							Please provide a valid zip.
						</Form.Control.Feedback>
					</Form.Group>
				</Row> */}
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Accept Terms & Conditions"
						feedback=""
						feedbackType="invalid"
					/>
				</Form.Group>
				<Button className='w-100 py-2' type="submit">Login</Button>
			</Form>

		</Container>
	);
};

export default Login;