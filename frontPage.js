var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
  wrapAround: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".carousel", {
  // options
});

var burger = document.querySelector(".burger-container");
var mobileNav = document.querySelector(".mobile-nav");
burger.addEventListener("click", changeBurger);

function changeBurger() {
  this.classList.toggle("change");
  mobileNav.classList.toggle("show");
}

//animations

gsap.from("#fav-bag div", {
  x: -400,
  duration: 1,
  scrollTrigger: "#fav-bag",
});
