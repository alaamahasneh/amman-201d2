// Data types
var str = 'this is string';
var num = 1; //1.5
var bool = true; //false
console.log('TYPES', typeof str, typeof num, typeof bool);
// var isTrue = confirm('are you good? ');
// console.log(isTrue);
// var myNum = prompt('enter number');
// console.log('MyNum', myNum, typeof myNum);
//parseInt("sdadssadad") ==> NaN
//parseInt("4") ==> 4

// bad example
// if ((bool = 3)) {  // dont use = in if
//   console.log('this is true');
// } else {
//   console.log('this is false');
// }

//if (num !== '1' && true) {
// if (num !== '1' || false) {
if (!(num !== '1' || false)) {
  console.log('this is true');
} else {
  console.log('this is false');
}

if (num === 1) {
  //
} else {
  //
}

if (num === 2) {
  //
} else {
  //
}

if (num === 1) {
  //
} else if (num === 2) {
  //
} else {
  //
}

var color = 'bluee';

switch (color) {
  case 'red':
    console.log('reeeeeed');
    break;
  case 'blue':
  case 'bluee':
    console.log('blue');
    break;
  default:
    console.log('noooooo');
    break;
}
