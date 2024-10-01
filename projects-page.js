import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projectsData = [
  {
    title: "Predictive Analytics for Retail Sales",
    description: "Developed a model to forecast sales and optimize inventory management.",
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    imageUrl: '/images/project1.jpg'
  },
  {
    title: "Sentiment Analysis on Social Media Data",
    description: "Built a natural language processing model to analyze customer sentiment on Twitter.",
    technologies: ['Python', 'NLTK', 'Scikit-learn'],
    imageUrl: '/images/project2.jpg'
  },
  {
    title: "Customer Segmentation for E-commerce",
    description: "Used clustering algorithms to segment customers and improve targeted marketing.",
    technologies: ['Python', 'K-means', 'Matplotlib'],
    imageUrl: '/images/project3.jpg'
  }
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Your Name</title>
        <meta name="description" content="Data Science projects portfolio" />
      </Head>

      <div className={styles.projectsContainer}>
        <h1>My Projects</h1>
        <div className={styles.projectGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
