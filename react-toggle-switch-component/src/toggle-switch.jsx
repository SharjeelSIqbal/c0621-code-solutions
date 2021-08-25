import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleSwitchOn = this.toggleSwitchOn.bind(this);
    this.toggleSwitchOff = this.toggleSwitchOff.bind(this);
  }

  toggleSwitchOn() {
    this.setState({ toggle: true });
  }

  toggleSwitchOff() {
    this.setState({ toggle: false });
  }

  render() {

    if (this.state.toggle === false) {
      return (
        <div className="row">
        <button type="checkbox" className="off" onClick={this.toggleSwitchOn}>
          <div className="circle button-on"></div>
          </button>
          <h3>OFF</h3>
        </div>
      );
    }
    return (
      <div className="row">
        <button type="checkbox" onClick={this.toggleSwitchOff} className="on">
          <div className="circle button-off"></div>
        </button>
        <h3>ON</h3>
      </div>
    );
  }
}

export default ToggleSwitch;
