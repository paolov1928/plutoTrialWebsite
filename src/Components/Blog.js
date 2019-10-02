import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import BlogCard from "./BlogCard"

class WhyBuy extends Component {
  componentDidMount() {
    // If you entered the site on this page need to hide the loader
    if (!document.querySelector(".loader--hide")) {
      this.props.hideLoader()
    }
  }
  render() {
    return (
      <Fragment>
        <h1>Blog</h1>
        <Link to="/">Home</Link>
        <div className="blog-container">
          <BlogCard />
          <BlogCard />
        </div>
      </Fragment>
    )
  }
}

export default WhyBuy
