import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import 'regenerator-runtime/runtime';
import Ratings from '../../client/src/components/ratings&reviews/ratings/Ratings.jsx';

let container = null;
beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement('div');
   document.body.appendChild(container);
});

afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

it('renders reviewsMeta data', async () => {
   const fakeReviewMeta = {
      product_id: '12345',
      ratings: { 2: '1', 3: '1', 4: '1', 5: '1' },
      recommended: { false: '5', true: '5' },
      characteristics: {
         Fit: { id: 240582, value: '4.2000000000000000' },
         Length: { id: 240583, value: '3.8000000000000000' },
         Comfort: { id: 240584, value: '4.4000000000000000' },
         Quality: { id: 240585, value: '4.0000000000000000' },
      },
   };
   // jest.spyOn(global, "fetch").mockImplementation(() =>
   //   Promise.resolve({
   //     json: () => Promise.resolve(fakeReviewMeta)
   //   })
   // );

   // Use the asynchronous version of act to apply resolved promises
   await act(async () => {
      render(<Ratings reviewsMeta={fakeReviewMeta} />, container);
   });

   expect(container.querySelector('span').textContent).toBe('3.5');
   expect(container.querySelector('h5').textContent).toBe('RATINGS & REVIEWS');

   // remove the mock to ensure tests are completely isolated
   //global.fetch.mockRestore();
});
