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
  //Checks if the phone number is valid.
  validatePhone: function validatePhone(exp){

    if(exp.lenght()>=25){
      return false;
    }
    let cheksPhone =/^([\s\-]+)?(\+(([\s\-]+)?\d){2})?([\s\-]+)?\(?([\s\-]+)?0(([\s\-]+)?\d){2}([\s\-]+)?\)?(([\s\-]+)?\d){7}([\s\-]+)?$/g;
    result = exp.match(cheksPhone)
    log(result);
    return result !== null;
  },
  //chekPassword: validatePassword(),
};


let res = validator.validateEmail("2+.2yE-m3.ai-l+245@h3.!$%&’*+/=?^_.ggfgf");
log(res);
