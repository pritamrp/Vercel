import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me - Your Name</title>
        <meta name="description" content="About Your Name - Data Scientist" />
      </Head>

      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <img src="/images/profile-picture.jpg" alt="Your Name" className={styles.profilePicture} />
        <p>
          Hello! I'm [Your Name], a passionate Data Scientist with a background in [Your Background]. 
          I specialize in machine learning, predictive modeling, and data visualization.
        </p>
        <h2>Education</h2>
        <ul>
          <li>Master's in Data Science, University Name, Year</li>
          <li>Bachelor's in Computer Science, University Name, Year</li>
        </ul>
        <h2>Experience</h2>
        <ul>
          <li>Data Scientist at Company Name, Year-Present</li>
          <li>Data Analyst at Company Name, Year-Year</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Machine Learning - Specialty</li>
          <li>Deep Learning Specialization - Coursera</li>
        </ul>
        <a href="/your-resume.pdf" download className={styles.resumeButton}>Download Resume</a>
      </div>
    </Layout>
  );
}
