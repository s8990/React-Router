import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="top-nav">
      <Link to="/">
        <h3 className="logo">Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/contact-us">
          <li>Contact Us</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
