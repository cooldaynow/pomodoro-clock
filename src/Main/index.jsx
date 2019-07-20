import React, {Component} from 'react';
import './index.scss';
import audio from '../audio/alarm.mp3';
import Header from '../Header';
import Settings from '../Settings';
import Screen from '../Screen';
import Control from '../Control';
import Author from '../Author';

class PomodoroClock extends Component {
  state = {
    session: 25,
    mins: 25,
    secs: 0,
    breaks: 5,
    timer: true,
    change: false,
    screen: 'Session',
  };
  sessionUp = () => {
    if (this.state.timer) {
      let mins = this.state.mins;
      if (mins < 60) {
        mins++;
      }
      this.setState(state => ({
        mins,
        session: mins,
        secs: 0,
      }));
    }
  };
  sessionDown = () => {
    if (this.state.timer) {
      let mins = this.state.mins;
      if (mins > 1) {
        mins--;
      }
      this.setState(state => ({
        session: state.mins === 1 ? state.mins : mins,
        mins,
        secs: 0,
      }));
    }
  };
  breakUp = () => {
    if (this.state.timer) {
      if (this.state.breaks < 15) {
        this.setState(state => state.breaks++);
      }
    }
  };
  breakDown = () => {
    if (this.state.timer) {
      this.setState(state =>
        state.breaks === 1 ? state.breaks : state.breaks--,
      );
    }
  };
  enableTimer = () => {
    let {mins, secs, breaks, session, screen, change} = this.state;
    if (this.state.timer) {
      this.timerId = setInterval(() => {
        //конец сессии/перерыва
        if (mins === 0 && secs === 0) {
          change = !this.state.change;
          mins = change ? breaks : session;
          screen = change ? 'Break' : 'Session';
          this.playAlarm();
        } else {
          //прошла минута
          if (secs === 0) {
            mins--;
            secs = 59;
          } else {
            secs--;
          }
        }
        this.setState({mins, secs, screen, change});
      }, 1000);
      this.setState({timer: false});
    }
  };
  pause = () => {
    clearInterval(this.timerId);
    this.setState({timer: true});
  };
  reset = () => {
    clearInterval(this.timerId);
    this.setState({timer: true, session: 25, breaks: 5, mins: 25, secs: 0});
  };

  playAlarm = () => {
    this.audio.play();
    setTimeout(() => {
      this.audio.pause();
      this.audio.currentTime = 0;
    }, 2000);
  };
  render() {
    return (
      <div className="container">
        <audio ref={ref => (this.audio = ref)} src={audio} />
        <div className="wrap__pomodoro">
          <Header />
          <Settings
            sessionUp={this.sessionUp}
            sessionDown={this.sessionDown}
            session={this.state.session}
            breakUp={this.breakUp}
            breakDown={this.breakDown}
            breaks={this.state.breaks}
          />
          <Screen
            screen={this.state.screen}
            mins={this.state.mins}
            secs={this.state.secs}
          />
          <Control
            enableTimer={this.enableTimer}
            pause={this.pause}
            reset={this.reset}
          />
          <Author />
        </div>
      </div>
    );
  }
}

export default PomodoroClock;
