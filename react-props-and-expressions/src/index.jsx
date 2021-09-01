import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton({ text }) {
  return <button>{text}</button>;
}
const element = (
  <div>
    <CustomButton text='I' />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
