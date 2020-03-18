import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-primary bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li> */}
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Add Exercise</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Add User</Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}