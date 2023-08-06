import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Navbar = () => {
    return (
      <nav>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">Your Logo</Link>
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
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;