import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="main-header">
        <Nav />
      </section>

      <main className="flex-1 container mx-auto px-4 py-8">
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
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        <div className="footer-main">
          <h2>Dolley's Laundry</h2>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/sevices">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
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
            © 2025 Dolley's Laundry. All rights reserved.
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
