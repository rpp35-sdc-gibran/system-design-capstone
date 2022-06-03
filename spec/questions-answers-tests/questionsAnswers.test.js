import { render } from '@testing-library/react';
import React from 'react';
import QuestionsAnswers from '../../client/src/components/questions-answers-module/questionsAnswers.jsx';

describe('QuestionsAnswers', () => {
   test('renders questions & answers components', () => {
      render(<QuestionsAnswers />);
   });
});
