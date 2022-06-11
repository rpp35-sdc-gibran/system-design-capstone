import React, { useState, useEffect } from 'react';


const Characteristics = ({ characteristics }) => {
  const getTriangleIcon = (key) => {
    if(characteristics[key].value){
      let percentage = Math.round(((Number(characteristics[key].value) - 1) / 4 ) * 100);
    return (
      <span className='triangelicon' style={{ 'left': `${percentage}%`}}>&#9660;</span>
    )
    } else {
      return <></>;
    }
  }
  return (
    <div className="chara-section">
      <div>Fit</div>
      <div className="chara-box">
        <div className='progressbar'>
          <progress className='characteristics big' value='0'></progress>
          <span>Too Small</span>
        </div>
        <div className='progressbar'>
          <progress className='characteristics big' value='0'></progress>
          <span>Perfect</span>
        </div>
        <div className='progressbar'>
          <progress className='characteristics big' value='0'></progress>
          <span>Too large</span>
        </div>
        {getTriangleIcon('Fit')}
      </div>
      <div>Length</div>
      <div className="chara-box">
        <div>
          <progress className='characteristics big' value='0'></progress>
          <span>Too Small</span>
        </div>
        <div>
          <progress className='characteristics big' value='0'></progress>
          <span>Perfect</span>
        </div>
        <div>
          <progress className='characteristics big' value='0'></progress>
          <span>Too large</span>
        </div>
        {getTriangleIcon('Length')}
      </div>

      <div>Comfort</div>
      <div className="chara-box" >
        <div >
          <progress className='characteristics small' value='0'></progress>
          <span>Poor</span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{ "marginBottom": "20px" }} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{ "marginBottom": "20px" }} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Perfect</span>
        </div>
        {getTriangleIcon('Comfort')}
      </div>

      <div>Quality</div>
      <div className="chara-box" >
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Poor</span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{ "marginBottom": "20px" }} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{ "marginBottom": "20px" }} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Perfect</span>
        </div>
       {getTriangleIcon('Quality')}
      </div>
    </div >
  )
}

export default Characteristics;