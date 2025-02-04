import React, { useState, useEffect } from 'react';
import styles from './JobListings.module.css';

export const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/jobListings.json') // Fetching data from public folder
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching job listings:', error));
  }, []);

  return (
    <div className={styles.jobListingsSection}>
      <h2 className={styles.title}>Job Listings in the Film Industry</h2>
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.jobDescription}>{job.description}</p>
            <p className={styles.jobLocation}>Location: {job.location}</p>
            <p className={styles.jobSalary}>Salary: {job.salary}</p>
            <button className={styles.ctaButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
