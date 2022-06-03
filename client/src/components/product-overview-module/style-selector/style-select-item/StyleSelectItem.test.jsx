import renderer from 'react-test-renderer';
import StyleSelectItem from './StyleSelectItem.jsx';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';

const currentStyle = { style_id: 1243 };

test('renders correctly', () => {
   const tree = renderer
      .create(<StyleSelectItem currentStyle={currentStyle} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('displays the image without checkbox when not selected', () => {
   const user = userEvent.setup();
   render(
      <StyleSelectItem
         style_id={11}
         image={'test'}
         handleStyleClick={'test'}
         index={0}
         currentStyle={currentStyle}
      />
   );
   expect(screen.getByTestId('style-img-0')).toBeDefined();
});

test('displays the checkbox when selected', () => {
   const user = userEvent.setup();
   render(
      <StyleSelectItem
         style_id={1243}
         image={'test'}
         handleStyleClick={'test'}
         index={0}
         currentStyle={currentStyle}
      />
   );

   expect(screen.getByTestId('checkbox-icon')).toBeDefined();
});
