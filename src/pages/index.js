import React from 'react';
import Link from 'gatsby-link';
import SnakeyA from '../components/SVGs/SnakeyA.js'
import SnakeyB from '../components/SVGs/SnakeyB.js'
import SnakeyC from '../components/SVGs/SnakeyC.js'

const colors = ["#e7e8d4", "#003333", "#8f9a5e", "#ffff94", "#4D8C57", "#00755E", "#C9A0DC", "#AFE313", "#B33B24", "#FD0E35", "#00CC99", "#01786F", "#76D7EA", ]
const snakeColorA = colors[Math.floor(Math.random() * colors.length)]
const snakeColorB = colors[Math.floor(Math.random() * colors.length)]
const snakeColorC = colors[Math.floor(Math.random() * colors.length)]

const IndexPage = () => (
  <div>
    <div  className="mainBio">
    <SnakeyB color={ snakeColorB }/>
    <SnakeyA color={ snakeColorA }/>
    <SnakeyC color={ snakeColorC }/>
    Wiljago is pronounced "wil-ZHA-goh," but the nickname Wil is a lot easier to say.
     Wil is a professional web designer and developer available for hire. He primarily works in Node.js, and especially loves React and React-Native.
     <a target="blank" href="http://linkedin.com/in/wilcook">
     </a>

    </div>
  </div>
)

export default IndexPage
