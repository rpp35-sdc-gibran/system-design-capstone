import renderer from 'react-test-renderer';
import ImageViewThumbnailItem from './ImageViewThumbnailItem.jsx';

it('renders correctly', () => {
  const tree = renderer.create(<ImageViewThumbnailItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
