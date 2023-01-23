import React from 'react';
import { motion } from 'framer-motion';

import styles from './Contact.module.scss';

const Contact = () => {
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
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={styles.root}
    >
      <h2>Contact</h2>
    </motion.div>
  );
};

export default Contact;
