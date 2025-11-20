import React from "react";
import { useState } from "react";
import Pagehero from "../components/Pagehero";

const data = [
  {
    q: "Do you offer any pickup and delivery services?",
    a: "Yes, we offer pickup and delivery services.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Credit Card and mobile payment",
  },
  {
    q: "What are your hours of operation?",
    a: "10am - 10pm; 7 days a week",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <section className="contact-section">
      <Pagehero
        head="CONTACT US"
        title="Send Us a Message"
        paragraph="We take pride in our meticulous attention to detail and unwavering commitment to customer satisfaction."
      />
      <div className="contact-container">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            Should you have any questions or concerns, feel free to reach out to
            us. We're here to help!
          </p>
          <div className="mail-details">
            <p>
              <strong>Email</strong>
              <br />
              dolley@dolleylaundryservice.com
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              401-834-6591
            </p>
            <p>
              <strong>Location</strong>
              <br /> Pawtucket, RI 02860, United States
            </p>
            <p>
              <strong>Working Hours</strong>
              <br /> Monday - Saturday 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <label htmlFor="">Fullname</label>
            <input type="text" placeholder="" />
          </div>
          <div className="form-row">
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="ex@mail.com" />
          </div>
          <div className="form-row">
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="Select Your Subject" />
          </div>
          <div className="form-row">
            <label htmlFor="">Message</label>
            <textarea placeholder="Enter your message" rows="4"></textarea>
          </div>

          <button className="btn-primary">Send Message</button>
        </div>
      </div>

      <div className="faq-section">
        <h4 className="section-tag">FAQ</h4>
        <h2>Got Questions?</h2>
        <p>We’ve got answers to your most common cleaning concerns.</p>

        <div className="faq-box">
          <div className="faq-container">
            {data.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${openIndex === i ? "active" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="faq-question">
                  <p>{item.q}</p>
                  <span className="icon">{openIndex === i ? "-" : "+"}</span>
                </div>
                {openIndex === i && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
