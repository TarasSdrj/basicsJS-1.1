const index = require("./index");

class msgFrom extends index {
  constructor(text) {
    super();
    this.text = text;
  }
}

let obj = new msgFrom("aliss","pedro","call to my");
obj.name="kris";
obj.setname = "kolin";

console.log(obj);
console.log("*****************");
console.log(obj.prototype);
console.log("*******************");
console.log(obj.__proto__);

// let num = 25;
// console.log(num.prototype);
// console.log(num.__proto__);
//console.log(num.getPrototypeOf());
