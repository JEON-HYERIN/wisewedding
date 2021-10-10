new Swiper('.main-visual .swiper', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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