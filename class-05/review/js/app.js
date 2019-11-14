"use strict";

var counter = 0;
var userName = prompt("Hello. Whats your name?");
alert(userName + ", Welcome to my page");
function guessCar() {
  var q1 = prompt("Do I love cars?").toLowerCase();
  if (q1 === "yes" || "y") {
    counter++;
    alert(`you have a point, ${counter}`);
  } else if (q1 === "no" || "n") {
    alert("you don't take a point");
  }
  // console.log(q1);
}
// guessCar();

function guessLicense() {
  var q2 = prompt("Do I have a drive license?").toLowerCase();
  if (q2 === "no" || "n") {
    counter++;
    alert("you have a point " + counter);
  } else if (q2 === "yes" || "y") {
    alert("you don't take a point");
  }
  // console.log(q2);
}
// guessLicense();

function guessReading() {
  var q3 = prompt("Do I love reading?").toLowerCase();
  if (q3 === "yes" || "y") {
    counter++;
    alert("you have another point " + counter);
  } else if (q3 === "no" || "n") {
    alert("you don't take a point");
  }
  //  console.log(q3);
}
// guessReading();

function guessIphone() {
  var q4 = prompt("Do I have IPHONE?").toLowerCase();
  if (q4 === "no" || "n") {
    counter++;
    alert("you have another point" + counter);
  } else if (q4 === "yes" || "y") {
    alert("you don't take a point");
  }
  // console.log(q4);
}
// guessIphone();

function guessAmman() {
  var q5 = prompt("Do I lived in AMMAN?").toLowerCase();
  if (q5 === "yes" || "y") {
    counter++;
    alert("good another point" + counter);
  } else if (q5 === "no" || "n") {
    alert("you don't take a point");
  }
  // console.log(q5);
}
// guessAmman();

alert(userName + ",let's have fun and play another game");
// Q 6

function validateNumber() {
  var number = parseInt(prompt("What is my favorite number?"));
  while (isNaN(number)) {
    number = parseInt(prompt("please use Numbers only!!"));
  }
  return number;
}

function guessNum() {
  var num = validateNumber();
  console.log("before:", num, typeof num);
  for (var j = 0; j < 5; j++) {
    if (num === 5) {
      console.log("after:", num);
      alert("correct answer, you get a point");
      counter++;
      break;
    } else if (num >= 6) {
      alert("high");

      var num = prompt("What is my favorite number?");
    } else if (num <= 4) {
      alert("low");

      var num = prompt("What is my favorite number?");
    }
  }
}
guessNum();

function guessCars() {
  var cars = [
    "mazda",
    "mercedes",
    "nissan",
    "kia",
    "bmw",
    "audi",
    "ford",
    "dodge"
  ];
  var tries = 0;
  while (tries < 6) {
    var question = prompt("What's my favourite car ?");
    for (let index = 0; index < cars.length; index++) {
      if (question === cars[index]) {
        alert("you got it. take point");
        counter++;
        tries = 6;
        break;
      }
    }
    tries++;
  }
}
guessCars();
alert("My favourite cars is: nissan,kia,ford,bmw.mercedes,dodge,mazda,audi");

alert("Thank you for your time, You have got " + counter + "/7");
