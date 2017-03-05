import React from 'react';
import { Link } from 'react-router';

export default ({ target = '', message = '' }) => (
  <p>
    <span>{`${message} `}</span>
    <Link to={target}>{target}</Link>
  </p>
);
