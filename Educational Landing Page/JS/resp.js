burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("vclassresp");
  navList.classList.toggle("vclassresp");
  navbar.classList.toggle("hnavresp");
});
