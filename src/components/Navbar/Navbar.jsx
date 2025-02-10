import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/assets/nav/logo.png" alt="Logo" />
      
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li>Home</li>
        <li>Crowdfunding</li>
        <li>Events</li>
        <li>Jobs</li>
      </ul>
      
      <button className={styles.signIn}>Sign In</button>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isMenuOpen ? styles.cross : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.cross : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.cross : ''}`}></span>
      </div>
    </div>
  );
};
