import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Registration = () => {

  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // const accept = form.accept.value;
      console.log(name, photo, email, password);

      if(!email) {
        setErrorMessage("You should enter a valid email id to register.");
        // setValidated(true);
        return;
      }
      else if(!password) {
        setErrorMessage("You should enter a valid password to register.");
        // setValidated(true);
        return;
      }

      createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setErrorMessage("");
        toast.success("Registration successful!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
    }
    // setValidated(true); // To show error message
  };

  return (
    <Container className='bg-white shadow w-25 rounded p-5 my-auto'>
      <h4 className='text-center fs-4 fw-bold mb-4'>Register your account</h4>

      <hr className='text-secondary my-4' />

      <Form noValidate validated={validated} onSubmit={handleRegistration}>

        <p className='text-danger'> {errorMessage} </p>

        <Form.Group as={Col} controlId="validateCustomName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Enter your name"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>You must enter your email address.</Form.Control.Feedback> */}
          <Form.Control.Feedback type="invalid">You must enter your name.</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className='mt-3' as={Col} controlId="validateCustomPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            required
            name="photo"
            type="text"
            placeholder="Enter your photo url"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>You must enter your email address.</Form.Control.Feedback> */}
          <Form.Control.Feedback type="invalid">You must enter a valid photo url.</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className='mt-3' as={Col} controlId="validateCustomEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter your email address"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>You must enter your email address.</Form.Control.Feedback> */}
          <Form.Control.Feedback type="invalid">You must enter a valid email address.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mt-3' as={Col} controlId="validateCustomPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              aria-label="Password"
              aria-describedby="password"
              defaultValue=""
              autoComplete="current-password"
            />
            <InputGroup.Text className='p-0'>
              <Button variant='outline-none' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className='fs-5' /> : <FaEye className='fs-5' />}
              </Button>
            </InputGroup.Text>
            <Form.Control.Feedback type="invalid">You must enter your password.</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Check type='checkbox' id='acceptTerms'>
            <Form.Check.Input name='accept' type='checkbox' required />
            <Form.Check.Label>Accept Terms & Conditions</Form.Check.Label>
          </Form.Check>
        </Form.Group>
        <Button variant='secondary' className='w-100 py-2 mb-4' type="submit">Register</Button>

        <p className='text-center mb-0'>
          <Form.Text id="noAccount" muted>
            Already have an account? <Link to='/login'>Login</Link>
          </Form.Text>
        </p>
      </Form>

    </Container>
  );
};

export default Registration;