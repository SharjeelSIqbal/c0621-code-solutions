import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      close: true,
      clicked: ''
    };
    this.openClose = this.openClose.bind(this);
  }

  openClose(e) {
    const clickedElement = e.target.getAttribute('data-view');
    if (this.state.open === false) {
      this.setState({ open: true, clicked: clickedElement });
    } if (this.state.open === true && clickedElement !== this.state.clicked) {
      this.setState({ clicked: clickedElement });
    } if (this.state.open === true && clickedElement === this.state.clicked) {
      this.setState({ open: false });
    }
  }

  render() {
    let hiddenShown;
    const elements = this.props.dataView.map(element => {
      if (element.key === this.state.clicked && this.state.open) {
        hiddenShown = 'hidden shown';
      } else {
        hiddenShown = 'hidden';
      }
      return (
        <div onClick={this.openClose} key={element.key} className="border-data-views col-full title-tab">
          <h1 data-view={element.key}>{element.title}</h1>
          <p className={hiddenShown}> {element.text}</p>
          {/* { element.key === this.state.clicked && this.state.open &&
              hiddenShown = 'hidden shown'
          } */}
       </div>
      );
    });
    return (
    <div className="container col-full border-top">
      {elements}
    </div>
    );
  }
}

export default Accordion;
