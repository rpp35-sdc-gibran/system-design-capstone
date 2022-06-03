import React, { useState, useEffect } from 'react';


const Characteristics = ({ characteristics }) => {

  return (
    <div className="chara-section">
      <div>Fit</div>
      <div  className="chara-box">
        <div>
          <progress className='characteristics big' value='0'></progress>
          <span>Too Small</span>
        </div>
        <div >
          <progress className='characteristics big' value='0'></progress>
          <span>Perfect</span>
        </div>
        <div>
          <progress className='characteristics big' value='0'></progress>
          <span>Too large</span>
        </div>
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
      </div>

      <div>Comfort</div>
      <div className="chara-box" >
        <div >
          <progress className='characteristics small' value='0'></progress>
          <span>Poor</span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{"margin-bottom":"20px"}} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{"margin-bottom":"20px"}} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Perfect</span>
        </div>
      </div>

      <div>Quality</div>
      <div className="chara-box" >
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Poor</span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{"margin-bottom":"20px"}} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span style={{"margin-bottom":"20px"}} ></span>
        </div>
        <div>
          <progress className='characteristics small' value='0'></progress>
          <span>Perfect</span>
        </div>
      </div>
    </div >
  )
}

export default Characteristics;