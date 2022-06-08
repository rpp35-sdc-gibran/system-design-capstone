import axios from 'axios';

// let OldInteractionAnalytics = (Component) => {
//   let Wrapper = (props) => {
//     // create function to post interaction event data to api
//     let handleInteraction = (event) => {
//       let data = {
//         element: event.target.outerHTML,
//         widget: 'QuestionsAnswers',
//         time: Date().toLocaleString()
//       }

//       // make axios request to interactions api
//       axios.post('/api/questionsAnswers/interactions',{
//         interaction: data
//         })
//         .then((results) => {
//           console.log('SUCCESS posting to interation api: ', data);
//         })
//         .catch((error) => {
//           console.log('ERROR posting to interation api: ', data);
//         })
//     };
//     return (
//       <div onClick={(event) => {
//         handleInteraction(event)
//       }}>
//         <Component {...props}/>
//       </div>
//     )
//   };
//   return Wrapper;
// };

let handleInteraction = (event) => {
  let data = {
    element: event.target.outerHTML,
    widget: 'QuestionsAnswers',
    time: Date().toLocaleString()
  }

  // make axios request to interactions api
  axios.post('/api/questionsAnswers/interactions',{
    interaction: data
    })
    .then((results) => {
      console.log('SUCCESS posting to interation api: ', data);
    })
    .catch((error) => {
      console.log('ERROR posting to interation api: ', data);
    })
};

export default handleInteraction;
