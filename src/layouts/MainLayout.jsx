import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../pages/Shared/LeftSidebar/LeftSidebar';
import RightSidebar from '../pages/Shared/RightSidebar/RightSidebar';
import { Outlet } from 'react-router-dom';
import HeaderNavbar from '../pages/Shared/HeaderNavbar/HeaderNavbar';

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <HeaderNavbar></HeaderNavbar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSidebar></LeftSidebar>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSidebar></RightSidebar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;