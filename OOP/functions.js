
/*The search function in the array of objects that contain the text "search" 
in the name or description.*/
function searchProducts(products = [], search = "search") {
    let length = search.length;
    search = (
      search.endsWith("*") ? search.slice(0, length - 1) : search + " "
    ).toLowerCase();
    let result = [];
    products.forEach((product) => {
      if (product.name.toLowerCase.includes(search)) {
        result.push(product);
      }
    });
    return result;
  }
  
  /*The function of sorting an array of objects by the specified attribute. 
  Sorting by price, name and ID is supported.*/
  function sortProducts(products, sortRule) {
    products.sort(sortRule);
  }
  //The function performs the sorting rule for the name
  function sortName(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  }
  //The function performs the sorting rule for the price.
  function sortPrice(a, b) {
    return +a.price - +b.price;
  }
  //The function performs the sorting rule for the ID.
  function sortID(a, b) {
    return +a.ID - +b.ID;
  }

  module.export = {
    searchProducts:searchProducts,
    sortProducts:sortProducts
  };