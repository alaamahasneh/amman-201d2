'use strict';
var userName = prompt('what is your name?');
alert('Hello  ' + userName);
var userLocation = prompt('Do you live in jordan?');
var lower = userLocation.toLowerCase();
console.log(lower);
switch (lower) {
  case 'yes':
  case 'y':
    alert('great , Im in jordan too');
    break;
  case 'no':
  case 'n':
    alert('Unfortunately');
    break;
  default:
    // alert('Oh noooo, This is a Yes or No Question!');
    break;
}
// console.log(' you live in jordan');
var age = prompt('Are you older than 18 years?');
switch (age.toLowerCase()) {
  case 'yes':
  case 'y':
    alert(' me too');
    break;
  case 'no':
  case 'n':
    alert(' nice, but I think Im older than you !');
    break;
  default:
    alert('Oh noooo, This is a Yes or No Question!');
    break;
}
// console.log(' you are bigger than 18');
var university = prompt('Are you in the university?');
var lower = university.toLowerCase();
switch (lower) {
  case 'yes':
  case 'y':
    alert(' great');
    break;
  case 'no':
  case 'n':
    alert('ohh!');
    break;
  default:
    alert('Oh noooo, This is a Yes or No Question!');
    break;
}
// console.log(' you are in university');
var knowledge = prompt('Do you Know information about software developer?');
var lower = knowledge.toLowerCase();
switch (lower) {
  case 'yes':
  case 'y':
    alert(' greate');
    break;
  case 'no':
  case 'n':
    alert(' you should know is a enthusiastic world');
    break;
  default:
    alert('Oh noooo, This is a Yes or No Question!');
    break;
}
// console.log(' you have ifm about S.D');
var interest = prompt('Do you intersted to Know information about me?');
var lower = interest.toLowerCase();
switch (lower) {
  case 'yes':
  case 'y':
    alert(' me too');
    break;
  case 'no':
  case 'n':
    alert('ohh! but Im intersted to know about you');
    break;
  default:
    alert('Oh noooo, This is a Yes or No Question!');
    break;
}
// console.log(' you are Intersted about me');
alert('thanks for Answering our Question  ' + userName);
