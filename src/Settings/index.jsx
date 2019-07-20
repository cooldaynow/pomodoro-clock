import React from "react";
import "./index.scss";
import Time from "./Time";

const Settings = ({
  breakUp,
  breakDown,
  breaks,
  sessionUp,
  sessionDown,
  session,
  timer
}) => (
  <div className="settings">
    <Time
      up={breakUp}
      down={breakDown}
      value={breaks}
      name="Break"
      timer={timer}
    />
    <Time
      up={sessionUp}
      down={sessionDown}
      value={session}
      name="Session"
      timer={timer}
    />
  </div>
);

export default Settings;
