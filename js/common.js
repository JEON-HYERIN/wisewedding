'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

var header = document.querySelector('#header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

$('#header .header__menu li a').on('click', function () {
  var index = $('#header .header__menu li').index($(this).parent());
  $('#header .header__menu li').removeClass('active');
  $('#header .header__menu li:eq(' + index + ')').addClass('active');
});

// toggle-btn, close-btn
var toggleBtn = header.querySelector('.toggle-btn');
var closeBtn = header.querySelector('.close-btn');
var gnbWrap = header.querySelector('.gnb-wrap');

toggleBtn.addEventListener('click', function () {
  gnbWrap.classList.add('open');
  toggleBtn.classList.add('invisible');
  closeBtn.classList.remove('invisible');
});

closeBtn.addEventListener('click', function () {
  gnbWrap.classList.remove('open');
  toggleBtn.classList.remove('invisible');
  closeBtn.classList.add('invisible');
});

// ARROW UP
var arrowUp = document.getElementById('arrow-up');
var wrapper = document.getElementById('wrapper');
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

