/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import styles from './MainPage.module.scss';
import usePageTransition from '../../utils/PageTransition';
import services from '../../../data/services.json';

const MainPage = () => (
  <motion.div
    className={styles.root}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={usePageTransition.pageVariants}
    transition={usePageTransition.pageTransition}
  >
    <img src="/hero.webp" alt="Scriptorium" />
    <h1>Hi! We are Scriptorium</h1>

    <h2>
      <Typewriter
        options={{
          strings: services.map((s) => s.name),
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  </motion.div>
);

export default MainPage;
