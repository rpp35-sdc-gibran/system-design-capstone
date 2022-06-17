# Front End Capstone

An ecommerce application built with React to showcase a simple, modern and easy to navigate user interface.
Includes common retail shopping features such as search, browse, add to cart, create reviews, ask product questions and checkout. Interacts with Atelier API to obtain product data, styles, related items, questions, and reviews.

## Features & Usage

-  Components are lazy loaded and not rendered until they enter viewport to improve optimization
-  View different products and navigate to individual product pages by clicking on product name on home page
-  Toggle between different styles for each product by clicking on individual style image
-  Click on main image to view image in an expanded view mode
-  Once in expanded view mode, click image again to zoom into specific area of image, and watch image move around as you drag your cursor
-  Choose size and quantity from drop down menus then submit the form to sent request to server to add the item to the users cart

## Demo

![](diagrams/home-page.gif)
![](diagrams/product-overview.gif)
![](diagrams/related-items.gif)
![](diagrams/Q&A_main.gif)
![](diagrams/Q&A_modal.gif)
![](diagrams/showMoreReview.gif)
![](diagrams/reviewSearch.gif)
![](diagrams/addNewReview.gif)

## Tech Stack

This project was built with the following technologies:

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />

## Setup/ Installation

-  Clone this repository and navigate to project directory in the terminal
-  Install necessary dependencies:

```bash
npm install
```

-  Obtain [Github](https://github.com/) API key and then create .env file (view sample.env in root directory for template):

```env
GITHUB_API_TOKEN=enter-api-token-here

```

-If using dev server, change NODE_ENV in .env to:

```env
NODE_ENV=development

```

Otherwise, set NODE_ENV like so for production:

```env
NODE_ENV=production

```

-  Then, if environment is set to development, run the application like so:

```bash
npm run dev
```

This opens a development server in your local browser at port 3000.

-  When application is ready for production, have webpack build your bundle and minimize your files:

```bash
npm start
```

Then navigate to port 8080 in your browser to view your application.

If you are seeing errors with your node.js server, try killing all nodemon servers:

```bash
pkill -f nodemon
```

-Run unit tests with Jest/React Testing Library:

```bash
npm test
```

-Then run end to end tests with Cypress:

```bash
npm run cypress
```

## Collaborators

-  [Cristian Ordonez](https://github.com/cristianordonez)
-  [Tyler Nourse](https://github.com/Nourse41)
-  [Shengnan Huang](https://github.com/maomaotuo)

## Resources

-  [Original group repository](https://github.com/rpp35-fec-http/fec-capstone)
-  [React code-splitting](https://reactjs.org/docs/code-splitting.html)
-  [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-  [Material UI](https://mui.com/)
-  [SVG Animations](https://css-tricks.com/guide-svg-animations-smil/)
-  [Creating .env files](https://github.com/motdotla/dotenv)
-  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-  [Webpack Development/Production Configurations](https://webpack.js.org/configuration/mode/)
-  [HTML Webpack Plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
-  [Jest](https://jestjs.io/docs/getting-started)
-  [Express Compression Middleware](http://expressjs.com/en/resources/middleware/compression.html)
-  [Cypress](https://go.cypress.io/get-started?utm_adgroup=132501525000&utm_keyword=cypress&utm_source=google&utm_medium=cpc&utm_campaign=15312994475&utm_term=cypress&hsa_acc=8898574980&hsa_cam=15312994475&hsa_grp=132501525000&hsa_ad=562694869893&hsa_src=g&hsa_tgt=kwd-40454352&hsa_kw=cypress&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwtIaVBhBkEiwAsr7-cxp_LMnmsukoi5fL7cCTNGQj5cTxhBWUQWoM3FhUPh6EeIGzCC6_EBoCpREQAvD_BwE)
