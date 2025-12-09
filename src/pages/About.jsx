import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Pagehero from "../components/Pagehero";

const About = () => {
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-page">
        <Pagehero
          head="ABOUT US"
          title="Cleaning with Purpose, More than just a Service"
          paragraph="At Dolley's Laundry, we understand that exceptional service is more than just looking good - it provides reassurance and comfort."
        />
        <div className="reveal">
          <section className="about-info">
            <div className="info-image">
              <img src="./about1.jpg" alt="Laundry" />
            </div>
            <div className="info-text">
              <div className="info-detail">
                <h4 className="section-tag">WHAT WE DO</h4>
                <h2>
                  We Provide Professional Laundry Service For Homes, Medical
                  Offices, And Multi-Unit Properties.
                </h2>
                <p>
                  Proudly serving households and local businesses with
                  consistent, quality laundry solutions.
                </p>
              </div>
              <div className="stats">
                <div>
                  <h3>1000+</h3>
                  <p>Professional / Commercial Service</p>
                </div>
                <div>
                  <h3>98%</h3>
                  <p>Customer Satisfaction</p>
                </div>
                <div>
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div>
                  <h3>4.9/5</h3>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="reveal">
          <section className="standfor-section">
            <div className="standfor-card">
              <h4 className="section-tag">Features</h4>
              <h3>What We Stand For</h3>
              <p>
                Professional laundry service for homes, medical offices, and
                multi-unit properties.
              </p>
              <ul>
                <li>
                  <img src="./Icon-check.png" alt="Icon Check" />
                  <p>Satisfied Customers</p>
                </li>
                <li>
                  <img src="./Icon-check.png" alt="Icon Check" />
                  <p>Fast Cleaning</p>
                </li>
                <li>
                  <img src="./Icon-check.png" alt="Icon Check" />
                  <p>Professional Services</p>
                </li>
                <li>
                  <img src="./Icon-check.png" alt="Icon Check" />
                  <p>Commercial Services</p>
                </li>
              </ul>
            </div>
            <div className="standfor-image">
              <img src="./about2.jpg" alt="Laundry Service" />
            </div>
          </section>
        </div>

        <div className="reveal">
          <section className="about-cta">
            <h2>
              We Provide You With Standard Residential And Commercial Laundry
              Services
            </h2>
            <p>
              Book your very first service with us today, or reach out to our us
              to discuss a plan that suit your unique needs.
            </p>
            <div className="cta-buttons">
              <Link
                to="https://app.trycents.com/new-order/OW94/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">
                  Schedule Residential Pickup
                </button>
              </Link>
              <button className="btn-outline">Request Commercial Quote</button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
