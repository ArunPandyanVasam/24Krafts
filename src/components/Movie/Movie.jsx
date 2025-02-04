import React, { useState, useEffect } from "react";
import styles from "./Movie.module.css";

export const Movie = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json") // Fetching from public folder
      .then((response) => response.json())
      .then((data) => setMovies(data[category] || [])) // Get movies by category
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div className={styles.movieRow}>
      <h2 className={styles.title}>{category}</h2>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img src={movie.image} alt={movie.title} className={styles.movieImage} />
            <p className={styles.movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
