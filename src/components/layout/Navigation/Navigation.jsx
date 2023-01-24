/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useRef } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

import navigation from '../../../data/navigation.json';

const Navigation = () => {
  const [activeRWD, setActiveRWD] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);

  useEffect(() => {
    const main = document.getElementById(`main`).children[1];
    if (activeRWD) {
      main.style.transform = `translateX(-50%)`;
    } else {
      main.style.transform = `translateX(0)`;
    }
  }, [activeRWD]); // eslint-disable-line react-hooks/exhaustive-deps

  const useOutsideMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveRWD(false);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideMenu(menuRef);

  const handleClick = () => {
    setActiveRWD(false);
  };

  return (
    <nav className={styles.root} ref={menuRef}>
      <div className={styles.mobileNav}>
        <div>
          <HamburgerSqueeze
            className={styles.burgerButton}
            id="burgerButton"
            isActive={activeRWD}
            onClick={() => setActiveRWD(!activeRWD)}
          />
        </div>
      </div>
      <div
        className={activeRWD ? styles.menu : styles.menu__hidden}
        ref={menuLinksRef}
      >
        {navigation.map((item) => (
          <div key={item.id} className="p-3 p-xl-0">
            <NavLink
              to={`/${item.linkSrc}`}
              onClick={() => handleClick(item.linkSrc)}
              className={({ isActive }) =>
                isActive ? styles.navLink__active : styles.navLink
              }
            >
              {item.linkName}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
