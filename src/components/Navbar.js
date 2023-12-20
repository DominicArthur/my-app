import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import './What.png';

const Navbar = () => {
  return (
    <nav>
        <img src="What.png" class="logo"></img>
      <ul>
      <li>
         <Link to ="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/library">Your Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;