//Constructor of objects for reviews.
function Reviews(ID = "", author = "", date = {}, comment = "", rating = []) {
    this.ID = ID; //String
    this.author = author; //String
    this.date = Date(); // Date
    this.comment = comment; //String
    this.rating = rating; // Associate Array-rating["key"]=value;
    //key one of 'service', 'price', 'value','quality'
  }

  module.export=Reviews;

  let review1 =new Reviews('', 'Jhon',{}, 'extremely useful thing', {'service': 5, 'price':4, 'value':3,'quality':5});
  let review2 =new Reviews('', 'Max',{}, 'extremely useful thing', {'service': 2, 'price':5, 'value':2,'quality':4});
  let review3 =new Reviews('', 'Enn',{}, 'not satisfied with the quality of the product', 
  {'service': 3, 'price':4, 'value':1,'quality':1});