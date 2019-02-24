import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: '',
      list: []
    };

    this.holder = [];
    this.handleChange = this.handleChange.bind(this);
    this.removeMe = this.removeMe.bind(this);
    this.fifteenTimer = this.fifteenTimer.bind(this);
    this.thirtyTimer = this.thirtyTimer.bind(this);
    this.ticker = this.ticker.bind(this);
  }

  handleChange(event) {
    this.setState({
      timer: event.target.value
    })
  }

  removeMe(event) {
    for (let x = 0; x <= this.holder.length - 1; x++) {
      if (this.holder[x].name === event) {
        this.holder.splice(x, 1);
      }
    }
    this.setState({
      list: this.holder
    })
  }

  ticker() {
    for (let x = 0; x <= this.holder.length - 1; x++) {
      if (this.holder[x].time === 0 || this.holder[x].time === 'Done') {
        this.holder[x].time = 'Done'
      } else {
        this.holder[x].time = this.holder[x].time - 1
      }
    }
    this.setState({
      list: this.holder
    })
  }

  componentWillMount() {
    setInterval(this.ticker, 1000);
  }

  fifteenTimer(event) {
    event.preventDefault();
    if (this.state.timer.length > 0) {
      let timer = {
        name: this.state.timer,
        time: 15
      }
      this.holder.unshift(timer);
      this.setState({
        list: this.holder,
        timer: ''
      })
    } else {
      alert('Sorry Friend!')
    }
    
  }

  thirtyTimer(event) {
    event.preventDefault();
    if (this.state.timer.length > 0) {
      let timer = {
        name: this.state.timer,
        time: 30
      }
      this.holder.unshift(timer);
      this.setState({
        list: this.holder,
        timer: ''
      }) 
    } else {
      alert('Sorry Friend!')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Name:
              <input type="text" value={this.state.timer} onChange={this.handleChange} />
            </label>
            <a href="#" className="click-me" onClick={this.fifteenTimer}>15s</a>
            <a href="#" className="click-me" onClick={this.thirtyTimer}>30s</a>
          </form>
        </header>
        <Timer timers={this.state.list} removeMe={this.removeMe}/>
      </div>
    );
  }
}

export default App;
