import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToCart from './AddToCart.jsx';

let currentStyle = {};
let skus = {
  234: { quantity: 8, size: 'S' },
  23444: { quantity: 2, size: 'M' },
};
currentStyle.skus = skus;

test('AddToCart renders correctly', () => {
  render(<AddToCart currentStyle={currentStyle} />);
  let selectQuantityOption = screen.getByTestId('defaultQuantity');
  let selectSizeInput = screen.getByTestId('selectSize');
  let selectQuantityInput = screen.getByTestId('selectQuantity');

  expect(selectQuantityOption).toHaveProperty('disabled');
  expect(selectSizeInput).toHaveProperty('required');
  expect(selectQuantityInput).toHaveProperty('required');
});
