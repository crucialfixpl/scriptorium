/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setRedirect(true);
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  return (
    <div className={styles.root}>
      {redirect ? (
        <Navigate to="/" />
      ) : (
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Sorry, Page Not Found</h2>
                <p>
                  You will be redirected automatically in {timeLeft} seconds
                </p>
                <a href="/">Go to Home Page</a>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default NotFound;
