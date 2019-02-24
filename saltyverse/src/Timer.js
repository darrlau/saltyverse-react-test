import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    if (this.props.timers.length > 0) {
      return (
        <ul>
        {this.props.timers.map((item) => 
          <li key={item.name} onClick={() => {this.props.removeMe(item.name)}}>
            <div className={`timerbox box-${item.time}`}>
              <p>{item.name}</p>
              <p>{item.time}</p>
            </div>    
          </li>
        )}
        </ul>
      )
    } else {
      return (
        <p>No timers yet!</p>
      )
    }
  }
}