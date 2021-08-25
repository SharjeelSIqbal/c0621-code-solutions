import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      time: 0
    };
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  start() {
    this.setState({ pressed: true, time: 0 }, () => {
      const timer = setInterval(() => {
        if (this.state.pressed === true) {
          this.tick();
        } else {
          clearInterval(timer);
        }
      }, 1000);
    });
  }

  stop() {
    this.setState({ pressed: false });
  }

  render() {
    if (this.state.pressed === false) {
      return (
        <div>
       <div className="row">
        <div className="circle row full">
          <h1>{this.state.time}</h1>
        </div>
      </div>
        <div className="row full">
          <i onClick={this.start} className="fas fa-pause"></i>
      </div>
    </div>
      );
    } else {

      return (
        <div>
        <div className="row">
          <div className="circle row full">
            <h1>{this.state.time}</h1>
          </div>
        </div>
        <div className="row full">
          <i onClick={this.stop}className="fas fa-play"></i>
        </div>
      </div>
      );
    }
  }
}

export default Stopwatch;
