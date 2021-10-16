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

// SLIDE
setImageSlide('.main-visual .image-slide', 1, true, 3000);

function setImageSlide (selector, first, status, speed) {
  var numSlide = $(selector).find('.slide-menu .slide').length;
  var slideNow = 0;
  var slidePrev = 0;
  var slideNext = 0;
  var slideFirst = first;
  var timerId = '';
  var timerSpeed = speed;
  var isTimerOn = status;

  $(selector).find('.slide-menu .slide').each(function (index) {
    $(selector).find('.pagination').append('<li><a href="#">' + (index + 1) +'</li></a>\n');
    $(this).css({
      'left': (index * 100) + '%'
    });
  });

  showSlide(slideFirst);

  $(selector).find('.pagination li a').on('click', function () {
    var index = $(selector).find('.pagination li').index($(this).parent());
    showSlide(index + 1);
  });

  function showSlide (index) {
    if (slideNow === 0) {
      $(selector).find('.slide-menu').css({
        'left': -((index - 1) * 100) + '%',
        'transition': 'none'
      });
    } else {
      $(selector).find('.slide-menu').css({
        'left': -((index - 1) * 100) + '%',
        'transition': 'left .3s'
      });
    }

    $(selector).find('.slide-menu .slide').removeClass('active');
    $(selector).find('.slide-menu .slide:eq(' + (index - 1) + ')').addClass('active');
    $(selector).find('.pagination li').removeClass('active');
    $(selector).find('.pagination li:eq(' + (index - 1) + ')').addClass('active');

    slideNow = index;
    slidePrev = (index === 1) ? numSlide : (index - 1);
    slideNext = (index === numSlide) ? 1 : (index + 1); 
    // console.log(`slideNow: ${slideNow} / slidePrev: ${slidePrev} / slideNext: ${slideNext}`);

    if (isTimerOn === true) {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        showSlide(slideNext);
      }, timerSpeed);
    }
  }
}

