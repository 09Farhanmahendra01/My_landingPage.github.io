const element_1 = document.querySelector(".navbar-collapse");
const element_2 = document.querySelector(".navbar-toggler");
let boolean = element_2.getAttribute("aria-expanded");
let link = document.getElementsByClassName("nav-link")[0];
let link2 = document.getElementsByClassName("nav-link")[1];
let link3 = document.getElementsByClassName("nav-link")[2];
let link4 = document.getElementsByClassName("nav-link")[3];
let link5 = document.getElementsByClassName("nav-link")[4];
let link6 = document.getElementsByClassName("nav-link")[5];

link.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
link2.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
link3.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
link4.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
link5.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
link6.addEventListener("click", function () {
  element_1.classList.remove("show");
  element_2.classList.add("collapsed");
  element_2.removeAttribute("aria-expanded");
  element_2.setAttribute("aria-expanded", false);
});
