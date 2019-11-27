"use strict";
var cats = localStorage.getItem("cats");
if (cats) {
  var catsFromLS = JSON.parse(cats);
  console.log("hi", catsFromLS[0].render());
  // catsFromLS is now an array of generic objects
  for (var i = 0; i < catsFromLS.length; i++) {
    new Cat(catsFromLS[i].name);
    Cat.all[i].render();
  }
}

catform.addEventListener("submit", handleCatSubmit);
