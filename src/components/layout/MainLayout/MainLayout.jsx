import React from 'react';
// import Footer from '../Footer/Footer';

import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={styles.root} id="main">
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
