"use strict";

const AbstractProduct = require("./AbstractProduct");

function Clothes(
  material = "",
  color = "",
  ID = "",
  name = "",
  description = "",
  price = "",
  sizes = ["XS", "S", "M", "L", "XL", "XXL"],
  activeSize = "",
  brand = "",
  quantity = 0,
  date = 0,

  reviews = [{}],
  images = [""]
) {
  AbstractProduct.call(this);
  this.material = material;
  this.color = color;
  this.ID = ID; //product key - type String.
  this.name = name; //product name - type String.
  this.description = description; //short description - type String.
  this.price = price; //product price - type String.
  this.brand = brand; //product brand - type String.
  this.sizes = sizes; //array of size - type array of string ['XS', 'S', 'M', 'L', 'XL', 'XXL'].
  this.activeSize = activeSize; //active size - tipe String.
  this.quantity = quantity; //Quantity of products in stock - type integer.
  this.date = new Date(); //date - type Date {date(YYYY-MM-dd hh:mm:ss)}.
  this.reviews = reviews; //reviews - type array of object().
  this.images = images; //images - tupe array of String.

  this.prototype = {
    set material(material) {
      this.material = material;
    },
    get material() {
      return this.material;
    },
    set color(color) {
      this.color = color;
    },
    get color() {
      return this.color;
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
  };
  //Adds a new value to the "sizes" array
  this.addSize = function addSize(size) {
    if (this.sizes.indexOf(size) == -1) {
      this.sizes.push(size);
    }
  };
  //Deletes the values ​​of the "sizes" array by the given key.
  this.deleteSize = function deleteSize(size) {
    if (this.sizes.indexOf(size) !== -1) {
      this.sizes.splice(this.sizes.indexOf(size, 0), 1);
    }
  };
}
Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.constructor = Clothes;
//Will return a string containing the values ​​of all available properties.
Clothes.prototype.getFullInformation = function () {
  let fullInfo = `  Material:${this.material}, Color:${this.color},
  ID:${this.ID}, Name: ${this.name},
  Description:${this.description}, 
  Sizes:${this.sizes}, ActiveSize:${this.activeSize}, 
  Price:${this.price}, Brand:${this.brand}, Quantity:${this.quantity}, 
  Data:${this.date}, 
  Revievs:${this.reviews}, Images:${this.images} `;
  //console.log(fullInfo);
  return fullInfo;
};
//Returns the price for n products of the given type in formatted form, for example: "$12.40"
Clothes.prototype.getPriceForQuantity = function (quantity) {
  return `"\$${this.price * quantity}"`;
};


module.exports = Clothes;
// module.exports = {
//   Clothes: Clothes,
//   Reviews: Reviews,
//   searchProducts: searchProducts,
//   sortProducts: sortProducts,
// };

//let coath = new Clothes("mex", "red", "1212");
//coath.getFullInformation();
//console.log(coath.getFullInformation());
// console.log("********** " + coath.ID);
