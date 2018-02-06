import React from 'react';
import Link from 'gatsby-link';

// snake plant paths
import SnakeyA from '../components/SVGs/SnakeyA.js';
import SnakeyB from '../components/SVGs/SnakeyB.js';
import SnakeyC from '../components/SVGs/SnakeyC.js';

// external link icons
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import stackoverflow from '../images/stackoverflow.png';

// snake plant color array
const colors = ["#e7e8d4", "#003333", "#8f9a5e", "#ffff94", "#4D8C57", "#00755E", "#C9A0DC", "#AFE313", "#B33B24", "#FD0E35", "#00CC99", "#01786F", "#76D7EA", "#805533"];

// snake plant random color picker
const snakeColorA = colors[Math.floor(Math.random() * colors.length)]
const snakeColorB = colors[Math.floor(Math.random() * colors.length)]
const snakeColorC = colors[Math.floor(Math.random() * colors.length)]

const IndexPage = () => (
  <div>
    <div  className="mainBio">
    <SnakeyB color={ snakeColorB }/>
    <SnakeyA color={ snakeColorA }/>
    <SnakeyC color={ snakeColorC }/>
    <p>
     Wil Cook is a professional web designer and developer available for hire. He primarily works in Node.js, and especially loves React and React-Native.
     </p>
     <div className="logos">
      <img src={ github } height="30px" alt="GitHub" />
     </div>
     <div className="logos">
      <img src={ stackoverflow } height="30px" alt="GitHub" />
     </div>
     <div className="logos">
      <img src={ linkedin } height="30px" alt="LinkedIn" />
     </div>
    </div>
  </div>
)

export default IndexPage
