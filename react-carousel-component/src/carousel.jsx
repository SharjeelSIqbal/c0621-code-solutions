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
    this.openPokeball = this.openPokeball.bind(this);
  }

  componentDidMount() {
    this.rotating = setInterval(this.next, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.rotating);
  }

  next(e) {
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
    if (e) {
      this.reset();
    }
  }

  prev(e) {
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
    if (e) {
      this.reset();
    }
  }

  openPokeball(e) {
    const counter = parseInt(e.target.getAttribute('value'));
    this.setState({ image: this.props.pokemon[counter].url, counter });
    this.reset();
  }

  reset() {
    clearInterval(this.rotating);
    this.rotating = setInterval(this.next, 3000);
  }

  render() {

    return (
    <>
    <div className="container padding">
      <div>

        <div className="row space-between col-100">
          <i onClick={this.prev} className="margin-arrows fas fa-chevron-left"></i>
          <div className="picture-container">
           <img className="col-100 " src={this.state.image} alt="" />
          </div>
          <i onClick={this.next} className="margin-arrows fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="row true-center col-100">
        {this.props.pokemon.map((element, index) => this.state.image === element.url
          ? <img key={element.url} src={'../images/icons8-open-pokeball-48.png'} />
          : <img key={element.url} onClick={this.openPokeball} value={index} src={'../images/icons8-pokeball-48.png'} />
        )
        }
        </div>

    </div>

    </>
    );
  }
}

export default Carousel;
