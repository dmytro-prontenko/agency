// Ініціалізація Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: "slide",
  slidesPerView: 1,
  spaceBetween: 10,
});

// Ініціалізація автоматичної висоти текстового поля
const textarea = document.querySelector("textarea");
if (textarea) {
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
}

// Ініціалізація мобільного меню після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  mobileMenu();
});
