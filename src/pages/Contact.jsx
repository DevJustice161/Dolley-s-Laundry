import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
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
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-section">
        <Pagehero
          head="CONTACT US"
          title="Send Us a Message"
          paragraph="We take pride in our meticulous attention to detail and unwavering commitment to customer satisfaction."
        />
        <div className="reveal">
          <div className="contact-container">
            <div className="contact-details">
              <h3>Contact Details</h3>
              <p>
                Should you have any questions or concerns, feel free to reach
                out to us. We're here to help!
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
                <input type="text" placeholder="" />
              </div>
              <div className="form-row">
                <label htmlFor="">Message</label>
                <textarea placeholder="Enter your message" rows="4"></textarea>
              </div>

              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="faq-section">
            <h4 className="section-tag">FAQ</h4>
            <h2>Got Questions?</h2>
            <p>We’ve got answers to your most common cleaning concerns.</p>

            <div className="faq-box">
              <div className="faq-container">
                {data.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`faq-item ${openIndex === i ? "active" : ""}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="faq-question" onClick={() => toggle(i)}>
                      <p>{item.q}</p>

                      <motion.span
                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="icon"
                      >
                        {openIndex === i ? "-" : "+"}
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          className="faq-answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
