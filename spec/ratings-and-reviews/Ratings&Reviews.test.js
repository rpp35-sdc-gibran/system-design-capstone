import { render } from '@testing-library/react';
import React from 'react';
import RatingsAndReviews from '../../client/src/components/ratings&reviews/RatingsAndReviews.jsx';

describe('RatingsAndReviews', () => {
   test('renders reviews and ratings components', () => {
      render(<RatingsAndReviews />);
   });
});
