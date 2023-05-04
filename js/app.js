const url = 'https://otziv-otziv.ru/katalog/headphones/sennheiser-naushniki/sennheiser-cx-300-ii-otzyvy.html?page=64';
const reviews = [];

fetch('https://cors-anywhere.herokuapp.com/' + url)
   .then(response => response.text())
   .then(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const reviewElems = doc.querySelectorAll('.review-item');

      if (reviewElems.length > 0) {
         reviewElems.forEach((el) => {
            const author = el.querySelector('.author .user').textContent;
            const date = el.querySelector('.author .date').textContent;
            const rating = el.querySelector('.stars-container').getAttribute('title');
            const pros = el.querySelector('dt:contains("Достоинства") + dd').textContent;
            const cons = el.querySelector('dt:contains("Недостатки") + dd').textContent;
            const text = el.querySelector('dt:contains("Комментарий") + dd').textContent;
            reviews.push({ author, date, rating, pros, cons, text });
         });
         console.log(reviews);
      } else {
         console.log('Отзывы не найдены.');
      }
   })
   .catch(err => console.error(err));


import axios from 'axios';

console.log(axios.isCancel('something'));

const jsdom = require("jsdom");
const { JSDOM } = jsdom;