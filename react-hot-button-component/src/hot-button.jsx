import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = {
      color: 'ice-age',
      name: 'Ice'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.count < 3) {
      this.setState({ color: 'ice-age' }, () => {
        this.count += 1;
      });
    } else if (this.count < 6) {
      this.setState({ color: 'cold', name: 'Cold' }, () => {
        this.count += 1;
      });
    } else if (this.count < 9) {
      this.setState({ color: 'room-temperature', name: 'Room Temp' }, () => {
        this.count += 1;
      });
    } else if (this.count < 12) {
      this.setState({ color: 'warm', name: 'Warm' }, () => {
        this.count += 1;
      });
    } else if (this.count < 15) {
      this.setState({ color: 'hot', name: 'Boiling' }, () => {
        this.count += 1;
      });
    } else {
      this.setState({ color: 'nuclear-fall-out', name: 'Death' });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.color}>{this.state.name}</button>
    );
  }

}

export default HotButton;
