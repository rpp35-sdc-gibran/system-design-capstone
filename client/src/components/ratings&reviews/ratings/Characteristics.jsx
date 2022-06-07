import React, { useState, useEffect } from 'react';


const Characteristics = ({ characteristics }) => {
  const getPercentage = (key) => {

    return Math.round(((Number(characteristics[key].value) - 1) / 4 ) * 100);
  }
  console.log(getPercentage('Fit'))
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
        <span className='triangelicon' style={{ left: `${getPercentage('Fit')}%` }}>&#9660;</span>
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
        <span className='triangelicon' style={{ left: `${getPercentage('Length')}%` }}>&#9660;</span>
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
        <span className='triangelicon' style={{ left: `${getPercentage('Comfort')}%` }}>&#9660;</span>
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
        <span className='triangelicon' style={{ left: `${getPercentage('Quality')}%` }}>&#9660;</span>
      </div>
    </div >
  )
}

export default Characteristics;