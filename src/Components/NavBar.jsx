import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Titulo</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/page"}>Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar