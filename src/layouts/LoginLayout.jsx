import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../pages/Shared/HeaderNavbar/HeaderNavbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className='p-4'>
      <HeaderNavbar></HeaderNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;