import React from 'react';
const Loader = require('halogen/PulseLoader');
import './Loader.scss';

export default ({ color, size, margin, display }) => {
  console.log('display: ',display);
  if (!display) { return (<span></span>); }
  return (
    <div className="loader">
      <Loader color={color} size={size} margin={margin} />
    </div>
  );
};
