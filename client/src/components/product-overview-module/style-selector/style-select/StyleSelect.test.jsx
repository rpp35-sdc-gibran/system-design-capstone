import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import StyleSelect from './StyleSelect.jsx';

it('renders snapshot', () => {
  const styles = { style_id: 34, results: [] };
  const styleList = {};
  styleList.results = [];
  const tree = renderer
    .create(
      <StyleSelect
        styles={styles}
        handleStyleClick={'test'}
        currentStyle={'test'}
        styleList={styleList}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
