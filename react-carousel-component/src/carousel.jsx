// import React from 'react';

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: 0
//     };
//     this.nextImage = this.nextImage.bind(this);
//     this.timer = this.timer.bind(this);
//   }

//   nextImage() {
//     this.setState({ image: this.state.image + 1 } => {
//       if(this.state.image === this.props.shrek.length){
//         this.setState({image: 0})
//       }
//     });
//   }

//   timer(e) {
//     setInterval(this.nextImage, 1000);
//   }

//   render() {
//     return (
//       <div onLoadStart={this.timer}>
//         <img src={this.props.shrek[0].url} alt="" />
//       </div>
//     );
//   }
// }

// export default Carousel;
