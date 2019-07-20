import React from 'react';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faSync} from '@fortawesome/free-solid-svg-icons';
const Control = ({enableTimer, pause, reset}) => (
  <div className="control">
    <button className="buttons" onClick={enableTimer}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
    <button className="buttons" onClick={pause}>
      <FontAwesomeIcon icon={faPause} />
    </button>
    <button className="buttons" onClick={reset}>
      <FontAwesomeIcon icon={faSync} />
    </button>
  </div>
);

export default Control;
