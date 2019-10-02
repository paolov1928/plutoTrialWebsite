/* eslint-disable react/prop-types */
/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { Component } from "react"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    })
    ReactPixel.pageView(page)
    if (window.hj && !page.includes("claims")) {
      window.hj("stateChange", page)
    }
    if (window.hjc && page.includes("claims")) {
      window.hjc("stateChange", page)
    }
  }

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location ? this.props.location.pathname : ""
      if (page) {
        trackPage(page)
      }
      if (page === "/welcome" || page === "/") {
        this.showCookieConsent(true)
      } else {
        this.showCookieConsent(false)
      }
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location
        ? this.props.location.pathname
        : ""
      const nextPage = nextProps.location ? nextProps.location.pathname : ""

      if (currentPage !== nextPage) {
        if (nextPage) {
          trackPage(nextPage)
        }
      }
    }

    showCookieConsent(isShow) {
      const $eles = document.querySelectorAll(".cc-revoke")
      if ($eles && $eles.length) {
        for (const e in $eles) {
          if ($eles[e].style) {
            $eles[e].style.display = isShow ? "block" : "none"
          }
        }
      }
    }

    trackEvent({ category, action, label, value, currency, event }) {
      if (currency) {
        ReactPixel.track(event, { value, currency })
      } else {
        ReactPixel.track("event", { category, action, label })
      }
      ReactGA.event({ category, action, label, value })
    }

    trackFacebookEvent({ event, value, currency }) {
      ReactPixel.track(event, { value, currency })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          trackEvent={this.trackEvent}
          trackFacebookEvent={this.trackFacebookEvent}
        />
      )
    }
  }

  return HOC
}
