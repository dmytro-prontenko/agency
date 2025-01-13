const mobileMenu = () => {
  // Elements
  const menuBtn = document.querySelector(".header__menu-btn");
  const closeBtn = document.querySelector(".mobile-menu__close-btn");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu__nav-link");
  const body = document.querySelector("body");

  // Toggle menu function
  function toggleMenu() {
    menu.classList.toggle("is-open");
    body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", menu.classList.contains("is-open"));
  }

  // Close on ESC key
  function handleKeyPress(e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      toggleMenu();
    }
  }

  // Close on outside click
  function handleOutsideClick(e) {
    if (e.target === menu) {
      toggleMenu();
    }
  }

  // Add event listeners
  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
  menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));
  menu.addEventListener("click", handleOutsideClick);
  window.addEventListener("keydown", handleKeyPress);

  // Cleanup function
  function destroy() {
    menuBtn.removeEventListener("click", toggleMenu);
    closeBtn.removeEventListener("click", toggleMenu);
    menuLinks.forEach((link) => link.removeEventListener("click", toggleMenu));
    menu.removeEventListener("click", handleOutsideClick);
    window.removeEventListener("keydown", handleKeyPress);
  }

  // Return destroy function for cleanup
  return destroy;
};

export { mobileMenu };
