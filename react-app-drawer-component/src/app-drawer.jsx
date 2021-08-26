import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openCloseMenu = this.openCloseMenu.bind(this);
  }

  openCloseMenu() {
    this.setState({ open: !this.state.open }, () => {
    });
  }

  render() {

    if (this.state.open === false) {
      return (<div>
      <header><i onClick={this.openCloseMenu} className="fas fa-bars"></i></header>
      <div className="row">
        <img src="https://www.freepnglogos.com/uploads/zelda-png-logo/the-legend-of-zelda-logo-revamped-png-10.png" alt="legend of zelda" />
      </div>
    </div>);
    } else {
      return (
        <div>
          <div onClick={this.openCloseMenu} className="blacked-out"></div>
          <header><i onClick={this.openCloseMenu} className="fas fa-bars"></i></header>
          <div className="menu transition">
            <h1>Choose a game</h1>
            <ul>
              <li onClick={this.openCloseMenu}>The Legend of Zelda</li>
              <li onClick={this.openCloseMenu}>A Link to the Past</li>
              <li onClick={this.openCloseMenu}>Ocarina of Time</li>
              <li onClick={this.openCloseMenu}>The Wind Waker</li>
              <li onClick={this.openCloseMenu}>Breath of the Wild</li>
            </ul>
          </div>
          <div className="row">
            <img src="https://www.freepnglogos.com/uploads/zelda-png-logo/the-legend-of-zelda-logo-revamped-png-10.png" alt="legend of zelda" />
          </div>
        </div>
      );
    }
  }
}

export default AppDrawer;
