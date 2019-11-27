"use strict";

var catform = document.getElementById("catform");
var catlist = document.getElementById("catlist");

function Cat(name) {
  this.name = name;
  Cat.all.push(this);
}
Cat.all = [];

Cat.prototype.render = function() {
  var liEl = document.createElement("li");
  liEl.textContent = this.name;
  catlist.appendChild(liEl);
};
function handleCatSubmit(e) {
  e.preventDefault();
  var newCat = new Cat(e.target.kitteh.value);
  catform.reset();
  newCat.render();
  localStorage.setItem("cats", JSON.stringify(Cat.all));
  console.log("this is what is in local storage", localStorage.cats);
}
