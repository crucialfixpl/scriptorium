/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

const Projects = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  const pageTransition = {
    type: `spring`,
    ease: `linear`,
    duration: 0.2,
  };
  return (
    <motion.div
      className={styles.root}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2>Projects</h2>
    </motion.div>
  );
};

export default Projects;
