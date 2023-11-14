const Clothes = require("./Clothes");

// ID = "",
// name = "",
// description = "",
// price = "",
// //sizes = ["XS", "S", "M", "L", "XL", "XXL"],
// // activeSize = "",
// quantity = 0,
// date,
// brand = "",
// reviews = [{}],
// images = [""]
//creat clothes objects
let pants1 = {
  ID: "123",
  name: "jeans",
  description: "wow wow",
  quantity: "5",
  brand: "puma",
  reviews: [{}],
  images: ["1"],
};
let pants2 = new Clothes("123", "jeans", "wow wow", "5", "levais", [{}], ["1"]);
let pants3;
let capRed;
let capBlue;
let capGreen;
let coatRed;
let coatBlue;
let coatGreen;
let scarfRed;
let scarfBlue;
let scarfGreen;
console.log(pants1);
console.log(pants2);