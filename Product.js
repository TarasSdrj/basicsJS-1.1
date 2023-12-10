//
"use strict";
function Product(
  ID = "",
  name = "",
  description = "",
  price = "",
  brand = "",
  sizes = ["XS", "S", "M", "L", "XL", "XXL"],
  activeSize = "",
  quantity = 0,
  date,
  reviews = [{}],
  images = [""]
) {
  this.ID = ID; //product key - type String.
  this.name = name; //product name - type String.
  this.description = description; //short description - type String.
  this.price = price; //product price - type String.
  this.brand = brand; //product brand - type String.
  this.sizes = sizes; //array of size - type array of string ['XS', 'S', 'M', 'L', 'XL', 'XXL'].
  this.activeSize = activeSize; //active size - tipe String.
  this.quantity = quantity; //Quantity of products in stock - type integer.
  this.date = Date(); //date - type Date {date(YYYY-MM-dd hh:mm:ss)}.
  this.reviews = reviews; //reviews - type array of object().
  this.images = images; //images - tupe array of String.
  this.prototype = {
    set ID(ID) {
      this.ID = ID; //product key - type String.
    },
    get ID() {
      return this.ID;
    },
    set name(name) {
      this.name = name; //product name - type String.
    },
    get name() {
      return this.name;
    },
    set description(description) {
      this.description = description; //short description - type String.
    },
    get description() {
      return this.description;
    },
    set price(price) {
      this.price = price; //product price - type String.
    },
    get price() {
      return this.price;
    },
    set brand(brand) {
      this.brand = brand; //product brand - type String.
    },
    get brand() {
      return this.brand;
    },
    set sizes(sizes) {
      this.sizes = sizes; //array of size - type array of string ['XS', 'S', 'M', 'L', 'XL', 'XXL'].
    },
    get sizes() {
      return this.sizes;
    },
    set activeSize(activeSize) {
      this.activeSize = activeSize; //active size - tipe String.
    },
    get activeSize() {
      return this.activeSize;
    },
    set quantity(quantity) {
      this.quantity = quantity; //Quantity of products in stock - type integer.
    },
    get quantity() {
      return this.quantity;
    },
    set images(images) {
      this.images = images; //images - tupe array of String.
    },
    get images() {
      return this.images;
    },
  };
  //Returns the image according to the passed parameter, if the parameter was not passed,
  // then the first image from the array.

  this.getImage = function getImage(n = 0) {
    return n.typeof == Number ? images[n] : images[0];
  };
  //Adds a new value to the "sizes" array
  this.addSize = function addSize(size) {
    this.sizes.push(size);
  };
  //Deletes the values ​​of the "sizes" array by the given key.
  this.deleteSize = function deleteSize(size) {
    sizes.splice(sizes.indexOf(size, 0), 1);
  };
  //Adds a "review" object to the "reviews" array
  this.addReview = function addReview() {
    reviews.push(Reviews());
  };
  //Deletes the "review" object from the "reviews" array by the given key (ID)
  this.deleteReview = function deleteReview(ID) {
    reviews.forEach((review) => {
      if (review.ID === ID) {
        reviews.splice(reviews.indexOf(review, 0), 1);
      }
    });
  };
  //Returns the average product rating.
  this.getAverageRating = function getAverageRating() {
    let result = 0;
    reviews.forEach((rating) => {
      result += rating;
    });
    return result / reviews.length;
  };
}

function Reviews(ID = "", author = "", date = {}, comment = {}, rating = []) {
  this.ID = ID; //String
  this.author = author; //String
  this.date = Date(); // Date
  this.comment = comment; //String
  this.rating = rating; // Associate Array-rating["key"]=value;
  //key one of 'service', 'price', 'value','quality'
}

/*The search function in the array of objects that contain the text "search" 
in the name or description.*/
function searchProducts(products = [], search = "search") {
  let length = search.length;
  search = (
    search.endsWith("*") ? search.slice(0, length - 1) : search + " "
  ).toLowerCase();
  let result = [];
  products.forEach((product) => {
    if (product.name.toLowerCase.includes(search)) {
      result.push(product);
    }
  });
  return result;
}

/*The function of sorting an array of objects by the specified attribute. 
Sorting by price, name and ID is supported.*/
function sortProducts(products, sortRule) {
  products.sort(sortRule);
}
//The function performs the sorting rule for the name
function sortName(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}
//The function performs the sorting rule for the price.
function sortPrice(a, b) {
  return +a.price - +b.price;
}
//The function performs the sorting rule for the ID.
function sortID(a, b) {
  return +a.ID - +b.ID;
}

module.exports = Product;

// let prod = new Product(12331233, "jeck");
// prod.name = "xxx";
// console.log(prod);
// console.log(prod.ID);
// console.log(prod.sizes);
// prod.addSize("XXXL");
// console.log(prod.sizes);
// prod.deleteSize("XL");
// console.log(prod.prototype.__proto__);
// console.log(Object.keys(prod));
// console.log(prod.valueOf());
// console.log(prod.toString());
