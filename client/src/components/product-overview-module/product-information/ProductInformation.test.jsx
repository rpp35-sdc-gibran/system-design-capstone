import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import ProductInformation from './ProductInformation.jsx';

test('product information renders correctly', async () => {
  render(<ProductInformation rating={4} />);
  expect(screen.getByTestId('reviewLink')).toBeDefined();
  expect(screen.getByTestId('product-info-category')).toBeDefined();
  expect(screen.getByTestId('product-info-name')).toBeDefined();
});

//- [ ]  test to see if price is crossed out when there is a sale price
