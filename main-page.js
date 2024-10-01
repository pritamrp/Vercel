import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import SkillsChart from '../components/SkillsChart';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Your Name - Data Scientist Portfolio</title>
        <meta name="description" content="Data Scientist portfolio showcasing projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <h1>Turning Data into Insights</h1>
        <div className={styles.introduction}>
          <img src="/images/profile-picture.jpg" alt="Your Name" className={styles.profilePicture} />
          <p>Hi, I'm [Your Name], a Data Scientist specializing in predictive modeling, machine learning, and big data analytics.</p>
        </div>
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <SkillsChart />
      </section>

      <section className={styles.projects}>
        <h2>Featured Projects</h2>
        <div className={styles.projectGrid}>
          <ProjectCard
            title="Predictive Analytics for Retail Sales"
            description="Developed a model to forecast sales and optimize inventory management."
            technologies={['Python', 'TensorFlow', 'Pandas']}
          />
          {/* Add more ProjectCard components for other projects */}
        </div>
      </section>
    </Layout>
  );
}
