/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../common/Logo/Logo';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <Row className={styles.root}>
    <Col className="col-2">
      <Logo />
    </Col>
    <Col className="col-10">
      <Navigation />
    </Col>
  </Row>
);

export default Header;
