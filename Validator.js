const log = console.log;
//The object stores a collection of methods for field validation

let validator = {
    //Checks whether the string is a valid email address.
    validateEmail: function validateEmail(exp){
    
    let cheksEmail =
      /^([\w\d]{1,}[\w\d+.-]{1,19}@)([\w\d.!$%&’*+/=?^_-]){1,15}\.(\w\D{1,5})$/g;
    result = exp.match(cheksEmail)
    log(result);
    return result !== null;
  },
  cheksPhone: function validatePhone(exp){

    let cheksPhone =/ /;
    result = exp.match(cheksPhone)
    log(result);
    return result !== null;
  },
  //chekPassword: validatePassword(),
};


let res = validator.validateEmail("2+.2yE-m3.ai-l+245@h3.!$%&’*+/=?^_.ggfgf");
log(res);
