import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'regenerator-runtime/runtime';
import axios from 'axios';
import QuestionsAnswers from './questionsAnswers.jsx';

// set productID
let productID = 71697;

// get product info
let productInfo = {
   default_price: '140.00',
   description: 'This is a test description',
   features: [{ feature: 'fabric', value: 'canvas' }],
   id: 71697,
   name: 'Camo onesie',
   slogan: 'blend into the crowd',
};

// get question list
let questionList = {
   "product_id": "71697",
   "results": [
     {
       "question_id": 641727,
       "question_body": "Would this work well for deer hunting? ",
       "question_date": "2022-06-09T00:00:00.000Z",
       "asker_name": "Tyler93",
       "question_helpfulness": 3,
       "reported": false,
       "answers": {
         "5986024": {
           "id": 5986024,
           "body": "I hide in the woods all the time in my camo onesie and no one has ever noticed me!",
           "date": "2022-06-09T00:00:00.000Z",
           "answerer_name": "sneakyPete",
           "helpfulness": 2,
           "photos": []
         },
         "5986042": {
           "id": 5986042,
           "body": "Works perfect!",
           "date": "2022-06-11T00:00:00.000Z",
           "answerer_name": "jack543!",
           "helpfulness": 0,
           "photos": []
         },
         "5986043": {
           "id": 5986043,
           "body": "So well!",
           "date": "2022-06-12T00:00:00.000Z",
           "answerer_name": "jack543!",
           "helpfulness": 0,
           "photos": []
         },
         "5986044": {
           "id": 5986044,
           "body": "so awesome!",
           "date": "2022-06-12T00:00:00.000Z",
           "answerer_name": "jack543!",
           "helpfulness": 0,
           "photos": []
         }
       }
     },
     {
       "question_id": 641722,
       "question_body": "Why did you like the product or not?",
       "question_date": "2022-06-07T00:00:00.000Z",
       "asker_name": "Example: jackson11!",
       "question_helpfulness": 2,
       "reported": false,
       "answers": {
         "5986022": {
           "id": 5986022,
           "body": "People can't see me coming in my new camo onesie!!",
           "date": "2022-06-09T00:00:00.000Z",
           "answerer_name": "seakySam",
           "helpfulness": 1,
           "photos": []
         }
       }
     },
     {
       "question_id": 641733,
       "question_body": "Why did you like the product or not?",
       "question_date": "2022-06-14T00:00:00.000Z",
       "asker_name": "Tyler",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {}
     },
     {
       "question_id": 641731,
       "question_body": "as",
       "question_date": "2022-06-10T00:00:00.000Z",
       "asker_name": "s",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {}
     },
     {
       "question_id": 641726,
       "question_body": "Why did you like the product or not?",
       "question_date": "2022-06-09T00:00:00.000Z",
       "asker_name": "Example: jackson11!",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {}
     },
     {
       "question_id": 641725,
       "question_body": "Is this product eco-friendly? ",
       "question_date": "2022-06-09T00:00:00.000Z",
       "asker_name": "SamualJackson",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {
         "5986031": {
           "id": 5986031,
           "body": "Yes, it's made of sustainable plastic bottles from the ocean!!",
           "date": "2022-06-10T00:00:00.000Z",
           "answerer_name": "EarthChild",
           "helpfulness": 0,
           "photos": []
         }
       }
     },
     {
       "question_id": 641724,
       "question_body": "Why did you like the product or not?",
       "question_date": "2022-06-09T00:00:00.000Z",
       "asker_name": "jackson11!",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {}
     },
     {
       "question_id": 641659,
       "question_body": "Where is it manufactured?",
       "question_date": "2022-06-03T00:00:00.000Z",
       "asker_name": "user",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {
         "5985912": {
           "id": 5985912,
           "body": "China",
           "date": "2022-06-03T00:00:00.000Z",
           "answerer_name": "Jack",
           "helpfulness": 0,
           "photos": []
         },
         "5986021": {
           "id": 5986021,
           "body": "They say it's made in the USA but the tag say China....",
           "date": "2022-06-09T00:00:00.000Z",
           "answerer_name": "peterPan",
           "helpfulness": 1,
           "photos": []
         },
         "5986035": {
           "id": 5986035,
           "body": "Made in China",
           "date": "2022-06-10T00:00:00.000Z",
           "answerer_name": "jack543!",
           "helpfulness": 1,
           "photos": []
         }
       }
     },
     {
       "question_id": 641655,
       "question_body": "Why did you like the product or not?",
       "question_date": "2022-06-02T00:00:00.000Z",
       "asker_name": "Example: jackson11!",
       "question_helpfulness": 0,
       "reported": false,
       "answers": {
         "5985951": {
           "id": 5985951,
           "body": "Apple sauce",
           "date": "2022-06-03T00:00:00.000Z",
           "answerer_name": "Example: jack543!",
           "helpfulness": 1,
           "photos": []
         }
       }
     }
   ]
 };

// set up sever for unit testing
const server = setupServer(
  rest.get('/questionsAnswers/question/:question_id', (req, res, ctx) => {
   return res(ctx.json(questionList));
  }),
  rest.get('/questionsAnswers/productInfo/:product_id', (req, res, ctx) => {
    return res(ctx.json(productInfo));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('QuestionsAnswers', () => {
   test('renders questions & answers components', () => {
      render(<QuestionsAnswers />);
   });
});
