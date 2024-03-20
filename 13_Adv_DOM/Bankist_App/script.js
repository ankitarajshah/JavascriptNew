"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

////Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//scroll
const btnScrollTo = document.querySelector(".btn--scroll-to");
console.log(btnScrollTo);
const section1 = document.querySelector("#section--1");
console.log(section1);

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);
  //coordinates on button
  console.log(e.target.getBoundingClientRect());
  //   current scroll
  console.log("current scroll(x/y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });
  section1.scrollIntoView({ behavior: "smooth" });
});

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function (e) {
//   alert("addeventListener: Great! you are reading heading");
// });

//bubbling and capturing

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  //console.log("Link");
  this.style.backgroundColor = randomColor();
  console.log("link", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  //console.log("Link");
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  //console.log("Link");
  this.style.backgroundColor = randomColor();
  console.log("Nav", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

//Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     //console.log("LINK");
//     //smooth navigation get id as we cannot get from href

//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//Steps 1: AddeventListener to common parent element
// 2. Determine what element orginated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    //console.log("Link");
    e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//DOM traversing
const h1 = document.querySelector("h1");

//going downwards: child
console.log(h1.querySelectorAll(".highlight"));

//slider
//select all images
const slides = document.querySelectorAll(".slide");
//0%,100%,200%,300%
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";

const btnLeft = document.querySelector(".slider__btn--left ");
const btnRight = document.querySelector(".slider__btn--right ");

let curSlide = 0;
const maxSlide = slides.length;

//-100%,0%,100%,200%
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};
goToSlide(0);

//Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
//Prev Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
