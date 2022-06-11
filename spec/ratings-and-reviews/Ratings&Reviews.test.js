import { render } from '@testing-library/react';
import React from 'react';
import RatingsAndReviews from '../../client/src/components/ratings&reviews/RatingsAndReviews.jsx';
import renderer from 'react-test-renderer';



describe('RatingsAndReviews', () => {
   test('renders reviews and ratings components', () => {
      render(<RatingsAndReviews />);
   });
});
const fakeProduct_id = '71697'
test('renders correctly', () => {
   const tree = renderer.create(<RatingsAndReviews  currentProductId={fakeProduct_id}/>).toJSON();
   expect(tree).toMatchSnapshot();
 });