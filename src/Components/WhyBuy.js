import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { Parallax } from "react-parallax"
import weddingCake2 from "../images/IMG-20190523-WA0009.jpg"

const insideStyles = {
  background: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "2%"
}

const imageStyledWedding = {}

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
        <h1>Why Buy?</h1>
        <Link to="/">Home</Link>
        <Parallax
          bgImage={weddingCake2}
          strength={600}
          bgImageStyle={imageStyledWedding}
        >
          <div style={{ height: "130vh" }}>
            <div style={insideStyles}>
              <div className="fillerText scroll-about">
                {
                  <p variant="body1" className="introText">
                    <b>Parallax Scrolling in Action</b>
                  </p>
                }
              </div>
            </div>
          </div>
        </Parallax>
      </Fragment>
    )
  }
}

export default WhyBuy
