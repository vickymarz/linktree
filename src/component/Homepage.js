import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../images/avatar.jpg';
import Image from './Image';
import LinkData from './LinkData';
import github from '../images/github.png';
import slack from '../images/slack.png';
import hng from '../images/I4G.png';

const Homepage = ({ links }) => {
  const linkData = links.map(({ id, title, url }) => (
    <div key={id}>
      <LinkData link={url}>
        {title}
      </LinkData>
    </div>
  ));

  return (
    <main>
      <Image src={avatar} alt="victor photo" />
      <div>
        {linkData}
      </div>
      <div>
        <LinkData link="https://github.com/vickymarz">
          <Image src={github} alt="github" />
        </LinkData>
        <LinkData link="slack">
          <Image src={slack} alt="slack" />
        </LinkData>
      </div>
      <footer>
        <h2>Zuri Internship</h2>
        <p>HNG Internship 9 Frontend Task</p>
        <Image src={hng} alt="ingressive logo" />
      </footer>
    </main>
  );
};

Homepage.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Homepage;
