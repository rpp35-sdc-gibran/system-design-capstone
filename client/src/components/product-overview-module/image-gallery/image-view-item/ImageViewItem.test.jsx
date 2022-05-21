import renderer from 'react-test-renderer';
import ImageViewItem from './ImageViewItem.jsx';

it('renders correctly', () => {
  const tree = renderer.create(<ImageViewItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
