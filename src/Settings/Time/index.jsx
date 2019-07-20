import React from 'react';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Time = ({down, up, value, name}) => (
  <div className="time">
    <h2>{name} Length </h2>
    <div className="arrows">
      <button className="buttons" onClick={down}>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <span className="values"> {value} </span>
      <button className="buttons" onClick={up}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  </div>
);
export default Time;
