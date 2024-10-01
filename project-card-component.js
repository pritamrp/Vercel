import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, technologies, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl || '/images/placeholder-project.jpg'} alt={title} className={styles.projectImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <button className={styles.viewDetailsBtn}>View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
