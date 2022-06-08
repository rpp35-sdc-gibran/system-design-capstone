//HOC to track all clicks throughout app
import axios from 'axios';

const WithAnalytics = (WrappedComponent) => {
   //return a new component that adds on click to given component
   const Wrapper = (props) => {
      //  const currentElement = useRef();

      const handleAnalyticsClick = (event) => {
         let parameters = {
            widget: WrappedComponent.name,
            element: event.target.innerHTML,
            time: Date().toLocaleString(),
         };
         let promise = axios.post('api/interactions', parameters);

         promise.catch((err) => {
            console.log('err:', err);
         });
      };
      return (
         <div onClick={handleAnalyticsClick}>
            <WrappedComponent {...props} />
         </div>
      );
   };
   return Wrapper;
};

export default WithAnalytics;
