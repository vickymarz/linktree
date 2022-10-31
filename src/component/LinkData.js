import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkData = ({ link, children }) => (
  <div>
    <Link to={link}>
      {children}
    </Link>
  </div>
);

LinkData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkData;
