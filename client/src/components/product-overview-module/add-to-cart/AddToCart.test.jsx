import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToCart from './AddToCart.jsx';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';

let currentStyle = {};
let skus = {
  234: { quantity: 8, size: 'S' },
  23444: { quantity: 2, size: 'M' },
};
currentStyle.skus = skus;

test('AddToCart renders correctly', () => {
  render(<AddToCart currentStyle={currentStyle} />);
  let selectQuantityOption = screen.getByTestId('default-quantity');
  let selectSizeInput = screen.getByTestId('select-size');
  let selectQuantityInput = screen.getByTestId('select-quantity');

  expect(selectQuantityOption).toHaveProperty('disabled');
  expect(selectSizeInput).toHaveProperty('required');
  expect(selectQuantityInput).toHaveProperty('required');
});

test('select size options matches number of sizes provided as prop', () => {
  render(<AddToCart currentStyle={currentStyle} />);
  expect(screen.getAllByTestId('select-size-option')).toHaveLength(2);
});

//tests to see that number of options are rendered correctly for quantity after click
test('select quantity options should match quantity of selected size', async () => {
  const user = userEvent.setup();
  render(<AddToCart currentStyle={currentStyle} />);
  await user.selectOptions(screen.getByTestId('select-size'), ['S']);
  expect(screen.getByRole('option', { name: 'S' }).selected).toBe(true);
  expect(screen.getAllByTestId('select-quantity-option')).toHaveLength(8);
});
//tests that out of stock option appears when no stock is given
