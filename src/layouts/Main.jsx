import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../pages/Shared/LeftSidebar/LeftSidebar';
import RightSidebar from '../pages/Shared/RightSidebar/RightSidebar';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSidebar></LeftSidebar>
          </Col>
          <Col lg={6}>
            <h2>Main content coming</h2>
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

export default Main;