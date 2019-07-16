import React from 'react';
import './index.scss';

const Break = ({breakUp, breakDown, breaks}) => (
  <div className="break">
    <h2>Break Length </h2>
    <div className="arrows">
      <div className="down" onClick={breakDown} />
      {breaks}
      <div className="up" onClick={breakUp} />
    </div>
  </div>
);

export default Break;
