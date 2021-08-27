import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clicked: ''
    };
    this.openClose = this.openClose.bind(this);
  }

  openClose(e) {
    const clickedElement = e.target.getAttribute('data-view');
    this.setState({ open: !this.state.open, clicked: clickedElement }, () => {
    });
  }

  tab(e) {

  }

  render() {

    const notHidden = this.state.open ? 'not-hidden' : 'hidden';

    return (
      <>
      {
        this.props.dataView.map(element => {
          return (
            <div onClick={this.openClose} key={element.key}>
              <h1 data-view={element.key}>{element.title}</h1>

            </div>
          );
        })
      }
        {
          this.props.dataView
            .filter(element => element.key === this.state.clicked)
            .map(element => {
              return (<p className={notHidden} key={element.key}>{element.text}</p>);
            })
        }

      </>
    );
  }
}

export default Accordion;
