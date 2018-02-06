import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    className="stripes"
  >
    <div
      style={{
        margin: '0',
        maxWidth: 960,
        padding: '1rem .875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link className="wiljago"
          to="/"
        >
          wiljago
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
