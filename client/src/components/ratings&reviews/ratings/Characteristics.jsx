import React, { useState, useEffect } from 'react';


const Characteristics = ({ characteristics }) => {

  return (
    <div>
      <h5>characteristics</h5>
      <div>Fit</div>
      <div>
        <progress className='characteristics big' value='0'></progress>
        <progress className='characteristics big' value='0'></progress>
        <progress className='characteristics big' value='0'></progress>
      </div>
      <div className='characteristics'>
        <span className='chara'>Too Small</span><span className='chara'>Perfect</span><span className='chara'>Too large</span>
      </div>
      <div>Length</div>
      <div>
      <progress className='characteristics big' value='0'></progress>
      <progress className='characteristics big' value='0'></progress>
      <progress className='characteristics big' value='0'></progress>
      </div>
      <div className='characteristics'>
        <span className='chara'>Too Small</span><span className='chara'>Perfect</span><span className='chara'>Too large</span>
      </div>
      <div>Comfort</div>
      <div>
      <progress className='characteristics small' value='0'></progress>
      <progress className='characteristics small' value='0'></progress>
      <progress className='characteristics small' value='0'></progress>
      <progress className='characteristics small' value='0'></progress>
      </div>
      <div className='characteristics'>
        <span className='chara small'>Poor</span><span className='chara small'>Perfect</span>
      </div>
      <div>Quality</div>
      <div>
      <progress className='characteristics small' value='0'></progress>
      <progress className='characteristics small' value='0'></progress>
      <progress className='characteristics small ' value='0'></progress>
      <progress className='characteristics small' value='0'></progress>
      </div>
      <div className='characteristics'>
        <span className='chara small'>Poor</span><span className='chara small'>Perfect</span>
      </div>


    </div >
  )
}

export default Characteristics;