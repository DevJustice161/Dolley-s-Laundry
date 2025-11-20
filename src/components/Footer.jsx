import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="newsletter-banner">
        <div className="newsletter-head">
          <h4>Stay In The Loop With Dolley's Laundry</h4>
          <p>
            Receive cleaning tips, exclusive deals, and seasonal updates right in
            your inbox.
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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <p className="contact-info">
          Contact Us: dolley@dolleylaundryservice.com
        </p>
        <p className="phone-number">401-534-6591</p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Dolley's Laundry. All rights reserved.</p>
        <p>Where to find us: Pawtucket, RI 02860, United States of America</p>
      </div>
    </footer>
  );
};

export default Footer;
