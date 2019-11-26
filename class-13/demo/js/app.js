"use strict";

// target our order form from the html
var orderForm = document.getElementById("orderForm");
var orders = document.getElementById("orders");

// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
}

Coffee.getName = function() {
  console.log(this.name);
};
// set the global array to empty
Coffee.drinks = [];

//update drinks
function updateDrinks() {
  var drinksString = JSON.stringify(Coffee.drinks);
  localStorage.setItem("coffeeOrders", drinksString);
}

//get all drinks
function getDrinks() {
  var drinksString = localStorage.getItem("coffeeOrders");
  if (drinksString) {
    Coffee.drinks = JSON.parse(drinksString);
    renderOrders();
  }
}
// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.value;
  var dType = drink.drinkType.value;
  var milk = drink.milk.value;

  new Coffee(name, size, milk, isHot, dType);
  //updateDrinks
  updateDrinks();
  // update the previous orders with the new order
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";
  console.log(Coffee.drinks);
  // go through the array and output the details of each drink in the array
  for (var i = 0; i < Coffee.drinks.length; i++) {
    var drinkLI = document.createElement("li");
    var infoP = document.createElement("p");
    var temp;
    if (Coffee.drinks[i].isHot === "on") {
      temp = "cold";
    } else {
      temp = "hot";
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);
//get all drinks
getDrinks();
