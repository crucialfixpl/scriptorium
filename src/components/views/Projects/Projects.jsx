/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';
import usePageTransition from '../../utils/PageTransition';
import projects from '../../../data/projects.json';
import Project from '../../common/Project/Project';

const Projects = () => (
  <motion.div
    className={styles.root}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={usePageTransition.pageVariants}
    transition={usePageTransition.pageTransition}
  >
    <h2>Selected Projects</h2>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <Project project={project} index={project.id} />
        </li>
      ))}
    </ul>
    <div />
  </motion.div>
);

export default Projects;
