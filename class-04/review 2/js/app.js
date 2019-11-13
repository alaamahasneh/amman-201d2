"use strict";

// var user = prompt('wht\'s your name');

// alert('Welcome to my website ' + user);
// alert('Please answer my question by type Yes or No')

// var points =0;
// var name
// name = prompt('My name Rashid Saqr Musa Alsawalqa ?? ');
// name = name.toUpperCase();
// if (name == 'YES' || name == 'Y') {
//   alert('Burfict answer + 1')
//   points++;
// } else if (name == 'NO' || name == 'N') {
//   alert('wrong answer + 0')
// }
// //console.log('My name Rashid Saqr Musa Alsawalqa ?? ');

// var age
// age = prompt('I\'am 30 years old ?? ');
// age = age.toUpperCase();
// if (age == 'YES' || age == 'Y') {
//   alert('Wrong answer + 0')
// } else if (age == 'NO' || age == 'N') {
//   alert('Burfict answer + 1')
//   points++;
// }
// //console.log('I\'am 30 years old ?? ');

// var student
// student = prompt('I still a student in mutah university ?? ');
// student = student.toUpperCase();
// if (student == 'YES' || student == 'Y') {
//   alert('Wrong answer + 0')
// } else if (student == 'NO' || student == 'N') {
//   alert('Burfict answer + 1')
//   points++;
// }
// //console.log('I still a student in mutah university ?? ');

// var game
// game = prompt(' Did i Love VideoGames ??? ');
// game = game.toUpperCase();
// if (game == 'YES' || game == 'Y') {
//   alert('Burfict answer + 1')
//   points++;
// } else if (game == 'NO' || game == 'N') {
//   alert('Wrong answer + 0')
// }
// //console.log(' Did i Love VideoGames ??? ');

// var javaScript
// javaScript = prompt(' Did i love JavaScript ??? ');
// javaScript = javaScript.toUpperCase();
// if (javaScript == 'YES' || javaScript == 'Y') {
//   alert('Wrong answer + 0')
// } else if (javaScript == 'NO' || javaScript == 'N') {
//   alert('Burfict answer + 1')
//   points++;
// }
// //console.log(' Did i love JavaScript ??? ');

// alert("Now you will play guess the number game ");
// alert("You have four attempts to guess the correct number ");
// alert("So be Careful ;)");

// var number

// for (var i = 0; i <= 3; i++) {
//   var number = prompt('put the number'); {

//   } if (number == 4) {
//     alert('Great you did it the number was "4"  +1 ')
//     points++;
//     i = 4;

//   } else if (number < 4) {
//     alert('Too low')

//   } else if (number > 4) {
//     alert('Too high')

//   } else if (i = 4){
//     alert('the number was "4"')
//   }
// }

var games = [
  "devil may cry",
  "bloodborne",
  "need for speed",
  "resident evil",
  "battlefield",
  "god of war",
  "black desert online",
  "grand theft auto v",
  "the last of us",
  "shadow of mordor"
];
for (var i = 0; i <= 5; i++) {
  var gaming = prompt("What's My Favorite games ??? ");

  if (gaming === games[i]) {
    //alert("You got it " + user + " Congratulations +1 ");
    // points++;
    i = 6;
  } else if (gaming !== games[i]) {
    alert("wrong answer. try again");
  }
}
alert(
  "devil may cry ",
  "bloodborne ",
  "need for speed ",
  "resident evil ",
  "battlefield ",
  "god of war ",
  "black desert online ",
  "grand theft auto v ",
  "the last of us ",
  "shadow of mordor "
);
alert("yesssss");
// alert("Your Score is " + points + "/7 ..");
// alert(" Thank you " + user);
