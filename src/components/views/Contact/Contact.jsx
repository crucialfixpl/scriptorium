import React from 'react';
import { motion } from 'framer-motion';
import usePageTransition from '../../utils/PageTransition';

import styles from './Contact.module.scss';

const Contact = () => (
  <motion.div
    className={styles.root}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={usePageTransition.pageVariants}
    transition={usePageTransition.pageTransition}
  >
    <h2>Contact</h2>
    {/* https://github.com/crucialfixpl */}
  </motion.div>
);

export default Contact;
