import renderer from 'react-test-renderer';
import Star from './Star.jsx';

it('renders correctly', () => {
   const tree = renderer.create(<Star />).toJSON();
   expect(tree).toMatchSnapshot();
});
