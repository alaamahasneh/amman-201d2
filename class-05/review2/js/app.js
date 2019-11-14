"use strict";

var user = prompt("hi , Whats your name ?");
alert(user + ", Are you Ready to play guess game ?");
var q1 = prompt("My hair color is black ? (yes or no)");
var q2 = prompt("am i a pet lover ? (yes or no)");
var q3 = prompt("i don't ware glasses ? (yes or no)");
var q4 = prompt("am i longer than 178 ? (yes or no)");
var q5 = prompt("my favourite color is blue ? (yes or no)");
var result = 0;

q1 = q1.toLowerCase();
q2 = q2.toLowerCase();
q3 = q3.toLowerCase();
q4 = q4.toLowerCase();
q5 = q5.toLowerCase();
function firstFive() {
  if (q1 === "yes" || q1 === "y") {
    result = result + 1;
    // console.log(q1);
  }
  if (q2 === "no" || q2 === "n") {
    result++;
  }
  // console.log(q2);

  if (q3 === "no" || q3 === "n") {
    result++;
  }
  // console.log(q3);

  if (q4 === "yes" || q4 === "y") {
    result++;
  }
  // console.log(q4);

  if (q5 === "no" || q5 === "n") {
    result++;
  }
  // console.log(q5);
}
firstFive();
alert(
  "Good Job " +
    user +
    " Your score is: " +
    result +
    "  Where is 5 mean you know me well and 0 mean you know nothing about me "
);

alert(user + " lets Play another game ! ");

function guessGame() {
  var guess = prompt(
    "guess what the number i think of ?? (choose a number from 1 to 10) "
  );

  // for (var i = 0, i =< 3 , i++ ){}

  var x = 0;
  while (x !== 3) {
    if (guess == 7) {
      alert("Yeeeah thats right , You did it");
      x = 3;
      result++;
    } else if (guess < 7) {
      alert("Too Low");
      var guess = prompt(
        "guess what the number i think of ?? (choose a number from 1 to 10) "
      );
      x++;
    } else if (guess > 7) {
      alert("Too High");
      var guess = prompt(
        "guess what the number i think of ?? (choose a number from 1 to 10) "
      );
      x++;
    }
  }
}
guessGame();
alert("The right answer is 7");

function animeGuess() {
  var animeList = [
    "bleach",
    "death note",
    "demons slayer",
    "never land",
    "erased"
  ];
  var animeAnswer = prompt(
    "Now you need to Guess one of my top 10 favourites Anime ! "
  );

  for (var i = 0; i < 6; i++) {
    if (
      animeAnswer === animeList[0] ||
      animeAnswer === animeList[1] ||
      animeAnswer === animeList[2] ||
      animeAnswer === animeList[3] ||
      animeAnswer === animeList[4]
    ) {
      alert("Yeeeeeea , its one of my fav");
      i = 7;
      result++;
    } else {
      var animeAnswer = prompt("Wrong Try Again");
    }
  }
}
animeGuess();
alert(
  "and this is the list from array : bleach, death note, demons slayer, never land and erased"
);

alert("So Your Final Score is: " + result + " Points");

// var y = 0 ;
// while( y !== 6) {
// if (animeAnswer == animeList[y]){
//     alert('Yeeeeeea , its one of my fav');
//     y =6 ;
// }else if (animeAnswer !== animeList[y]){

//     var animeAnswer = prompt("Now you need to Guess one of my top 10 favourites Anime ! ");
//     y++ ;
// }
// }
// console.log(animeList.length);
