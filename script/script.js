'use strict';

const book = document.querySelectorAll('.book'),
  body = document.querySelector('body'),
  adv = document.querySelector('.adv'),
  titleBook = book[4].querySelector('h2 a'),
  bookUl2 = book[0].querySelector('ul'),
  bookLi2 = bookUl2.querySelectorAll('li'),
  bookUl5 = book[5].querySelector('ul'),
  bookLi5 = bookUl5.querySelectorAll('li'),
  bookUl6 = book[2].querySelector('ul'),
  bookLi6 = bookUl6.querySelectorAll('li');

book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

adv.remove();

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

titleBook.textContent = 'Книга 3. this и Прототипы Объектов';

bookLi2[9].after(bookLi2[2]);
bookLi2[3].after(bookLi2[6]);
bookLi2[6].after(bookLi2[8]);

bookLi5[1].after(bookLi5[9]);
bookLi5[4].after(bookLi5[2]);
bookLi5[7].after(bookLi5[5]);

const paragrahp = document.createElement('li');
paragrahp.textContent = 'Глава 8: За пределами ES6';
bookLi6[8].insertAdjacentElement('afterend', paragrahp);
