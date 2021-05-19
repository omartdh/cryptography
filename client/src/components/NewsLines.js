import React, { Component } from "react";
import API from "../utils/Api2";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  headline1 = "";
  
  componentDidMount() {
   this.searchNews("crypto");     
  }

  searchNews = query => {
    API.search(query)
      .then(res => {
        this.setState({results:res.data.articles})
        console.log(this.state.results)
        
      }) 
      .catch(err => console.log(err));
      
  };

  
 
//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

  // When the form is submitted, search the Giphy API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchGiphy(this.state.search);
//   };

  render() {
    return (
      <div>
        <div>
          <ul>
          {this.state.results.map( res => <li>{res.title}</li>)}
          </ul>
        </div>
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default SearchResultContainer;
