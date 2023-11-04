let search = 'SeaRch 1'

let length = search.length;
if(search.endsWith('*')){console.log('true')}

console.log(search.endsWith('*'));

search = (search.endsWith('*') ? search.slice(0,length-1) : search + ' '). toLowerCase();
console.log(length);
console.log(search);
let result = [];
// products.forEach(product => {
//   if(product.name.toLowerCase.indexOf(search) !== -1){

//   }

// });
console.log( search +1);



