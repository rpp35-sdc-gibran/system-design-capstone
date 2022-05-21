import renderer from 'react-test-renderer';
import StyleSelectItem from './StyleSelectItem.jsx';

const currentStyle = { style_id: 1243 };

test('renders correctly', () => {
  const tree = renderer
    .create(<StyleSelectItem currentStyle={currentStyle} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
