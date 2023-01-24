/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';
import usePageTransition from '../../utils/PageTransition';

const Projects = () => (
  <motion.div
    className={styles.root}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={usePageTransition.pageVariants}
    transition={usePageTransition.pageTransition}
  >
    <h2>Projects</h2>
  </motion.div>
);

export default Projects;
