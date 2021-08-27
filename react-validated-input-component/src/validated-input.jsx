import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      short: false,
      none: true,
      both: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    this.setState({ value: e.target.value }, () => {
      const value = this.state.value;
      if (value.length >= 0) {
        this.setState({ short: true, none: false, both: true });
      }
      if (value.length >= 8) {
        this.setState({ short: false, both: false });

      }
      if (value.length === 0) {
        this.setState({ none: true, both: true });
      }
    });

  }

  render() {
    return (
      <form className="full">
        <div className="col">
        {this.state.both && <input className="input incorrect" onChange={this.handleChange} type="password" value={this.state.value} /> }
        { !this.state.both &&
        <input className="input correct" onChange={this.handleChange} type="password" value={this.state.value} />
        }
          {this.state.none && <p>A password is required</p>}
          {this.state.short && !this.state.none &&
            <p> Your password is too short!</p>
          }
          {this.state.both && <i className="fas fa-times-circle awesome i-incorrect"></i>}
          {!this.state.both && <i className="fas fa-check-circle awesome i-correct"></i> }
        </div>
      </form>
    );
  }
}

export default ValidatedInput;
