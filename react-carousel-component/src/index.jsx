import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    key: 'bulbasaur',
    url: '../images/001.png'
  },
  {
    key: 'charmander',
    url: '../images/004.png'
  },
  {
    key: 'squirtle',
    url: '../images/007.png'
  },
  {
    key: 'pikachu',
    url: '../images/025.png'
  },
  {
    key: 'jigglypuff',
    url: '../images/039.png'
  }
];

ReactDOM.render(
  <Carousel pokemon={images} />,
  document.getElementById('root')
);
