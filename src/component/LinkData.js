import React from 'react';
import PropTypes from 'prop-types';

const LinkData = ({ link, children, id }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" id={id}>
    {children}
  </a>
);

LinkData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default LinkData;
