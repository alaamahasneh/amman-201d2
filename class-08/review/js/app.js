var shops = [];
var container = document.getElementById("cookiesShop");
var tableEl = document.createElement("table");
container.appendChild(tableEl);
var hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm"
];
function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesPerHour = [];
  this.total = 0;
  shops.push(this);
  this.getCookiesPerHour();
}
Shop.prototype.getRandomCustomer = function() {
  return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min;
};
Shop.prototype.getCookiesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(Math.floor(this.getRandomCustomer() * this.avg));
    this.total += this.salesPerHour[i];
  }
};
Shop.prototype.render = function() {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = this.name;
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement("td");
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var totalTdEl = document.createElement("td");
  trEl.appendChild(totalTdEl);
  totalTdEl.textContent = this.total;
};

var seattle = new Shop("Seattle", 23, 65, 6.3);
var tokyo = new Shop("Tokyo", 3, 24, 1.2);
var dubai = new Shop("Dubai", 11, 38, 3.7);
var paris = new Shop("Paris", 20, 38, 2.3);
var lima = new Shop("Lima", 2, 16, 4.6);

function renderHeader() {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var thEl = document.createElement("th");
  trEl.appendChild(thEl);
  thEl.textContent = " ";
  for (let i = 0; i < hours.length; i++) {
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
  var thEl = document.createElement("th");
  trEl.appendChild(thEl);
  thEl.textContent = "Total";
}
function renderFooter() {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = "Total";
  var megaTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    var sum = 0;
    for (let j = 0; j < shops.length; j++) {
      sum += shops[j].salesPerHour[i];
    }
    megaTotal += sum;
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = sum;
  }
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = megaTotal;
}

renderHeader();
for (let i = 0; i < shops.length; i++) {
  shops[i].render();
}
renderFooter();

//SEATTLE
// var seattle = {
//   name: "Seattle",
//   customers: 0,
//   cookies: 0,
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   total: 0,
//   arr: [],
//   time: [
//     "6am: ",
//     "7am: ",
//     "8am: ",
//     "9am: ",
//     "10am: ",
//     "11am: ",
//     "12pm: ",
//     "1pm: ",
//     "2pm: ",
//     "3pm: ",
//     "4pm: ",
//     "5pm: ",
//     "6pm: ",
//     "7pm: "
//   ],
//   getCustomers: function(min, max) {
//     return getRandomCustomers(min, max);
//   },
//   getCookies: function() {
//     for (var j = 0; j < this.time.length; j++) {
//       this.arr[j] = Math.floor(
//         this.getCustomers(this.min, this.max) * this.avg
//       );
//     }
//     for (var x = 0; x < this.arr.length; x++) {
//       this.total += this.arr[x];
//     }
//   },
//   render: function() {
//     var container = document.getElementById("cookiesShop");
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);

//     var h1El = document.createElement("h1");
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.time.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = this.time[i] + this.arr[i] + " cookies";
//       ulEl.appendChild(liEl);
//     }
//     ulEl.appendChild(liEl);
//     liEl.textContent = "total: " + this.total;
//   }
// };
