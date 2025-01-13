// Ініціалізація Swiper
const initSwiper = () => {
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
};

// Ініціалізація автоматичної висоти текстового поля
const initTextarea = () => {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }
};

// Ініціалізація мобільного меню
const initMobileMenu = async () => {
  try {
    const { mobileMenu } = await import("./mobile-menu.js");
    const destroyMobileMenu = mobileMenu();

    // Cleanup on page unload
    window.addEventListener("unload", destroyMobileMenu);
  } catch (error) {
    console.error("Error initializing mobile menu:", error);
  }
};

// Ініціалізація всіх компонентів після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  initTextarea();
  initMobileMenu();
});
