import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import ImageViewThumbnails from './ImageViewThumbnails.jsx';

const photo1 = { url: 'test1', thumbnail_url: 'test1' };
const photo2 = { url: 'test2', thumbnail_url: 'test2' };
const photo3 = { url: 'test3', thumbnail_url: 'test3' };
const photos = [photo1, photo2, photo3];

test('renders the image view thumbnails correctly', async () => {
  render(<ImageViewThumbnails photos={photos} />);
  expect(screen.getAllByAltText('thumbnail image')).toBeDefined();
});
