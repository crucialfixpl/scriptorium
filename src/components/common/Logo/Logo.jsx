import React from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../utils/ScreenDimensions';
import styles from './Logo.module.scss';

const Logo = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.root}>
      <Link to="/">
        <img
          src={width < 768 ? `/logoS.svg` : `/logo.svg`}
          className={styles.logo}
          alt="Scriptorium logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
