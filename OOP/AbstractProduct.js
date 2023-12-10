"use strict";

function AbstractProduct(
  ID = "",
  name = "",
  description = "",
  price = "",
  //sizes = ["XS", "S", "M", "L", "XL", "XXL"],
  // activeSize = "",
  brand = "",
  quantity = 0,
  date = {},
  reviews = [{}],
  images = [""]
) {
  if (this.constructor === AbstractProduct) {
    throw new Error("Cannot instantiate abstract class");
  }
  this.ID = ID; //product key - type String.
  this.name = name; //product name - type String.
  this.description = description; //short description - type String.
  this.price = price; //product price - type String.
  //this.sizes = sizes; //array of size - type array of string ['XS', 'S', 'M', 'L', 'XL', 'XXL'].
  //this.activeSize = activeSize; //active size - tipe String.
  this.brand = brand; //product brand - type String.
  this.quantity = quantity; //Quantity of products in stock - type integer.
  this.date = new Date(); //date - type Date {date(YYYY-MM-dd hh:mm:ss)}.
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
    get reviews() {
      return this.reviews;
    },
  };

  /*universal method for getting and setting object properties.
  If two parameters (prop, value) are passed - sets the new value of the property.
  If one parameter is passed - returns the value of the property.*/
  AbstractProduct.prototype.setGet = function (prop, value) {
    //console.log(prop);
    //console.log(value);
    for (const key of Object.keys(this)) {
      if (key === prop) {
        if (typeof value !== "undefined") {
          typeof value === typeof this[prop]
            ? (this[prop] = value)
            : console.log("type error");
          return console.log("a new value is set");
        }
        console.log(this[prop]);
        return this[prop];
      }
      //console.log(key + "** " + this[key]);
    }
    throw new Error("Object has no property");
  };

  /*Returns the image according to the passed parameter, if the parameter was not passed,
     then the first image from the array.*/
  this.getImage = function getImage(n = 0) {
    return n.typeof == Number
      ? images.length < n
        ? images[n]
        : images[0]
      : images[0];
  };

  //Adds a "review" object to the "reviews" array
  this.addReview = function addReview(
    ID = "",
    author = "",
    date = {},
    comment = "",
    rating = []
  ) {
    reviews.push(
      new Reviews(
        (ID = ""),
        (author = ""),
        (date = {}),
        (comment = ""),
        (rating = [])
      )
    );
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
//Will return a string containing the values ​​of all available properties.
AbstractProduct.prototype.getFullInformation = function () {
  throw new Error(
    "please implement function will return a string containing the value" +
      "of all available properties."
  );
};
//Returns the price for n products of the given type in formatted form, for example: "$12.40"
AbstractProduct.prototype.getPriceForQuantity = function (int) {
  throw new Error(
    "Please implement functin will Returns the price for n products of the " +
      "given type in formatted form, for example: $12.40"
  );
};

function Reviews(ID = "", author = "", date = {}, comment = "", rating = []) {
  this.ID = ID; //String
  this.author = author; //String
  this.date = new Date(); // Date
  this.comment = comment; //String
  this.rating = rating; // Associate Array-rating["key"]=value;
  //key one of 'service', 'price', 'value','quality'
}

module.exports = AbstractProduct;


// let abstrPr = new AbstractProduct(
//   "123",
//   "jeans",
//   "wow wow",
//   "5",
//   "levais",
//   [{}],
//   ["1"]
// );
// console.log(abstrPr);
// abstrPr.setGet("price");
// abstrPr.setGet("price","22");
// abstrPr.setGet("price");
// abstrPr.addReview(('123', 'Jhon',{}, 'extremely useful thing', {'service': 5, 'price':4, 'value':3,'quality':5}));
// console.log(AbstractProduct.reviews);