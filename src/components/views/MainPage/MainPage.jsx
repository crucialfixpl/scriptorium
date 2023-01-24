/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './MainPage.module.scss';
import usePageTransition from '../../utils/PageTransition';

const MainPage = () => (
  <motion.div
    className={styles.root}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={usePageTransition.pageVariants}
    transition={usePageTransition.pageTransition}
  >
    <h1>Work in progress</h1>
  </motion.div>
);

export default MainPage;
