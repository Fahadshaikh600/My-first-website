burger = document.querySelector(".burger");
rightNav = document.getElementById("right-nav");
navList = document.getElementById("nav-list");
navbar = document.getElementById("navbar");
// content = document.querySelectorAll(".content");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-h-resp");
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
});
