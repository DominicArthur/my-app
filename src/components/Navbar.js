import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;