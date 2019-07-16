import React from 'react';
import './index.scss';

const Control = ({enableTimer, pause, reset}) => (
  <div className="control">
    <div className="play" onClick={enableTimer} />
    <div className="pause" onClick={pause} />
    <div className="reset" onClick={reset} />
  </div>
);

export default Control;
