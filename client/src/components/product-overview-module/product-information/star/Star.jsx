import * as React from 'react';
import './Star.scss';

const SvgComponent = (props) => (
  <svg
    viewBox={`0 0 ${props.rating} 50`}
    xmlns='http://www.w3.org/2000/svg'
    id='star-container'
    xmlSpace='preserve'
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    <path
      d='M0 37.069h102L19.491 96.991 51.041.009l31.55 96.982L0 37.069Z'
      style={{
        fill: '#ff0',
        fillRule: 'nonzero',
      }}
      transform='matrix(.36274 0 0 .36274 7 6.907)'
    />
  </svg>
);

export default SvgComponent;
