import React, { Component } from "react";
import PropTypes from "prop-types"

export class NewsItem extends Component {
  static PorpTypes = {}
  constructor() {
    super()
    console.log("Constructor Say's Hello!!")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    let { title, description, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src="./public/download.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a /*href={newsUrl}*/ target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem;