import axios from "axios";

token = "5d0bdc15-50d5-4ca0-853d-1a63ca90efaa"

axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
 headers: {
   'X-CMC_PRO_API_KEY': token, 
 } //the token is a variable which holds the token
 }).then(function(req)  {
  //  console.log(req);
  console.log(req.data.data);
 console.log(req.data.data[0].quote.USD.price);
})

export default {
  
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};




