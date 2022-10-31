import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src, alt, className, id,
}) => (
  <img src={src} alt={alt} className={className} id={id} />
);

Image.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
  id: '',
};

export default Image;
