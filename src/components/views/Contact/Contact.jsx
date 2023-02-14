import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
    <ul>
      <li>
        <a href="mailto:info@scriptorium.dev">
          <FontAwesomeIcon icon={faEnvelope} />
          info@scriptorium.dev
        </a>
      </li>
    </ul>
  </motion.div>
);

export default Contact;
