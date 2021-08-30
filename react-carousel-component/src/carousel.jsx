import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      image: this.props.pokemon[0].url
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.counter < this.props.pokemon.length) {
      this.setState({ counter: this.state.counter + 1 }, () => {
        if (this.state.counter === this.props.pokemon.length) {
          this.setState({ counter: 0 }, () => {
            this.setState({ image: this.props.pokemon[this.state.counter].url });
          });
        } else {
          this.setState({ image: this.props.pokemon[this.state.counter].url });
        }
      });
    }
  }

  prev() {
    if (this.state.counter >= 0) {
      this.setState({ counter: this.state.counter - 1 }, () => {
        if (this.state.counter === -1) {
          this.setState({ counter: this.props.pokemon.length - 1 }, () => {
            this.setState({ image: this.props.pokemon[this.state.counter].url });
          });
        } else {
          this.setState({ image: this.props.pokemon[this.state.counter].url });
        }
      });
    }
  }

  render() {

    // const rotatidng = setInterval(this.next, 3000);

    return (<div className="row true-center">
      <div className="container row space-between">
        <i className="fas fa-chevron-left"></i>
      <img className="col-80" src={this.state.image} alt="" />
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>);
  }
}

export default Carousel;
