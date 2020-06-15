import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <img src="/asserts/img/logo.png" width="50"/>
    <section className="ml-auto">
      <Link to="/">Home</Link>
      <Link to="/purpose">Purpose</Link>
      <Link to="/product">Product</Link>
      <Link to="/partners">Partners</Link>
      <Link to="/team_support">Team Support</Link>
    </section>
  </nav>
)
