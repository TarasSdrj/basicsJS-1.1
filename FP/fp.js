"use strict";

const rowCSV = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некомент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментарі :)`;

let text ="назва міста (Х місце в ТОП-10 найбільших міст України, населення УУУУУУ чоловік)";



/** 
 *The function parses the data in CSV format and returns a function to fill the text
 * with the received data.
 * @param {*} rowCSV - data in CSV format.
 * @returns returns a lambda function.
 */
function parsCSV(rowCSV) {
  let res = rowCSV
    .split("\n")                                      // parses a string into an array of strings.
    .filter((item) => !(item[0] == "#" || undefined)) // discards invalid rows.
    .map((item) => item.split(","))                   // parses each line into an array of expressions.
    .map(                                             // turns each array into a collection.
      (item) =>
        new Map(
          Object.entries({
            x: item[0],
            y: item[1],
            name: item[2],
            population: item[3],
          })
        )
    )
    .sort((a, b) => b.get("population") - a.get("population")) // sorts an array of collocations.
    .slice(0, 10)                                              // returns an array of 10 collections.
    .reduce(function (accumulator, item, index, array) {       // creates an object from a sorted array.
      if (item.get("name")) {
        accumulator[item.get("name").replace("#", "")] = new Map(
          Object.entries({
            population: item.get("population"),
            rating: index + 1,
          })
        );
      }
      return accumulator;
    }, new Object());

  //console.log(res); //uncoment for testing.

  //returns a lambda function that fill the passed text with the results of parsing.

  return (text) => {
    let value = Object.keys(res).reduce(function (
      accumulator,
      city,
      index,
      array
    ) {
      accumulator += `${city}${text.replace("назва міста", "")
        .replace("Х", res[city].get("rating"))
        .replace("УУУУУУ", res[city].get("population"))}\n`;
      //text.replace('назва міста','')
      return accumulator;
    },
    "");
    return value;
  };
}
//parsCSV(rowCSV);// uncoment fot testing.
console.log(parsCSV(rowCSV)(text));

