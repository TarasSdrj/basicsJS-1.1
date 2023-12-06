//Constructor of objects for reviews.
function Reviews(ID = "", author = "", date = {}, comment = {}, rating = []) {
    this.ID = ID; //String
    this.author = author; //String
    this.date = Date(); // Date
    this.comment = comment; //String
    this.rating = rating; // Associate Array-rating["key"]=value;
    //key one of 'service', 'price', 'value','quality'
  }

  module.export=Reviews;