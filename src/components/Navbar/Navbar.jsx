import React from 'react';
import styles from './Navbar.module.css'; // Ensure correct import

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/assets/nav/logo.png" alt="Logo" />
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>New & Popular</li>
      </ul>
      <button className={styles.signIn}>Sign In</button>
    </div>
  );
};
