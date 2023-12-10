"use strict";

const Clothes = require("./Clothes");
const Electronics = require("./Electronics");
const clothes = require("./clothesList");
const electronics = require("./electronicsList");
//const Product = require("../Product");
//const searchProducts = require("./functions").searchProducts;
//const sortProducts = require("./functions");

//test add size.
let cloth = clothes[1];
console.log(cloth.getFullInformation());
console.log("************test add size.***************");
cloth.addSize("BIG");
console.log(cloth.sizes);

//test remove size.
console.log("************test delete size.***************");
cloth.deleteSize("XL");
console.log(cloth.sizes);

//test active size.
console.log("************test active size.***************");
console.log(cloth.activeSize);
cloth.activeSize = ["XXL", "L"];
console.log(cloth.activeSize);

//test price for quantity.
console.log("************test get price for quantity.***************");
console.log(cloth.getPriceForQuantity(10));

//Test search product.

console.log("************test search product.***************");
/*The search function in the array of objects that contain the text "search" 
in the name or description.*/
function searchProducts(products = [], search = "search") {
  let length = search.length;
  search = (
    search.endsWith("*") ? search.slice(0, length - 1) : search + " "
  ).toLowerCase();
  let result = [];
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(search)) {
      console.log(product.name);
      result.push(product);
    }
  });
  return result;
}

console.log(searchProducts(clothes, "j*").map((item) => item.name));

console.log("************test sort product.***************");
/*The function of sorting an array of objects by the specified attribute. 
  Sorting by price, name and ID is supported.*/
function sortProducts(products = [], sortRule = "") {
  switch (sortRule) {
    case "sortName":
      if (sortRule == "sortName") {
        sortRule = sortName;
      }
      break;
    case "sortPrice":
      if (sortRule == "sortPrice") {
        sortRule = sortPrice;
      }
      break;
    case "sortID":
      if (sortRule == "sortID") {
        sortRule = sortID;
      }
      break;
    default:
      break;
  }
  //The function performs the sorting rule for the name
  function sortName(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }
  // //The function performs the sorting rule for the price.
  function sortPrice(a, b) {
    return +a.price - +b.price;
  }
  //The function performs the sorting rule for the ID.
  function sortID(a, b) {
    return +a.ID - +b.ID;
  }
  products.sort(sortRule);
}
console.log("unsort");
console.log(clothes.map((item) => item.name));
console.log("sort by name");
sortProducts(clothes, "sortName");
console.log(clothes.map((item) => item.name));
console.log("sort by price");
sortProducts(clothes, "sortPrice");
console.log(clothes.map((item) => item.price));
console.log("sort by ID");
sortProducts(clothes, "sortID");
console.log(clothes.map((item) => item.ID));

let review1 = new Reviews("", "Jhon", {}, "extremely useful thing", {
  service: 5,
  price: 4,
  value: 3,
  quality: 5,
});
let review2 = new Reviews("", "Max", {}, "extremely useful thing", {
  service: 2,
  price: 5,
  value: 2,
  quality: 4,
});
let review3 = new Reviews(
  "",
  "Enn",
  {},
  "not satisfied with the quality of the product",
  { service: 3, price: 4, value: 1, quality: 1 }
);

cloth.reviews = review1;

console.log(cloth.getFullInformation);
