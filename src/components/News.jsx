import React, { Component } from "react";
import PropTypes from "prop-types"
import NewsItem from "./NewsItem.jsx"
export class News extends Component {
  static PorpTypes = {}
  render() {
    return (
      <>
        <p>News Component</p>

        <NewsItem />
      </>
    )
  }
}

export default News;