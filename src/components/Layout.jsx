import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [send, setSend] = useState("Send");
  const subscribe = (e) => {
    e.preventDefault();
    setSend("subscribed!");
    setTimeout(() => {
      setSend("send");
    }, 5000);
  };
  return (
    <div className="">
      <section className="main-header">
        <Nav />
      </section>

      <main className="">
        <Outlet />
      </main>
      <footer className="footer-section">
        <div className="newsletter-banner">
          <div className="newsletter-head">
            <h4>Stay In The Loop With Dolley's Laundry</h4>
            <p>
              Receive cleaning tips, exclusive deals, and seasonal updates right
              in your inbox.
            </p>
          </div>
          <form className="newsletter-input" onSubmit={subscribe}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">{send}</button>
          </form>
        </div>

        <div className="footer-main">
          <h2>Dolley's Laundry</h2>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/services">Services</NavLink>

            <NavLink to="/contact">Contact</NavLink>
          </div>
          <p className="contact-info">
            <div className="contact-info-head">Contact Us</div>
            <div className="contact-info-mail">
              dolley@dolleylaundryservice.com
            </div>
            <p className="phone-number">401-834-6591</p>
          </p>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Dolley's Laundry. All rights reserved.
          </p>
          <div className="where-to">
            <p>Where to find us</p>
            <p>Pawtucket, RI 02860, United States of America</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
