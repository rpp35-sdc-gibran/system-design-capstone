import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import 'regenerator-runtime/runtime';
import StyleSelect from './StyleSelect.jsx';

const styles = { style_id: 34, results: [] };
const styleList = {};
styleList.results = [];
let currentStyle = { name: 'testname' };

test('Style Select renders correctly', async () => {
   render(
      <StyleSelect
         styles={styles}
         handleStyleClick={'test'}
         currentStyle={currentStyle}
         styleList={styleList}
      />
   );
   expect(screen.getByTestId('styleContainer')).toBeDefined();
});
