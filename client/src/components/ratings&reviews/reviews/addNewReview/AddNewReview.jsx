import React, { useState, useEffect, useReducer, useMemo } from 'react';
import axios from 'axios';
import './addNewReview.css'
// params: {
//   product_id: req.params.product_id,
//   rating: req.params.rating,
//   summary: req.params.summary,
//   body: req.params.body,
//   recommend: req.params.recommend,
//   name: req.params.name,
//   email: req.params.email,
//   photos: req.params.photos,
//   characteristics: req.params.characteristics,
// },
const AddNewReview = (props) => {
  const [newReview, setNewReview] = useState({});
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [explainRating, SetExplainRating] = useState(false);
  const [selectedRadioBtn, SetSelectedRadioBtn] = useState('Yes');
  const [characteristics, SetCharacteristcs] = useState({});
  const [reviewSummary, SetReviewSummary] = useState('');
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    setNewReview({ ...newReview, rating: index })
    SetExplainRating(true);
  };
  const handleNewReviewSubmit = (e) => {
    e.preventDefault();
    props.setTrigger(false)
  }
  const handelSize = (e) => { SetCharacteristcs({ ...characteristics, size: e.target.value }) }
  const handelWidth = (e) => { SetCharacteristcs({ ...characteristics, width: e.target.value }) }
  const handelComfort = (e) => { SetCharacteristcs({ ...characteristics, Comfort: e.target.value }) }
  const handelQuality = (e) => { SetCharacteristcs({ ...characteristics, Quality: e.target.value }) }
  const handelLength = (e) => { SetCharacteristcs({ ...characteristics, Length: e.target.value }) }
  const handleFit = (e) => { SetCharacteristcs({ ...characteristics, Fit: e.target.value }) }

const handleRecommend = (e) => {
    console.log(e.target.value)
    SetSelectedRadioBtn(e.target.value);
    (e.target.value === 'Yes') ? setNewReview({ ...newReview, recommend: true }) : setNewReview({ ...newReview, recommend: false });
    console.log(newReview)
  }
  const handleReviewSummary = (e) => {
    SetReviewSummary(e.target.value);
    setNewReview({ ...newReview, summary: e.target.value})
  }
  const ratingRef = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  return (props.trigger) ? (
    <div className='popupform'>
      <div className='popupform-inner'>
        {props.children}
        <form onSubmit={handleNewReviewSubmit}>
          <label>
            Overall rating (mandatory):
            <div className="box flex">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <RatingIcon
                    key={index}
                    index={index}
                    rating={rating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating} />
                )
              })}
              {explainRating ? <span>{ratingRef[rating - 1]}</span> : <></>}
            </div>
          </label>
          <label>
            Do you recommend this product? (mandatory)
            <div >
              <input type="radio" value="Yes" name="recommend" onChange={handleRecommend} checked={selectedRadioBtn === 'Yes'} /> Yes
              <input type="radio" value="No" name="recommend" onChange={handleRecommend} checked={selectedRadioBtn === 'No'} /> No
            </div>
          </label>
          <label>
            Size
            <Characteristics handleChara={handelSize} name='Size' meanings={['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']} />
          </label>
          <label>
            Width
            <Characteristics handleChara={handelWidth} name='Width' meanings={['Too narrow', 'Slightly narrow', 'Ok', 'Slightly wide', 'Too wide']} />
          </label>
          <label>
            Comfort
            <Characteristics handleChara={handelComfort} name='Comfort' meanings={['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']} />
          </label>
          <label>
          Quality
            <Characteristics handleChara={handelQuality} name='Quality' meanings={['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']} />
          </label>
          <label>
          Length
            <Characteristics handleChara={handelLength} name='Length' meanings={['Runs slightly short', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']} />
          </label>
          <label>
          Fit
            <Characteristics handleChara={handleFit} name='Fit' meanings={['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']} />
          </label>
          <label>
          Review summary
          <div><textarea value={reviewSummary} onChange={handleReviewSummary} /></div>
        </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    </div>) : '';
}

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow';
    } else if (!hoverRating && rating >= index) {
      return 'yellow';
    }
    return 'none';
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}>
      <StarIcon fill={fill} />
    </div>
  )
}
function StarIcon(props) {
  const { fill = 'none' } = props;
  return (
    <svg className="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
  );
}
function Characteristics({ meanings, handleChara }) {

  return (
    <div className="section-box">
      {meanings.map((meaning, index, name) => (
        <div className='characteristic-box'>
          <span><input className='rateChara' type="radio" value={index + 1} name={name} onChange={handleChara} /></span>
          <span className='explainChara'>{meaning}</span>
        </div>
      ))}
    </div>
  )
}
export default AddNewReview;