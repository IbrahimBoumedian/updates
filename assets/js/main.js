// Add an effect to header on scrolling
let header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 100);
});
// Show nav menu in mobile
const menuIcon = document.querySelector("header .nav-menu");
let nav = document.querySelector("header nav");
menuIcon.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menuIcon.setAttribute("name", "close-outline");
  } else {
    menuIcon.setAttribute("name", "menu-outline");
  }
});

// Add active class to nav links
const navLinks = Array.from(
  document.querySelectorAll("header nav .nav-link , header .btns > a")
);
navLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nav.classList.remove("active");
    menuIcon.setAttribute("name", "menu-outline");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Fac Section  Accordion
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Show header buttons on scrolling for small devices

const navMobileBtns = document.querySelector(".mobile-btns");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 220) {
    header.classList.add("mobile");
    navMobileBtns.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
    navMobileBtns.classList.remove("mobile");
  }
});

// Flip services card on click event
const servicesCards = Array.from(
  document.querySelectorAll("#services .services-items .flip-card")
);
servicesCards.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    servicesCards.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

// Scroll to fast quote on i click on the button
const fastQuoteBtn = document.querySelector(".fast-quote-btn");
const quoteSection = document.querySelector("#contact");
fastQuoteBtn.addEventListener("click", (e) => {
  quoteSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});


