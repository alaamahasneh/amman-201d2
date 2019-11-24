var names = [
  "cruisin-goat",
  "emotional-goat",
  "float-your-goat",
  "goat-out-of-hand",
  "kissing-goat",
  "sassy-goat",
  "smiling-goat",
  "sweater-goat"
];
//(1) get the images
var leftImage = document.querySelector("#leftImage");
var rightImage = document.querySelector("#rightImage");
var imagesSection = document.querySelector("#imagesSection");

//(2) add src,alt,title to the images to test if ever thing is working
// leftImage.src = `assets/${names[0]}.jpg`;
// leftImage.alt = names[0];
// leftImage.title = names[0];
// rightImage.setAttribute("src", `assets/${names[1]}.jpg`);
// rightImage.setAttribute("alt", names[1]);
// rightImage.setAttribute("title", names[1]);
//(3) create constructor function for the goats
function Goat(name) {
  this.name = name;
  this.imagePath = `assets/${name}.jpg`;
  Goat.all.push(this);
}
Goat.all = [];

for (let i = 0; i < names.length; i++) {
  new Goat(names[i]);
}
//(4) render 2 random images
function render() {
  var leftGoat = Goat.all[randomNumber(0, Goat.all.length - 1)];
  var rightGoat = Goat.all[randomNumber(0, Goat.all.length - 1)];
  leftImage.setAttribute("src", leftGoat.imagePath);
  leftImage.setAttribute("alt", leftGoat.name);
  leftImage.setAttribute("title", leftGoat.name);
  rightImage.setAttribute("src", rightGoat.imagePath);
  rightImage.setAttribute("alt", rightGoat.name);
  rightImage.setAttribute("title", rightGoat.name);
}
render();

imagesSection.addEventListener("click", function(e) {
  console.log(event.target.id);
  if (event.target.id !== "imagesSection") {
    render();
  }
});
// (5) Where should we add the event listener
// 5a identify the  clicked image
// 5b keep track of how many times the image have been clicked and viewed?
// 5c re render the images

// TODO unique images
// (6) prevent having two exact images at the same time
// (7) prevent images from repeating one right after the other
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
