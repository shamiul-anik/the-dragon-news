import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../pages/Shared/HeaderNavbar/HeaderNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
  return (
    <div className='d-flex flex-column pt-4' style={{ height: '100dvh' }}>
      <HeaderNavbar></HeaderNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;