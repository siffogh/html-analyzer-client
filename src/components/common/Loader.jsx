import React from 'react';
const Loader = require('halogen/PulseLoader');


export default ({ color, size, margin, display }) => {
  console.log('display: ',display);
  if (!display) { return (<span></span>); }
  return (
    <Loader color={color} size={size} margin={margin} />
  );
};
