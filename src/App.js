import React, { Component } from "react"
import "./App.css"
import Bar from "./Components/appBar"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme"
import Intercom from "react-intercom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as WebsiteText from "./copy"
import ReactPixel from "react-facebook-pixel"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
// import withTracker
import withTracker from "./Components/GoogleAnalytics/withTracker"

ReactPixel.init(process.env.REACT_APP_FACEBOOK_TRACK, "", {
  autoConfig: true,
  debug: false
})

ReactGA.initialize({
  trackingId: process.env.REACT_APP_GOOGLE_TRACK_ID,
  debug: false
})

ReactGA.ga("require", process.env.REACT_APP_GOOGLE_OPTIMIZE_CONTAINER_ID)

// history.listen((location) => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname, 'High Level Journeys / Flows');
// });

class App extends Component {
  componentDidMount() {
    hotjar.initialize(
      process.env.REACT_APP_HOTJAR_TRACK_ID,
      process.env.REACT_APP_VERSION
    )
  }
  render() {
    return (
      <Router>
        <div>
          <ThemeProvider theme={theme}>
            <div id="cssMenu">
              <Bar />
            </div>
            <div className="restOfContent--hide" id="restOfContent">
              {WebsiteText.default.routes.map((route, i) => {
                return (
                  <Route
                    key={"route" + i}
                    path={"/" + route.path}
                    exact
                    render={props => (
                      <route.component
                        {...props}
                        hideLoader={this.props.hideLoader}
                      />
                    )}
                  />
                )
              })}
            </div>

            <Intercom appID={process.env.REACT_APP_INTERCOM} />
          </ThemeProvider>
        </div>
      </Router>
    )
  }
}

export default App

// Need to get this iteration correct... home might need a new one
// or just make /home also render the home component as well as / on its own
