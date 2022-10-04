import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Navbar() {
  return (
    <header className='navBar'>
      <div className="navlogo">
        <Link to="/">Logo</Link> 
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link> 
          </li>
          <li>
          <Link to="about">About</Link> 
          </li>
          <li>
            <Link to="products">Products</Link> 
          </li>
        </ul>
      </nav>
      <button>Start</button>
    </header>
  )
}
