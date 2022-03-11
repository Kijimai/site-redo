import MoUPreview from "../images/MoUPreview.jpg"
import loopPreview from "../images/loopstudios_preview.jpg"
import devFinderPreview from "../images/devfinder_preview.jpg"
import splitterPreview from "../images/splitter_preview.jpg"

const Projs = [
  {
    title: "Github User Search",
    liveUrl: "https://github-user-searcher-kijimai.netlify.app/",
    codeUrl: "https://github.com/Kijimai/fem-github-search",
    description:
      "A minimalistic web app built in React that utilizes the github API to pull a user's basic information like displaying repository count and follower counts. I've also integrated a dark / light mode that saves the user's preferences on the next visit. The original design was created by Frontend Mentor and all of the coding was done by me.",
    stack: ["React", "Sass", "Axios"],
    imgUrl: devFinderPreview,
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
