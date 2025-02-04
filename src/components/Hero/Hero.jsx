import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to 24Krafts</h1>
        <p className={styles.heroDescription}>
          Your gateway to the best movies, series, and shows. Start your adventure today!
        </p>
        <div className={styles.buttons}>
          <button className={styles.playButton}>▶ Start Watching</button>
          <button className={styles.infoButton}>ℹ More Info</button>
        </div>
      </div>
    </div>
  );
};
