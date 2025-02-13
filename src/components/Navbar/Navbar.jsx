import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/assets/nav/logo.png" alt="Logo" />
      
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
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
