"use strict";

const log = console.log;
//The object stores a collection of methods for field validation.

let validator = {
  //Checks whether the string is a valid email address.
  validateEmail: function validateEmail(exp) {
    let cheksEmail =
      /^([\w\d]{1,}[\w\d+.-]{1,19}@)([\w\d.!$%&’*+/=?^_-]){1,15}\.(\w\D{1,5})$/g;
    let result = exp.match(cheksEmail);
    log(`Email is valid: ${result!==null?result:"error"}`);
    return result !== null;
  },
  //Checks if the phone number is valid.
  validatePhone: function validatePhone(exp) {
    if (exp.lenght >= 25) {
      return false;
    }
    let cheksPhone =
      /^([\s\-]+)?(\+(([\s\-]+)?\d){2})?([\s\-]+)?\(?([\s\-]+)?0(([\s\-]+)?\d){2}([\s\-]+)?\)?(([\s\-]+)?\d){7}([\s\-]+)?$/g;
    let result = exp.match(cheksPhone);
    log(`Telephone number is valid: ${result!==null?result:"error"}`);
    return result !== null;
  },
  //Cheks if the password is walid.
  validatePassword: function validatePassword() {
    let cheksPassword = /^(?=\w{8,})(?=\w*[A-Z])(?=\w*[a-z])(?=\w*[\d])\w+/g;
    let result = exp.match(cheksPassword);
    log(`Passvird is valid: ${result!==null?result:"error"}`);
    return result !== null;
  },
};

let exp = "2+.2yE-m3.ai-l+245@h3.!$%&’*+/=?^_.ggfgf";
//let exp = "Cool_pass1";
let res = validator.validateEmail(exp);
log(res);
res = validator.validatePhone(exp);
log(res);
res = validator.validatePassword(exp);
log(res);
