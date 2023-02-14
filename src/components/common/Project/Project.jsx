/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Row, Col } from 'react-bootstrap';
import styles from './Project.module.scss';

const Project = ({ project, index }) => {
  const cardVariants = {
    offscreen: {
      x: 300,
      y: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: `spring`,
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Row className={index % 2 === 0 ? styles.root__reversed : styles.root}>
        <Col className={`col-12 col-md-6 ${styles.projectPhoto}`}>
          <img src={project.image} alt="asd" />
        </Col>
        <Col className="col-12 col-md-6">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.live}>Visit</a>
        </Col>
      </Row>
    </motion.div>
  );
};

Project.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
};

export default Project;
