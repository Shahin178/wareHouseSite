import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Acre Estate</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/">Home</Link>{" "}
            {/* Use Link to navigate to the Home route */}
          </li>
          <li className="header-nav-item">
            <Link to="/activeList">Active Listings</Link>{" "}
            {/* Use Link to navigate to the ActiveList route */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
