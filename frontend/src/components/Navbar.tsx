import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Navbar = () => {
    return (
      <nav>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src="/src/assets/logo.png" width="90%" height="90%" alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/anime">Anime</Link>
            </li>
            <li>
              <Link to="/lists">Lists</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;