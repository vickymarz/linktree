import React from 'react';
import { Link } from 'react-router-dom';

const LInks = () => (
  <div>
    <Link to={link}>
      {children}
    </Link>
  </div>
);

export default LInks;
