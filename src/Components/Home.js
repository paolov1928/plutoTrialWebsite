import React, { Fragment } from "react"
import ReactPlayer from "react-player"
import * as WebsiteText from "../copy"

const Home = props => {
  return (
    <Fragment>
      <header className="App-header">
        <h1>{WebsiteText.default.main}</h1>
      </header>
      <div className="App-header">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=VM5pmpevF1w"
          playing
          onReady={() => {
            if (!document.querySelector(".loader--hide")) {
              props.hideLoader()
            }
          }}
        />
      </div>
    </Fragment>
  )
}

export default Home
