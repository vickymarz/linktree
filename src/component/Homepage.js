import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../images/avatar.jpg';
import Image from './Image';
import LinkData from './LinkData';
import github from '../images/github.png';
import slack from '../images/slack.png';
import hng from '../images/I4G.png';
import styles from '../css/homepage.module.css';

const Homepage = ({ links }) => {
  const linkData = links.map(({ id, title, url }) => (
    <li key={id} className={styles.list}>
      <LinkData link={url}>
        {title}
      </LinkData>
    </li>
  ));

  return (
    <>
      <main className={styles.container}>
        <div className={styles.avatar}>
          <Image src={avatar} alt="victor photo" id={styles.profile__img} />
        </div>
        <h1 className={styles.title}>Victor Okoroji</h1>
        <ul className={styles.lists}>
          {linkData}
        </ul>
        <div className={styles.social}>
          <LinkData link="https://github.com/vickymarz">
            <Image src={github} alt="github" />
          </LinkData>
          <LinkData link="slack">
            <Image src={slack} alt="slack" />
          </LinkData>
        </div>
      </main>
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
    </>
  );
};

Homepage.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Homepage;
