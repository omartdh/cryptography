import axios from "axios";

const BASEURL = "https://newsapi.org/v2/top-headlines?q=";
const APIKEY = "&apiKey=5520d2398c314ea08934c7496ff4862c";
 

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
