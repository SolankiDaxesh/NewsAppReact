import React, { Component } from "react";
import PropTypes from "prop-types"
import NewsItem from "./NewsItem.jsx"
export class News extends Component {
  static PorpTypes = {}
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.State.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}></NewsItem>
            </div>
          })}
          <div className="col-md-4">
            <NewsItem title="myTitle" description="description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="description" />
          </div>
        </div>
      </div >
    )
  }
}

export default News;