import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Your Name</title>
        <meta name="description" content="Contact Your Name - Data Scientist" />
      </Head>

      <div className={styles.contactContainer}>
        <h1>Contact Me</h1>
        <p>Feel free to reach out if you have any questions or opportunities!</p>
        <ContactForm />
        <div className={styles.contactInfo}>
          <h2>Location</h2>
          <p>City, Country</p>
          <h2>Email</h2>
          <p>your.email@example.com</p>
          <h2>Social Media</h2>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
