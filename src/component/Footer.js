import React from 'react';
import hng from '../images/I4G.png';
import styles from '../css/homepage.module.css';
import Image from './Image';

const Footer = () => (
  <footer>
    <h2>
      <span className={styles.vector}>Zuri</span>
      Internship
    </h2>
    <p>HNG Internship 9 Frontend Task</p>
    <div className={styles.footerImg}>
      <Image src={hng} alt="ingressive logo" />
    </div>
  </footer>
);

export default Footer;
