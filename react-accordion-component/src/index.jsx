import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const viewData = [
  {
    key: 'HTML',
    title: 'Hypertext Markup Language',
    text: 'Hypertext Markup Language (HTML) is the standard markup language ' +
         'for creating web pages and web applications. With Cascading Style Sheets' +
         ' (CSS) and JavaScript, it forms a triad of cornerstone technologies for' +
         ' the World Wide Web'
  },
  {
    key: 'CSS',
    title: 'Cascading Style Sheets',
    text: 'Cascadint Style Sheets (CSS) is a style sheet language used for describing' +
          ' the presentation of a document written in a markup-language like HTML. ' +
          'CSS is a cornerstone technology of the World Wide Web, alongside HTML and ' +
          'JavaScript'
  },
  {
    key: 'JS',
    title: 'JavaScript',
    text: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming ' +
          'that conforms to the ECMAScript Specification. JavaScript has curly-bracket syntax ' +
          'dynamic typing, prototype-based object orientation, and first-class functions. '
  }
];

ReactDOM.render(
<div>
  <Accordion dataView={viewData}/>
</div>,
document.getElementById('root'));
