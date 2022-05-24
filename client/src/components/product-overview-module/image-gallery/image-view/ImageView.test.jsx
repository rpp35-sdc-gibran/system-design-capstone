import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import ImageView from './ImageView.jsx';

const photo = { url: 'test1', thumbnail_url: 'test1' };
const photo2 = { url: 'test2', thumbnail_url: 'test2' };
const photo3 = { url: 'test3', thumbnail_url: 'test3' };
const currentStylePhotos = [photo, photo2, photo3];
const handleChildZoom = () => {
  console.log('here');
};
test('renders the image gallery correctly', () => {
  render(
    <ImageView
      currentStylePhotos={currentStylePhotos}
      handleChildZoom={handleChildZoom}
    />
  );
  expect(screen.getByAltText('main image default view')).toBeDefined();
  expect(screen.getAllByAltText('thumbnail image')).toBeDefined();
  expect(screen.queryByTestId('icon-prev')).toBeNull();
});

test('prev and next arrrows should switch default image src on click', async () => {
  const user = userEvent.setup();
  render(
    <ImageView
      currentStylePhotos={currentStylePhotos}
      handleChildZoom={handleChildZoom}
    />
  );
  let prevImage = screen.getByAltText('main image default view');
  expect(prevImage.src).toEqual('http://localhost/test1');
  await user.click(screen.getByTestId('icon-next'));
  let nextImage = screen.getByAltText('main image default view');
  expect(nextImage.src).toEqual('http://localhost/test2');
  await user.click(screen.getByTestId('icon-prev'));
  expect(nextImage.src).toEqual('http://localhost/test1');
});

//- [ ]  test to see if clicking on thumbnails changes the default image
