import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: this.state.email });
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });

  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Email</label>
      <input onChange= {this.handleChange} value={this.state.email}></input>
      <button type="submit">Sign Up</button>
    </form>
    );
  }
}

ReactDOM.render(<NewsLetterForm />, document.getElementById('root'));
