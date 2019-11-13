// a function is like a box
// where you can give it some number things as input
// it will do some work
// and it will give something back

// Functions autonomy

// Function Expression
var me = "asdasdasd"; //global var ex counter
function getName(name) {
  //1
  // 'hi' + name + 'welcome to my page'
  var greet = `Hi ${name} welcome to my page ${me}`; //2
  return greet; //3
}
// var userName = "mahmoud";
// var response = getName(userName);
// console.log(response);
//console.log(greet);
// Function Declaration
var showName = function() {
  var userName = prompt("name?");
  alert(userName);
};
//showName();
// call Invoke ?

//parameters Arguments

//return value?

//local vs global scope

//Immediately-Invoked Function Expressions
(function greetUser(name) {
  // name is local var & me is a global
  alert(`Hi ${name} welcome to my page ${me}`);
})("asd");
