import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import 'regenerator-runtime/runtime';
import Product from './Product.jsx';
import ReactRouter from 'react-router';

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
   useParams: () => ({
      productId: '1234',
   }),
   useRouteMatch: () => ({ url: '/1234' }),
}));

jest.mock('../../../Hooks/useIntersectionObserver.jsx', () => ({
   useIntersectionObserver: () => true,
}));

let getProductReviewsResponse = {
   results: [
      {
         review_id: 125888,
         rating: 2,
         summary: 'great product',
         recommend: true,
      },
      {
         review_id: 234567,
         rating: 3,
         summary: 'great product',
         recommend: true,
      },
      {
         review_id: 123234,
         rating: 4,
         summary: 'great product',
         recommend: true,
      },
   ],
};

let getProductInfoResponse = {
   default_price: '140.00',
   description: 'This is a test description',
   features: [{ feature: 'fabric', value: 'canvas' }],
   id: 71697,
   name: 'Camo onesie',
   slogan: 'blend into the crowd',
};

let getProductStylesResponse = {
   product_id: '71697',
   results: [
      {
         default: true,
         name: 'forest green and black',
         original_price: '140.00',
         photos: [
            {
               thumbnail_url: 'testthumbnailimages',
               url: 'testimages',
            },
            {
               thumbnail_url: 'testthumbnailimages',
               url: 'testimages',
            },
         ],
         sale_price: '120.00',
         skus: {
            28506: { quantity: 6, size: 'XS' },
            48914: { quantity: 8, size: 'S' },
            38596: { quantity: 10, size: 'M' },
         },
         style_id: 444218,
      },
      {
         default: true,
         name: 'test-style',
         original_price: '150.00',
         photos: [
            {
               thumbnail_url: 'testthumbnailimages',
               url: 'testimages',
            },
            {
               thumbnail_url: 'testthumbnailimages',
               url: 'testimages',
            },
         ],
         sale_price: '120.00',
         skus: {
            28506: { quantity: 6, size: 'XS' },
            48914: { quantity: 8, size: 'S' },
            38596: { quantity: 10, size: 'M' },
         },
         style_id: 444218,
      },
   ],
};

const server = setupServer(
   rest.get('/api/products/:product_id', (req, res, ctx) => {
      return res(ctx.json(getProductInfoResponse));
   }),
   rest.get('api/products/:product_id/styles', (req, res, ctx) => {
      return res(ctx.json(getProductStylesResponse));
   }),
   rest.get('api/products/:product_id/reviews', (req, res, ctx) => {
      return res(ctx.json(getProductReviewsResponse));
   })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the Product page correctly', async () => {
   await render(<Product />);
   await waitFor(() =>
      expect(screen.getByTestId('product-overview')).toBeDefined()
   );

   screen.debug();
});
