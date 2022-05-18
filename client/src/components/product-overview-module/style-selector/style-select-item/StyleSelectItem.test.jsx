import React from 'react';
import StyleSelectItem from './StyleSelectItem.jsx';
import { render, screen } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import { userEvent } from '@testing-library/user-event';

test('renders without crashing', () => {
  const currentStyle = { style_id: 444228 };
  render(<StyleSelectItem currentStyle={currentStyle}></StyleSelectItem>);
});

test('renders an image', async () => {
  const user = userEvent.setup();
  const currentStyle = { stlye_id: 444228 };
  render(<StyleSelectItem currentStyle={currentStyle}></StyleSelectItem>);
  userEvent.click(screen.getByTestId('style-select-item'));
});
