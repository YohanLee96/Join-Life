window.onload = function() {
  var swiper = new Swiper("#list01", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var swiper2 = new Swiper("#list02", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var swiper3 = new Swiper("#list03", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
};
