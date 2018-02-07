import React from 'react';

// snake plant paths
import SnakeyA from '../components/SVGs/SnakeyA.js';
import SnakeyB from '../components/SVGs/SnakeyB.js';
import SnakeyC from '../components/SVGs/SnakeyC.js';

// external link icons
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import stackoverflow from '../images/stackoverflow.png';

// external link addresses
const GitHubURL = "https://github.com/wilcook/wiljago.com";
const StackOverflowURL = "https://stackoverflow.com/users/6845618/wiljago";
const LinkedInURL = "http://linkedin.com/in/wilcook";

// snake plant color array
const colors = ["#e7e8d4", "#003333", "#8f9a5e", "#ffff94", "#4D8C57", "#00755E", "#C9A0DC", "#AFE313", "#B33B24", "#FD0E35", "#00CC99", "#01786F", "#76D7EA", "#805533"];

// snake plant random color picker
const snakeColorA = colors[Math.floor(Math.random() * colors.length)]
const snakeColorB = colors[Math.floor(Math.random() * colors.length)]
const snakeColorC = colors[Math.floor(Math.random() * colors.length)]

const IndexPage = () => (
  <div>
  <div className="snek">
    <SnakeyB color={ snakeColorB }/>
    <SnakeyA color={ snakeColorA }/>
    <SnakeyC color={ snakeColorC }/>
  </div>
    <div  className="mainBio">
    <p>
     Wil Cook is a professional web designer and developer available for hire. He primarily works in Node.js, and especially loves React and React-Native.
     </p>
     <p>
     This site was built using React.Js and Gatsby. Please click on the GitHub logo below to see the code and learn more.
     </p>
     <div className="logos">
      <a href={ GitHubURL }>
      <img src={ github } height="30px" alt="GitHub" />
      </a>
     </div>
     <div className="logos">
     <a href={ StackOverflowURL }>
      <img src={ stackoverflow } height="30px" alt="GitHub" />
      </a>
     </div>
     <div className="logos">
     <a href={ LinkedInURL }>
      <img src={ linkedin } height="30px" alt="LinkedIn" />
      </a>
     </div>
    </div>
  </div>
)

export default IndexPage
