import React from 'react';
import './index.scss';
import Session from './Session';
import Break from './Break';

const Settings = ({breakUp,breakDown,breaks,sessionUp,sessionDown,session}) => (
  <div className="settings">
    <Break breakUp={breakUp} breakDown ={breakDown} breaks={breaks}   />
    <Session sessionUp={sessionUp} sessionDown={sessionDown} session={session}/>
  </div>
);

export default Settings;
