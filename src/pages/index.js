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

const IndexPage = () => (
  <div>
  <div className="snek">
    <SnakeyB />
    <SnakeyA />
    <SnakeyC />
  </div>
    <div  className="mainBio">
    <p>
     Wil Cook is a professional web designer and developer who loves Node, React and React-Native. He has done design for print, web, and theater, and has shown video, sound art, and paintings as a fine artist. You can find him watching Gundam, and playing with his dog.
     </p>
     <p>
     Check back on February 19th to see preview artwork for a comic about mysterious space epiphytes, the scientists who study them, and the seasonal workers who deliver supplies to their research station out of the City of St Francis for minimum wage.
     </p>
     <p>
     Hit refresh to change the colors of the snake plants.
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
