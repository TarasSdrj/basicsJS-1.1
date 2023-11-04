function sortProducts(products, sortRule){
    console.log("1111111111111111");
    let data = new Date();
    console.log(data.getTime());
    products.sort(sortRule);
}


let products = [
    {id:5, namE:"t", val:34},
    {id:8, namE:"w", val:32},
    {id:6, namE:"g", val:222},
    {id:2, namE:"e", val:144}
]
let arr=[
    {name:'Петро', year:1995},
    {name:'Микола', year:2001}, 
    {name:'Оля', year:1999}, 
    {name:'Денис', year:2005}, 
    {name:'Діана', year:1996}, 
    {name:'Ярослав', year:1991}];

//функція сортування по року
function sortYear(a,b){
  if(a.year>b.year)return 1;
  if(a.year<b.year)return -1;
  return 0;
}
//функція сортування по імені
function sortName(a,b){
  if(a.name>b.name)return 1;
  if(a.name<b.name)return -1;
  return 0;
}
console.log(arr);
//arr.sort(sortYear);
sortProducts(arr, sortYear);
console.log(arr);

arr.sort(sortName);
console.log('сортування по name: '+JSON.stringify(arr));

//sortProducts(arr, sortYear);

sortRule="id";

//console.log(products);
//products.sort(s);
//console.log(products);

//sortProducts(products, sortRule);