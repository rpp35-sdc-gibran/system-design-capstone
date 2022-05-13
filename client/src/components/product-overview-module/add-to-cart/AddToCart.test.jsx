import React from 'react';
import renderer from 'react-test-renderer';
import AddToCart from './AddToCart.jsx';

// jest.mock('./style-select/StyleSelect.jsx', () => (props) < mock-StyleSelect { ...props } />)

it('renders correctly', () => {
  const tree = renderer.create(<AddToCart />).toJSON();
  expect(tree).toMatchSnapshot();
});
