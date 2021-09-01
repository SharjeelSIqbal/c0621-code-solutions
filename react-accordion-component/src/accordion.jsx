import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: ''
    };
    this.openClose = this.openClose.bind(this);
  }

  openClose(e) {
    const clickedElement = e.target.getAttribute('data-view');
    if (this.state.clicked === '') {
      this.setState({ clicked: clickedElement });
    } else if (this.state.clicked === clickedElement) {
      this.setState({ clicked: '' });
    } else if (this.state.clicked !== clickedElement) {
      this.setState({ clicked: clickedElement });
    }
  }

  render() {
    let hiddenShown;
    const elements = this.props.dataView.map(element => {
      if (element.key === this.state.clicked) {
        hiddenShown = 'hidden shown';
      } else {
        hiddenShown = 'hidden';
      }
      return (
        <div onClick={this.openClose} key={element.key} className="border-data-views col-full title-tab">
          <h1 data-view={element.key}>{element.title}</h1>
          <p className={hiddenShown}> {element.text}</p>
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
