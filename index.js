var key=Symbol('js');
var ob={};
ob['name']='JavaScript';
ob[key]='test';
for(a in ob)console.log(a);
var symbols=Object.getOwnPropertySymbols(ob);
console.log( symbols[0].toString() );
console.log(typeof symbols[0])


