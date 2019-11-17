/*
JavaScript objects are convenient & powerful ways to group data and functions. They store data as properties, which are represented as `key: value` pairs, and can have methods, which are functions associated with the object.
*/

//how to define it?
var person = {
  name: "mahmoud",
  changeName: function(newName) {
    console.log("what is this", this);
    //person.name = newName;
    this.name = newName;
  }
};
var obj = {
  name: "sds",
  sayHi: function() {
    // console.log("hi", this);
    obj.name = "asd"; //1
    this.name = "asda"; //2
  }
};
//properties key/value pairs.
person["age"] = 999;
person.name = "aadasdsa";
var userName = "name";
person[userName] = "mahmoud";
person.changeName("lknsdklsadkljskladj");
console.log("sdsdsd", obj.sayHi());
console.table(person);
console.log("what is this", this);
//Methods
//Contexual 'this'
//Nested Object
// Adding new props
//Dot vs Bracket Notation

//The DOM
