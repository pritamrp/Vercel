import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Your Name</a>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/about"><a>About Me</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
