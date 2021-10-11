import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return(
    <nav className="navbar">
      <a href="/">Lily's Blog</a>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new_post">New Post</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
