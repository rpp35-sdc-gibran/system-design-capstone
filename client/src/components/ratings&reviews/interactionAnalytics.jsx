import axios from 'axios';
import { useRef } from 'react'; //TODO implemnt useRef within the HOC

let InteractionAnalytics = (Component) => {
   let Wrapper = (props) => {
      // create function to post interaction event data to api
      let handleInteraction = (event) => {
         let data = {
            element: event.target.outerHTML,
            widget: 'ReviewsAndRatings',
            time: Date().toLocaleString(),
         };

         // make axios request to interactions api
         axios
            .post(`${__API__}/reviews/interactions`, {
               interaction: data,
            })
            .then((results) => {
               console.log('SUCCESS posting to interation api: ', data);
            })
            .catch((error) => {
               console.log('ERROR posting to interation api: ', data);
            });
      };
      return (
         <div
            onClick={(event) => {
               handleInteraction(event);
            }}
         >
            <Component {...props} />
         </div>
      );
   };
   return Wrapper;
};

export default InteractionAnalytics;
