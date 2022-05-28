//HOC to track all clicks throughout app
import { useRef } from 'react'; //TODO implemnt useRef within the HOC

const WithAnalytics = (WrappedComponent) => {
   //return a new component that adds on click to given component
   const Wrapper = (props) => {
      //  const currentElement = useRef();

      const handleAnalyticsClick = (event) => {
         ////  const element = currentElement.current;
         // console.log('WrappedComponent:', WrappedComponent);
         // console.log('target element:', event.target);
         // console.log(Date().toLocaleString());
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
