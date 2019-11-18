// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data

var frankie = {
  name: "Frankie",
  age: 0,
  likes: ["cuddling", "chasing string", "napping", "food"],
  imagePath: `images/frankie.jpeg`,
  goodWithKids: true,
  goodWithDogs: false,
  goodWithOtherCats: true,
  breed: "British Shorthair",
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    var container = document.getElementById("kittenProfiles");
    // create and append article to the container
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);
    // create h2 with frankie name as textContent and append it to the article
    var h2El = document.createElement("h2");
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    // create p with frankie age string and append it to article
    var pEl = document.createElement("p");
    articleEl.appendChild(pEl);
    pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
    // create ul and append it to article

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);
    // append li's to the ul containing frankie interests
    for (let i = 0; i < this.likes.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    // create image and set the src  attribute to frankie image path then append it to the article
    var imgEl = document.createElement("img");
    articleEl.appendChild(imgEl);
    imgEl.setAttribute("src", this.imagePath);
  }
};
var jumper = {
  name: "Jumper",
  age: 0,
  likes: ["cuddling", "napping"],
  imagePath: `images/jumper.jpeg`,
  goodWithKids: false,
  goodWithDogs: true,
  goodWithOtherCats: false,
  breed: "Persian",
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    var container = document.getElementById("kittenProfiles");
    // create and append article to the container
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);
    // create h2 with frankie name as textContent and append it to the article
    var h2El = document.createElement("h2");
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    // create p with frankie age string and append it to article
    var pEl = document.createElement("p");
    articleEl.appendChild(pEl);
    pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
    // create ul and append it to article

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);
    // append li's to the ul containing frankie interests
    for (let i = 0; i < this.likes.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }
    // create image and set the src  attribute to frankie image path then append it to the article
    var imgEl = document.createElement("img");
    articleEl.appendChild(imgEl);
    imgEl.setAttribute("src", this.imagePath);
  }
};
var serena = {
  name: "Serena",
  age: 0,
  likes: ["cuddling", "napping", "chasing string"],
  imagePath: `images/serena.jpeg`,
  goodWithKids: true,
  goodWithDogs: true,
  goodWithOtherCats: false,
  breed: "Persian",
  getAge: function(min, max) {
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    var container = document.getElementById("kittenProfiles");
    // create and append article to the container
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);
    // create h2 with frankie name as textContent and append it to the article
    var h2El = document.createElement("h2");
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    // create p with frankie age string and append it to article
    var pEl = document.createElement("p");
    articleEl.appendChild(pEl);
    pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
    // create ul and append it to article

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);
    // append li's to the ul containing frankie interests
    for (let i = 0; i < this.likes.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = this.likes[i];
    }

    // create image and set the src  attribute to frankie image path then append it to the article
    var imgEl = document.createElement("img");
    articleEl.appendChild(imgEl);
    imgEl.setAttribute("src", this.imagePath);
  }
};
frankie.getAge(3, 7);
frankie.render();
jumper.getAge(3, 7);
jumper.render();
serena.getAge(3, 7);
serena.render();
//helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1 create a constructor function for all cats

//2 add getAge method to the prototype

//3 add render method to the prototype

//4 creat  3 new instance of cats by using the new keyword

//5 add all cats in array

//6 loop through them and call the getAge and render methods

// 1 create table
// 2 create first row
// 3 create second row
// 4 create the 3 table headers and assign values to the textContent
// 5 creat 3 table data and assign values to the textContent
// 6 append the table headers to the first row
// 7 append the table data to the second row
// 8 append the two rows to the table
// 9 append the table to the article
