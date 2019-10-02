import React, { Component, Fragment, Suspense } from "react"
import { Link } from "react-router-dom"
const OtherComponent = React.lazy(() => import("./OtherComponent"))

class Team extends Component {
  componentDidMount() {
    // If you entered the site on this page need to hide the loader
    if (!document.querySelector(".loader--hide")) {
      this.props.hideLoader()
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Team</h1>
        <Link to="/">Home</Link>
        <div>
          <Suspense
            fallback={<div className="loader">Loading the image!!!</div>}
          >
            <OtherComponent />
          </Suspense>
        </div>
      </Fragment>
    )
  }
}

export default Team
