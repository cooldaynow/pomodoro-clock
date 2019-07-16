import React from 'react';
import './index.scss';

const Session = ({sessionUp, sessionDown, session}) => (
  <div className="time">
    <h2>Session Length </h2>
    <div className="arrows">
      <div className="down" onClick={sessionDown} />
      {session}
      <div className="up" onClick={sessionUp} />
    </div>
  </div>
);

export default Session;
