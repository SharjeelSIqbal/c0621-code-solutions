var num1 = 52;
var num2 = 48;
var num3 = 103;
var maximumValue = Math.max(num1, num2, num3);
console.log(maximumValue);

var hero = ['Spiderman', 'Batman', 'Deadpool', 'Black Panther'];
var randomNumber = Math.random();
randomNumber *= hero.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = hero[randomIndex];
console.log(randomHero);

var library = [{
  title: 'Why We Sleep',
  author: 'Matthew Walker'

},
{
  title: 'Blink',
  author: 'Malcom Gladwell'
},
{
  title: 'Cloud Atlas',
  author: 'David Mitchell'
}
];
var lastBook = library.pop();
console.log(lastBook);
var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Sharjeel Iqbal';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
console.log(firstName);
var sayMyName = firstName.toUpperCase();
console.log('Me: WHAT IS MY NAME?');
console.log('Me: SAY MY NAME');
console.log('Villian of some sort: -whimpers- it\'s... it\'s... ' + sayMyName);
