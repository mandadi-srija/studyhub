// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Peer Learning</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/course-upload">Course Upload</Link></li>
        <li><Link to="/collaboration">Collaboration</Link></li>
        {user ? (
          <li className="profile-icon">
            <Link to="/profile">
              <FaUserCircle size={30} color="#fff" />
            </Link>
          </li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
