class Obj {
  constructor(name = "name") {
    // if (this.constructor === Obj) {
    //   throw new Error("Cannot instantiate abstract class");
    // }
    this.name = name;
    this.message = "world";
    this.prototype = {
      /**
       * @param {string} newName
       */
      set setname(newName) {
        this.name = name;
      },
      get name() {
        return this.name;
      },
    };
    return "hey";
  }
}

//exports = index.js;
module.exports = Obj;

let obj = new Obj("Sara");
obj.name = "Jek";
obj.setname = "setNAME";
//console.log(Obj("Sara"));
console.log(new Obj());
console.log("name - " + obj.name);
console.log("msg = " + obj.message);
