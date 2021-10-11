var bullet = ['1', '2', '3', '4'];

// console.log(bullet)
new Swiper('.main-visual .swiper', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><a href="#">' + (bullet[index]) + '</a></div>';
    }
  }
})

new Swiper('.main-celebrity .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // }
})