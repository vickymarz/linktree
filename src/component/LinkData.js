import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkData = ({ link, children }) => (
  <Link to={link}>
    {children}
  </Link>
);

LinkData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkData;
