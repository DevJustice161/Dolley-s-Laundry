import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const active = ({ isActive }) =>
  isActive ? "nav-link-active" : "nav-link-inactive";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-side">
          <NavLink to="/">
            <img src="./logo.png" alt="Logo" />
          </NavLink>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-links ${isOpen ? "mobile-open" : ""}`}>
          <li>
            <NavLink to="/" className={active} onClick={toggleMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={active} onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={active} onClick={toggleMenu}>
              Services
            </NavLink>
          </li>

          {isOpen && (
            <button className="contact-btn-mobile">
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact Us
              </NavLink>
            </button>
          )}
        </ul>

        <button className="contact-btn">
          <NavLink to="/contact" className={active}>
            Contact Us
          </NavLink>
        </button>
      </nav>
    </header>
  );
}
