import React, { Component } from "react";
import API from "../../utils/Api2";
import "./style.css";

class SearchResult extends Component {
  state = {
    Loading: true,
    search: "",
    results: []
  };

  headline1 = "";

  componentDidMount() {
    this.searchNews("bitcoin");
    this.setState({ Loading: false })
  }

  searchNews = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.articles })
        console.log(this.state.results, "from Newsssss")

      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <>
        {!this.state.results.length > 0 ? (
          <div>Loading...</div>
        ) : (
            <div className="container" >
              <div>{console.log(this.state.results, "from render")}</div>
              <div className="row" >
                <div className="col-md-12">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div class="row">
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[0].url}><img src={this.state.results[0].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[0].url}>{this.state.results[0].title}</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[1].url}><img src={this.state.results[1].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[1].url}>{this.state.results[1].title}</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[2].url}><img src={this.state.results[2].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[2].url}>{this.state.results[2].title}</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">

                        <div class="row">
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[3].url}><img src={this.state.results[3].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[3].url}>{this.state.results[3].title}</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[4].url}><img src={this.state.results[4].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[4].url}>{this.state.results[4].title}</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="single-box">
                              <div className="img-area"><a href={this.state.results[5].url}><img src={this.state.results[5].urlToImage} alt="" /></a>
                              </div>
                              <div className="img-text">
                                <p><a href={this.state.results[5].url}>{this.state.results[5].title}</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )};
      </>
    );
  }
}

export default SearchResult;