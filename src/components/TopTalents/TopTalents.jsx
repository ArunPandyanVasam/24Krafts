import React, { useState, useEffect } from "react";
import styles from "./TopTalents.module.css";

export const TopTalents = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetch("/topTalents.json")
      .then((response) => response.json())
      .then((data) => setTalents(data))
      .catch((error) => console.error("Error fetching top talents:", error));
  }, []);

  return (
    <div className={styles.topTalentsSection}>
      <h2 className={styles.title}>Top Talents in the Industry</h2>
      <div className={styles.talentList}>
        {talents.map((talent) => (
          <div key={talent.id} className={styles.talentCard}>
            <img
              src={talent.image}
              alt={talent.name}
              className={styles.talentImage}
            />
            <h3 className={styles.talentName}>{talent.name}</h3>
            <p className={styles.talentProfession}>{talent.profession}</p>
            <p className={styles.talentLikes}>
              ❤️ {talent.likes.toLocaleString()} Likes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
