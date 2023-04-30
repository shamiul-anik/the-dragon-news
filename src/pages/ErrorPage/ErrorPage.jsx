import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import PageNotFound from '../../assets/lottie/page-not-found-404.json';
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft } from 'react-icons/fa';

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div className="flex flex-col justify-content-center align-items-center text-center w-50 h-100 mx-auto">
      <Lottie animationData={PageNotFound} loop={true} />
      <p className="fs-4">
        <i className="text-danger">{error?.data}</i>
        <i className="text-danger">{error?.message}</i>
      </p>
      <div className="mt-5">
        <Link to="/"><Button className='px-3 py-2 fs-5 fw-bold' variant="primary"><FaArrowCircleLeft className='fs-5 me-1' /> Back to Main</Button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;