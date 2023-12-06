let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  //let acc = 0;
  //let n=arr.lenght;
  return (num) => num - arr.reduce((acc, item) => acc + item.age, 0);
  // return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
let res = getAverageAge(arr)(12);
console.log(res);
arr = {
  Вінниця: { population: "356665", rating: 1 },
  "Біла Церква": { population: "200131", rating: 2 },
  Бердянськ: { population: "121692", rating: 3 },
  Бердичів: { population: "87575", rating: 4 },
  Алушта: { population: "31440", rating: 5 },
};
//arr.slice(0, 1);
function printRes(res) {
  Object.keys(arr).forEach((key) => console.log(res[key]));
  let keys = Object.keys(res);
  //console.log(res[key]);
  console.log(res[keys[0]]);
}
printRes(arr);
