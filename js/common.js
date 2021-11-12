'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const body = document.querySelector('body');
var scrollPosition = 0;
// 모달창 열기
function enable() {
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollPosition}px`;
  body.style.width = '100%';
}
// 모달창 닫기
function disable() {
  body.style.removeProperty('overflow');
  body.style.removeProperty('position');
  body.style.removeProperty('top');
  body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
}

// header영역
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

// gnb영역
var toggleBtn = header.querySelector('.toggle-btn');
var closeBtn = header.querySelector('.close-btn');
var gnbWrap = header.querySelector('.gnb-wrap');

toggleBtn.addEventListener('click', function () {
  gnbWrap.classList.add('open');
  toggleBtn.classList.add('invisible');
  closeBtn.classList.remove('invisible');
  enable();
});

closeBtn.addEventListener('click', function () {
  gnbWrap.classList.remove('open');
  toggleBtn.classList.remove('invisible');
  closeBtn.classList.add('invisible');
  disable();
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


