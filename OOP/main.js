const Clothes = require("./Clothes");
const Electronics = require("./Electronics");
const clothes = require("./clothesList");
const electronics = require("./electronicsList");
const Product = require("../Product");
const searchProducts=require("./functions").searchProducts;
const sortProducts = require("./functions").sortProducts;

//test add size.
let cloth = clothes[1];
console.log(cloth.getFullInformation());
console.log("************test add size.***************");
cloth.addSize("BIG");
console.log(cloth.getFullInformation());

//test remove size.
console.log("************test add size.***************");
cloth.deleteSize("XL");
console.log(cloth.getFullInformation());

//Test sort product.
let result ="";
let addSize = addSize("BIG");
clothes.forEach(addSize);
clothes.forEach(console.log);

    result+=cloth.name;
    console.log(cloth);

console.log(result);

//let reviev=addReviev("0", "elio",0,"koment - ok",2 )
console.log("************add reviev.***************");
cloth.addReview("124","ann",{},"ann comment", 10);
console.log(cloth.getFullInformation());
// for (let key in cloth) {
//     console.log(`${key}:${cloth[key]}`);
//     //console.log(cloth[key]);
//     // key - це ім'я властивості
//     // object[key] - це значення властивості
//   }



// console.log(Product);
// Product.sortProduct();


// console.log("************test electronics.***************");
// let electronic = electronics[1];
// console.log(electronic.getFullInformation());

//console.log(electronics);


//console.log(clothes[1]);
//console.log(electronics[1]);
//pants2.material = "cotton";
//console.log(pants2.getFullInformation());
//console.log(pants2.getPriceForQuantity(2));

//console.log("********" + clothes);

//console.log("Date: " + pants2.date);
