
var books =
[
  {
    isbn: '978-0060284510',
    title: 'The Giving Tree',
    author: 'Shel Silverstein'
  },
  {
    isbn: '978-0547928227',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '979-8749478112',
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain'
  }
];

console.log('typeof:', typeof JSON.stringify(books), JSON.stringify(books));

var student = { numberID: '428-303-4015', name: 'Ryan' };
console.log('typeof:', typeof student, JSON.stringify(student));

var obj = JSON.parse(JSON.stringify(student));
console.log('typeof:', typeof obj, obj);
