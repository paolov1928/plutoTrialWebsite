import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { InView } from "react-intersection-observer"
import "../App.css"

class GetInTouch extends Component {
  componentDidMount() {
    // If you entered the site on this page need to hide the loader
    if (!document.querySelector(".loader--hide")) {
      this.props.hideLoader()
    }
  }
  render() {
    return (
      <Fragment>
        <div className="longFiller">
          <h1>Get In Touch (ft Lazy Load)</h1>
        </div>
        <Link to="/">Home</Link>

        <InView rootMargin="20px">
          {({ inView, ref }) => (
            <div ref={ref}>
              {inView ? (
                <img
                  src={
                    "http://www.mariacenoura.pt/ptpictures/f/52/527090_32k-resolution-wallpaper.jpg"
                  }
                  alt="boohoo"
                  className="img-responsive"
                />
              ) : (
                `This text inside viewport ${inView}.`
              )}
            </div>
          )}
        </InView>
      </Fragment>
    )
  }
}

export default GetInTouch
