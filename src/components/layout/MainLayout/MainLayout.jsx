import React from 'react';

// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => (
  <div className={styles.root} id="main">
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);

export default MainLayout;
