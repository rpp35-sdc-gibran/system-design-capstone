import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import 'regenerator-runtime/runtime'
import ReviewTile from '../../client/src/components/ratings&reviews/reviews/ReviewTile.jsx';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders single reviewsTile", async () => {
  const fakeReviewTile =
    {
      "review_id": 1254280,
      "rating": 5,
      "summary": "This product was great!",
      "recommend": true,
      "response": "",
      "body": "I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.",
      "date": "2019-01-01T00:00:00.000Z",
      "reviewer_name": "funtime",
      "helpfulness": 8,
      "photos": []
    }
  ;

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<ReviewTile review={fakeReviewTile} />, container);
  });

  expect(container.querySelector(".summary").textContent).toBe('This product was great!');
  expect(container.querySelector(".body").textContent).toBe('I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.');

  // remove the mock to ensure tests are completely isolated
  //global.fetch.mockRestore();
});