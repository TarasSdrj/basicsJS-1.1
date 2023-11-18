"use strict";

const AbstractProduct = require("./AbstractProduct");
//module.exports = AbstractProduct;

class Clothes extends AbstractProduct {
  constructor(material = "", color = "") {
    super();
    this.material = material;
    this.color = color;
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
    };
  }
}

module.exports = Clothes;

let coath = new Clothes("mex", "red", "1212");
console.log(coath);
console.log("********** " + coath.ID);
