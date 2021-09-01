import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count < 3) {
      return <button onClick={this.handleClick} className="ice-age">Hot Button</button>;
    } else if (this.state.count < 6) {
      return <button onClick={this.handleClick} className="cold">Hot Button</button>;
    } else if (this.state.count < 9) {
      return <button onClick={this.handleClick} className="room-temperature">Hot Button</button>;
    } else if (this.state.count < 12) {
      return <button onClick={this.handleClick} className="warm">Hot Button</button>;
    } else if (this.state.count < 15) {
      return <button onClick={this.handleClick} className="hot">Hot Button</button>;
    } else {
      return <button className="nuclear-fall-out">Hot Button</button>;
    }
  }
}

export default HotButton;
