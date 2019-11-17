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

//1 create object that will contain all properties and a method to getAge
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
    pEl.textContent = `Frankie is adorable, and is ${this.age} months old.`;
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
//3 call getAge after creating the object to set the age property to the random age
frankie.getAge(3, 7);
frankie.render();
console.table(frankie);
//2 helper function to calculate random age within range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// it's always good to have the dom manipulation in a render method in the object
// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
// var container = document.getElementById("kittenProfiles");
// // create and append article to the container
// var articleEl = document.createElement("article");
// container.appendChild(articleEl);
// // create h2 with frankie name as textContent and append it to the article
// var h2El = document.createElement("h2");
// articleEl.appendChild(h2El);
// h2El.textContent = frankie.name;
// // create p with frankie age string and append it to article
// var pEl = document.createElement("p");
// articleEl.appendChild(pEl);
// pEl.textContent = `Frankie is adorable, and is ${frankie.age} months old.`;
// // create ul and append it to article

// var ulEl = document.createElement("ul");
// articleEl.appendChild(ulEl);
// // append li's to the ul containing frankie interests
// for (let i = 0; i < frankie.likes.length; i++) {
//   var liEl = document.createElement("li");
//   ulEl.appendChild(liEl);
//   liEl.textContent = frankie.likes[i];
// }
// // create image and set the src  attribute to frankie image path then append it to the article
// var imgEl = document.createElement("img");
// articleEl.appendChild(imgEl);
// imgEl.setAttribute("src", frankie.imagePath);

/*
<div id="kittenProfiles">
    <article>
          <h2>frankie</h2>
          <p>Frankie is adorable, and is 4 months old.</p>
          <ul>
            <li>cuddling</li>
            <li>chasing string</li>
          </ul>
          <img src="images/frankie.jpeg" />
        </article>
</div>
*/
