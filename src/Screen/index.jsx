import React from 'react';
import './index.scss';

const Screen = ({screen, mins, secs}) => (
  <div className="screen">
    <h2> {screen}</h2>
    <div className="timer">
      <p>
        {`${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`}
      </p>
    </div>
  </div>
);

export default Screen;
