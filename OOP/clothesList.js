const Clothes = require("./Clothes");

//creat clothes objects
let pants1 = new Clothes(
  "cotton",
  "blue",
  "123",
  "pants jeans",
  "wow wow",
  "5",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "levais",
  12,
  [{}],
  ["1"]
);
let pants2 = new Clothes(
  "elastan",
  "blue",
  "124",
  "sport",
  "wow oh wow",
  "7",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "nike",
  23,
  [{}],
  ["2"]
);
let pants3 = new Clothes(
  "cotton",
  "blue",
  "125",
  "sport",
  "wow wow wow",
  "15",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "adidas",
  11,
  [{}],
  ["3"]
);
let capRed = new Clothes(
  "skin",
  "black",
  "223",
  "headCap",
  "wow",
  "2",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "D&G",
  65,
  [{}],
  ["4"]
);
let capBlue = new Clothes(
  "bellows",
  "white",
  "224",
  "winter cap",
  "wow cold",
  "4",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "G&G",
  34,
  [{}],
  ["5"]
);
let capGreen = new Clothes(
  "bellows ",
  "blue",
  "225",
  "winter cap",
  "wow wow",
  "8",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "star",
  29,
  [{}],
  ["6"]
);
let coathRed = new Clothes(
  "cotton",
  "red",
  "323",
  "jeans coath",
  "one",
  "1",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "levis",
  14,
  [{}],
  ["7"]
);
let coathBlue = new Clothes(
  "cotton",
  "blue",
  "324",
  "jeans coath",
  "tvo",
  "2",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "levis",
  12,
  [{}],
  ["8"]
);
let coathGreen = new Clothes(
  "cotton",
  "green",
  "325",
  "jeans coath",
  "three",
  "3",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "levis",
  9,
  [{}],
  ["9"]
);
let scarfRed = new Clothes(
  "cotton",
  "red",
  "423",
  "scarf",
  "wow wow",
  "4",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "SCF",
  5,
  [{}],
  ["10"]
);
let scarfBlue = new Clothes(
  "cotton",
  "blue",
  "424",
  "scarf",
  "wow wow",
  "5",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "SCF",
  32,
  [{}],
  ["11"]
);
let scarfGreen = new Clothes(
  "cotton",
  "green",
  "425",
  "scarf",
  "wow wow",
  "6",
  ["XS", "S", "M", "L", "XL", "XXL"],
  [],
  "SCF",
  0,
  [{}],
  ["12"]
);
//add clothes objects in array.
const clothes = [
  pants1,
  pants2,
  pants3,
  capRed,
  capBlue,
  capGreen,
  coathRed,
  coathBlue,
  coathGreen,
  scarfRed,
  scarfBlue,
  scarfGreen,
];

module.exports = clothes;
