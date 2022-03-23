var low = 10;
var mid = 20;
var high = 30;

var maximumValue = Math.max(low, mid, high);
console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Superman', 'Hulk', 'Batman'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [{ title: 'Harry Potter', author: 'J.K. Rowling' }, { title: 'Narnia', author: 'C.S. Lewis' }, { title: 'The Giving Tree', author: 'Shel Silverstein' }];
var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

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
library.splice(js, 1);
console.log(library);

var fullName = 'Ryan Bae';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
