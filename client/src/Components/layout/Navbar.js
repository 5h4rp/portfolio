import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>AJ</div>
      <label for='toggle'>
        <i className='fas fa-bars'></i>
      </label>
      <input type='checkbox' id='toggle'></input>
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
