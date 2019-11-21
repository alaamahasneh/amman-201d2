//javascript Hoisting
//var msgExpression
showMsg();
// console.log(x);
// var x = 10;
console.log(msgExpression);
// msgExpression(); msgExpression is not a function
globalFunc();
function showMsg() {
  console.log("I am the showMsg function");
}

var msgExpression = function() {
  console.log("I am the msgExpression function expression");
};
msgExpression();
//global scope
var name = "Dan";
function globalFunc() {
  console.log("I can be called anywhere");
}

//function scope
function scopyFunc(doggy) {
  function privateFunc() {
    var privateVar = "woof!";
    return doggy + " says " + privateVar;
  }
  // console.log(privateVar); privateVar is not defined
  console.log("doggy is only defined inside scopyFunc: " + doggy);
  return privateFunc();
}

scopyFunc("Fido");

//object context
var teacherBot = {
  first: "Dan",
  last: "Schwartz",
  age: 35,
  speak: function() {
    return "Hello humanoid, I am " + this.first + " " + this.last;
  }
};

teacherBot.age; //35
teacherBot.speak; //'Hello humanoid, I am Dan Schwartz'
// console.log(this.age);
//age; //age is not defined

// SyntaxError: usually typos
var b = 9;
var a = b;
// someFunc();someFunc is not defined

var someObj = [
  {
    a: 10,
    b: 9
  }
];

someObj.push(20);
