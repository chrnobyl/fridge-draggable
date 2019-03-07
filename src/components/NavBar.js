import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-inverse">
        <div>
          <Link to="/" className="navbar-brand">Homeeee</Link>
          <Link to="/fridge" className="navbar-brand">The Fridge</Link>
          <Link to="/freezer" className="navbar-brand">The Freezer</Link>
          <Link to="/drawers" className="navbar-brand">My Drawers</Link>
        </div>
    </nav>
  )
}
