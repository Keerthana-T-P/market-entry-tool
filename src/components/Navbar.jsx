import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Export Calculator</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}
