import Home from "./Components/Home"
import WhyBuy from "./Components/WhyBuy"
import Team from "./Components/Team"
import Blog from "./Components/Blog"
import GetInTouch from "./Components/GetInTouch"

// const components = {
//   home: Home,
//   whybuy: WhyBuy
// }
// const removeAllPunctuationAndSpaces = original => {
//   const punctuationless = original
//     .replace(/[^\w\s]|_/g, "")
//     .replace(/\s+/g, " ")
//   const finalString = punctuationless.replace(/ /g, "")
//   return finalString.toLowerCase()
// }
const websiteText = {
  routes: [
    {
      text: "Home",
      path: "",
      component: Home
    },
    {
      text: "Why buy?",
      path: "why-buy",
      component: WhyBuy
    },
    {
      text: "Team",
      path: "team",
      component: Team
    },
    {
      text: "Blog",
      path: "blog",
      component: Blog
    },
    {
      text: "Get in Touch",
      path: "get-in-touch",
      component: GetInTouch
    }
  ],
  main: "Pluto Travel Insurance"
}

export default websiteText
