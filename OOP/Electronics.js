"use strict";

const AbstractProduct = require("./AbstractProduct");

function Electronics(
  warranty = 0,
  power = 0,
  ID = "",
  name = "",
  description = "",
  price = "",
  brand = "",
  quantity = 0,
  date = 0,
  reviews = [{}],
  images = [""]
) {
  AbstractProduct.call(this);
  this.warranty = warranty;
  this.power = power;
  this.ID = ID; //product key - type String.
  this.name = name; //product name - type String.
  this.description = description; //short description - type String.
  this.price = price; //product price - type String.
  this.brand = brand; //product brand - type String.
  this.quantity = quantity; //Quantity of products in stock - type integer.
  this.date = new Date(); //date - type Date {date(YYYY-MM-dd hh:mm:ss)}.
  this.reviews = reviews; //reviews - type array of object().
  this.images = images; //images - tupe array of String.

  this.prototype = {
    set warranty(warranty) {
      this.warranty = warranty;
    },
    get warranty() {
      return this.warranty;
    },
    set power(power) {
      this.power = power;
    },
    get power() {
      return this.power;
    },
  };
}
Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.getFullInformation = function () {
  let fullInfo = `  Warranty:${this.warranty}, Power:${this.power},
  ID:${this.ID}, Name: ${this.name},
  Description:${this.description}, 
  Price:${this.price}, Brand:${this.brand}, Quantity:${this.quantity}, 
  Data:${this.date}, 
  Revievs:${this.reviews}, Images:${this.images} `;
  //console.log(fullInfo);
  return fullInfo;
};

Electronics.prototype.getPriceForQuantity = function (quantity) {
  return `"\$${this.price * quantity}"`;
};

module.exports = Electronics;
