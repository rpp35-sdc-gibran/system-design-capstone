import * as React from 'react';
import './Star.scss';

const SvgComponent = (props) => (
  <svg
    width={props.currentrating}
    height={97}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M0 37.069h102L19.492 96.99 51.041.009l31.55 96.982L0 37.069Z'
        fill='#FF0'
        id='star-container'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h102v97H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
