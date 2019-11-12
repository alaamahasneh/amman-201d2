var arr = ['Sunday'];
arr.push('Monday');

for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

var userName = prompt("what's your name?");

while (userName !== 'mahmoud') {
  console.log('hi');
  userName = prompt("what's your name?");
  console.log('hey');
}
console.log('hello');
var index = 0;
do {
  console.log(index);
  index++;
} while (index < 50);

//noooooooooooooo infinite loop
// console.log('hello');
// var index = 0;
// do {
//   console.log(index);
//   // index++;
// } while (index < 50);
