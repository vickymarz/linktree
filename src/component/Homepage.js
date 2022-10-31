import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../images/avatar.jpg';
import Image from './Image';
import Links from './Links';
import github from '../images/github.png';
import slack from '../images/slack.png';
import hng from '../images/I4G.png';

const Homepage = ({ links }) => {
  const linkData = links.map(({ id, title, url }) => (
    <div key={id}>
      <Links link={url}>
        {title}
      </Links>
    </div>
  ));

  return (
    <div>
      <Image src={avatar} alt="victor photo" />
      <div>
        {linkData}
      </div>
      <div>
        <Links link="https://github.com/vickymarz">
          <Image src={github} alt="github" />
        </Links>
        <Links link="slack">
          <Image src={slack} alt="slack" />
        </Links>
      </div>
      <footer>
        <h2>Zuri Internship</h2>
        <p>HNG Internship 9 Frontend Task</p>
        <Image src={hng} alt="ingressive logo" />
      </footer>
    </div>
  );
};

Homepage.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Homepage;
