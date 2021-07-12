var books = [{
  bookOne: [{
    isbn: '1-234322432-23',
    book: 'Cat-in-the-Hat',
    author: 'Dr. Seuss'
  }],
  bookTwo: [{
    isbn: '1232-28429-212',
    book: 'The Big Friendly Giant',
    author: 'Rahl Dahl'
  }],
  bookThree: [{
    isbn: '232-281942-273219',
    book: 'The Alchemist',
    author: 'Paulo Coelho'
  }]

}];

console.log(typeof books);
console.log(books);
console.log(JSON.stringify(books));
console.log(typeof JSON.stringify(books));

var student = '[{ "student1": [{"name" : "Sharjeel", "id": "3241022"}], "student2": [{"name": "Shaheryar", "id": "324225"}]}]';
console.log(typeof student);
console.log(JSON.parse(student));
console.log(typeof JSON.parse(student));
