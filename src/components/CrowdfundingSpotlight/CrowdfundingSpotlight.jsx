import React, { useState, useEffect } from 'react';
import styles from './CrowdfundingSpotlight.module.css';

export const CrowdfundingSpotlight = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/CrowdfundingSpotlight.json') // Fetching data from public folder
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching crowdfunding movies:', error));
  }, []);

  return (
    <div className={styles.crowdfundingSpotlightSection}>
      <h2 className={styles.title}>Crowdfunding Spotlight</h2>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img src={movie.poster} alt={movie.title} className={styles.moviePoster} />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieDescription}>{movie.description}</p>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${(movie.funded / movie.goal) * 100}%` }}
              ></div>
            </div>
            <p className={styles.fundedAmount}>
              ${movie.funded.toLocaleString()} of ${movie.goal.toLocaleString()} funded
            </p>
            <button className={styles.ctaButton}>Support Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
