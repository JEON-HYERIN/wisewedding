'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

const header = document.querySelector('#header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ARROW UP
const arrowUp = document.getElementById('arrow-up');
const wrapper = document.getElementById('wrapper');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior: 'smooth'});
});