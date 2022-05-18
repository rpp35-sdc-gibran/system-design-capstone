import React from 'react';
import renderer from 'react-test-renderer';
import AddToCart from './AddToCart.jsx';

it('renders correctly', () => {
  let currentStyle = {};
  let skus = {
    234: { quantity: 8, size: 'S' },
    23444: { quantity: 2, size: 'M' },
  };
  currentStyle.skus = skus;
  const tree = renderer
    .create(<AddToCart currentStyle={currentStyle} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
