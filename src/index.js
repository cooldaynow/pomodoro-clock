import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PomodoroClock from './Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PomodoroClock />, document.getElementById('root'));
serviceWorker.register();
