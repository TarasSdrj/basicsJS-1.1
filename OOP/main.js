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
let pants1 = new Clothes("cotton", "blue", "123", "jeans", "wow wow", "5", "levais", [{}], ["1"]);
let pants2 = new Clothes("elastan", "blue", "124", "sport", "wow oh wow", "7", "naike", [{}], ["2"]);
let pants3= new Clothes("cotton", "blue", "125", "sport", "wow wow wow", "15", "adidas", [{}], ["3"]);
let capRed= new Clothes("skin", "black", "223", "headCao", "wow", "2", "D&G", [{}], ["4"]);
let capBlue= new Clothes("bellows", "white", "224", "winter", "wow cold", "4", "G&G", [{}], ["5"]);
let capGreen= new Clothes("bellows ", "blue", "225", "+jeans", "wow wow", "8", "star", [{}], ["6"]);
let coatRed= new Clothes("cotton", "red", "323", "jeans", "one", "1", "levais", [{}], ["7"]);
let coatBlue= new Clothes("cotton", "blue", "324", "jeans", "tvo", "2", "levais", [{}], ["8"]);
let coatGreen= new Clothes("cotton", "green", "325", "jeans", "three", "3", "levais", [{}], ["9"]);
let scarfRed= new Clothes("cotton", "red", "423", "jeans", "wow wow", "4", "levais", [{}], ["10"]);
let scarfBlue= new Clothes("cotton", "blue", "424", "jeans", "wow wow", "5", "levais", [{}], ["11"]);
let scarfGreen= new Clothes("cotton", "green", "425", "jeans", "wow wow", "6", "levais", [{}], ["12"]);
console.log(pants1);
//pants2.material = "cotton";
console.log(pants2);

console.log("Date: " + pants2.date);