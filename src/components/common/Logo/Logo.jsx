import React from 'react';
import useWindowDimensions from '../../utils/ScreenDimensions';
import styles from './Logo.module.scss';

const Logo = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.root}>
      <a
        href="https://github.com/crucialfixpl/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={width < 768 ? `/logoS.svg` : `/logo.svg`}
          className={styles.logo}
          alt="Scriptorium logo"
        />
      </a>
    </div>
  );
};

export default Logo;
