import MoUPreview from "../images/MoUPreview.jpg"
import loopPreview from "../images/loopstudios_preview.jpg"
import devFinderPreview from "../images/devfinder_preview.jpg"
import splitterPreview from "../images/splitter_preview.jpg"
import adviceGenPreview from "../images/advice-gen-preview.png"
import interactivePreview from "../images/interactive-rating-preview.png"
import rpsPreview from "../images/rps-preview.png"
import expensesPreview from "../images/expenses-preview.png"

const Projs = [
  {
    title: "Expense Chart Component",
    liveUrl: "https://expenses-react-fem.netlify.app/",
    codeUrl: "https://github.com/Kijimai/expenses-chart-react-vite",
    description:
      "A reusable react component that dynamically display a bar graph based on one week's expenditures. Built with ViteJS and React with Styled Components.",
    stack: ["React", "Styled Components"],
    imgUrl: expensesPreview,
  },
  {
    title: "Advice Generator",
    liveUrl: "https://advice-gen-reactjs.netlify.app/",
    codeUrl: "https://github.com/Kijimai/fem-advice-react",
    description:
      "A standalone component app that retrieves random advice from Advice Slip API. Sure to give the user a useful piece of advice!",
    stack: ["React", "Sass", "Axios"],
    imgUrl: adviceGenPreview,
  },
  {
    title: "Interactive Rating Component",
    liveUrl: "https://interactive-rating-component-reactjs.netlify.app/",
    codeUrl: "https://github.com/Kijimai/fem-interactive-react",
    description:
      "A simple reusable component that logs the user's chosen rating for any particular product or service. It uses react's state management to temporarily store user input.",
    stack: ["React", "Sass"],
    imgUrl: interactivePreview,
  },
  {
    title: "Github User Search",
    liveUrl: "https://github-user-searcher-kijimai.netlify.app/",
    codeUrl: "https://github.com/Kijimai/fem-github-search",
    description:
      "A minimalistic web app built in React that utilizes the github API to pull a user's basic information like displaying repository count and follower counts. The original design was created by Frontend Mentor and all of the coding was done by me.",
    stack: ["React", "Sass", "Axios"],
    imgUrl: devFinderPreview,
  },
  {
    title: "Extreme Rock Paper Scissors",
    liveUrl: "https://kijimai.github.io/extreme-rock-paper-scissors/",
    codeUrl: "https://github.com/Kijimai/extreme-rock-paper-scissors",
    description:
      "A short and fun rock and paper scissors game built in HTML, CSS and Vanilla Javascript. The player can choose from a choice of 6 diverse characters and a secret hidden character! The theme was heavily influenced by the Street Fighter series.",
    stack: ["HTML", "CSS", "Javascript"],
    imgUrl: rpsPreview,
  },
  {
    title: "LoopStudios Landing Page",
    liveUrl: "https://loopstudios-react-kijimai.netlify.app/",
    codeUrl: "https://github.com/Kijimai/loopstudios-react",
    description:
      "I built the website in order to help solidify my knowledge of working with Sass and css grid as I've struggled to grasp the concepts of Sass . The website was designed by Frontend Mentor and the code was all done by me.",
    stack: ["React", "Sass"],
    imgUrl: loopPreview,
  },
  {
    title: "Splitter",
    liveUrl: "https://kijimai.github.io/tip-calculator-app/",
    codeUrl: "https://github.com/Kijimai/tip-calculator-app",
    description:
      "This web app helped me to better understand Javascript fundamentals as well as getting better practice using flexbox and css grid for laying out the page. The design was created by Frontend Mentor and all coded by me.",
    stack: ["HTML", "CSS", "Javascript"],
    imgUrl: splitterPreview,
  },
  {
    title: "Masters of Unlocking",
    liveUrl: "https://kijimai.github.io/Locksmith-website/",
    codeUrl: "https://github.com/Kijimai/Locksmith-website",
    description:
      "A website I created in order to solidify my understanding of site layout on top of the basics of HTML, CSS, and DOM manipulation using javascript. The design of the website was also created and planned by me as am exercise in design.",
    stack: ["HTML", "CSS", "Javascript"],
    imgUrl: MoUPreview,
  },
]

export default Projs
