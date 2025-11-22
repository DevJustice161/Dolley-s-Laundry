import React from "react";

const Footer = () => {
  return (
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
          © 2025 Dolley's Laundry. All rights reserved.
        </p>
        <div className="where-to">
          <p>Where to find us</p>
          <p>Pawtucket, RI 02860, United States of America</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
