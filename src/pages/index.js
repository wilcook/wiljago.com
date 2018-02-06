import React from 'react';
import Link from 'gatsby-link';
import SnakeyA from '../components/SVGs/SnakeyA.js'
import SnakeyB from '../components/SVGs/SnakeyB.js'
import SnakeyC from '../components/SVGs/SnakeyC.js'

const colors = ["#e7e8d4", "#003333", "#8f9a5e", "#ffff94", "#4D8C57", "#00755E", "#C9A0DC", "#AFE313", "" ]
const snakeColorA = colors[Math.floor(Math.random() * colors.length)]
const snakeColorB = colors[Math.floor(Math.random() * colors.length)]
const snakeColorC = colors[Math.floor(Math.random() * colors.length)]

const IndexPage = () => (
  <div className="mainBio">
    <div className = "firstSnek">
      <SnakeyB color={ snakeColorB }/>
      <SnakeyA color={ snakeColorA }/>
      <SnakeyC color={ snakeColorC }/>
    </div>
    <div className="nextSnek">
      <SnakeyA color={ snakeColorB }/>
      <SnakeyC color={ snakeColorA }/>
      <SnakeyB color={ snakeColorC }/>
    </div>
  </div>
)

export default IndexPage
