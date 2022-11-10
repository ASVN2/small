const showNav = document.querySelector(".show-nav");
const nav = document.querySelector(".links-list");

showNav.addEventListener("click", () => {
  nav.classList.toggle("active");
});
