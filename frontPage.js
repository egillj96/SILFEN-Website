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

console.log("HELLO");
