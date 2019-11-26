"use strict";
var imagePaths = [
  "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "usb.gif",
  "water-can.jpg",
  "wine-glass.jpg"
];
var rounds = 25;
var leftImage = document.querySelector("#left");
var middleImage = document.querySelector("#middle");
var rightImage = document.querySelector("#right");
var imageSection = document.querySelector("#imageSection");
var showingArticle = document.querySelector("#showing");
Product.all = [];

function Product(path) {
  var pathArr = path.split(".");
  this.name = pathArr[0];
  this.imagePath = `img/${this.name}.${pathArr[1]}`;
  this.voting = 0;
  this.views = 0;
  Product.all.push(this);
}

for (var i = 0; i < imagePaths.length; i++) {
  new Product(imagePaths[i]);
}
var previousIndexs = [];
function getUniqueIndex() {
  var index = randomNumber(0, Product.all.length - 1);
  while (previousIndexs.includes(index)) {
    index = randomNumber(0, Product.all.length - 1);
  }
  previousIndexs.push(index);
  if (previousIndexs.length > 3) {
    previousIndexs.shift();
  }
  return index;
}

function render() {
  var leftProduct = Product.all[getUniqueIndex()];
  var middleProduct = Product.all[getUniqueIndex()];
  var rightProduct = Product.all[getUniqueIndex()];

  leftProduct.views++;
  middleProduct.views++;
  rightProduct.views++;

  leftImage.setAttribute("src", leftProduct.imagePath);
  leftImage.setAttribute("alt", leftProduct.name);
  leftImage.setAttribute("title", leftProduct.name);

  middleImage.setAttribute("src", middleProduct.imagePath);
  middleImage.setAttribute("alt", middleProduct.name);
  middleImage.setAttribute("title", middleProduct.name);

  rightImage.setAttribute("src", rightProduct.imagePath);
  rightImage.setAttribute("alt", rightProduct.name);
  rightImage.setAttribute("title", rightProduct.name);
}
render();
function handleClick(e) {
  rounds--;
  console.log(rounds);
  if (rounds !== 0) {
    if (e.target.id !== "imageSection") {
      for (let x = 0; x < Product.all.length; x++) {
        if (e.target.title === Product.all[x].name) {
          Product.all[x].voting++;
        }
      }
      render();
    }
  } else if (rounds === 0) {
    imageSection.removeEventListener("click", handleClick);
    renderChartAndList();
  }
}

imageSection.addEventListener("click", handleClick);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderChartAndList() {
  var votes = [];
  var views = [];
  var labels = [];
  var container = document.getElementById("showing");
  var ulEl = document.createElement("ul");
  container.appendChild(ulEl);
  for (let z = 0; z < Product.all.length; z++) {
    var liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = `${Product.all[z].name} had ${Product.all[z].voting} votes and was shown ${Product.all[z].views} times`;
    labels.push(Product.all[z].name);
    votes.push(Product.all[z].voting);
    views.push(Product.all[z].views);
  }

  var ctx = document.getElementById("myChart").getContext("2d");

  var voteData = {
    label: "# of Votes",
    data: votes,
    backgroundColor: "#404040"
  };

  var viewsData = {
    label: "# of Views",
    data: views,
    backgroundColor: "#0040ff"
  };

  var labelsInfo = {
    labels: labels,
    datasets: [voteData, viewsData]
  };

  var chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  var myChart = new Chart(ctx, {
    type: "bar",
    data: labelsInfo,
    options: chartOptions
  });
}
