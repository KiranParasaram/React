import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to ='/'  className="navbar-brand" >Company</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to ='/home' className="nav-link" >Home <span className="sr-only">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link to ='/abouT' className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to ='/contact' className="nav-link" >Contact</Link>
            </li>
            <li className="nav-item">
              <Link to ='/products' className="nav-link" >Products</Link>
            </li>
           
          </ul>
        </div>
      </nav>
      
    </div>
  )
}

export default Header
