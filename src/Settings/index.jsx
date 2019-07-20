import React from 'react';
import './index.scss';
import Time from './Time';

const Settings = ({breakUp,breakDown,breaks,sessionUp,sessionDown,session}) => (
  <div className="settings">
    <Time up={breakUp} down={breakDown} value={breaks} name = 'Break' />
    <Time up={sessionUp} down={sessionDown} value={session} name = 'Session'/>
  </div>
);

export default Settings;
