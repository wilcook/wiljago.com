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
  <div>
   <div  className="mainBio">
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
   </div>
    <div id="firstSnek">
      <SnakeyB color={ snakeColorB }/>
      <SnakeyA color={ snakeColorA }/>
      <SnakeyC color={ snakeColorC }/>
    </div>
    <div id="nextSnek">
      <SnakeyA color={ snakeColorB }/>
      <SnakeyC color={ snakeColorA }/>
      <SnakeyB color={ snakeColorC }/>
    </div>
  </div>
)

export default IndexPage
