import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommercialQuoteModal from "../CommercialQuoteModal";

const Commercial = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);
  return (
    <section className="commercial-section" id="commercial-section">
      <div className="main-commercial-section">
        <h1 className="title">Commercial Services</h1>
        <p className="subtitle">
          We keep your business running — clean linens, on-time delivery,
          professional services.
        </p>

        <div className="image-container">
          <img src="./commercial-main.jpg" alt="Commercial Laundry" />
        </div>

        <div className="service-detail">
          <div className="description">
            <div className="top-desc">
              <h3>Description</h3>
              <p>
                Dolley's Laundry Services ensures your business always looks its
                best. We handle large-scale laundry with industry-grade
                precision — delivering professional cleaning, sanitizing, and
                folding solutions. Our dedicated pickup & delivery systems let
                you operate smoothly and focus on what truly matters.
              </p>
            </div>
            <div className="service-list">
              <h3>Businesses We Service</h3>
              <ul>
                <li>
                  <img src="./checkcircle.jpg" alt="Check Circle" /> Medical &
                  Dental Offices
                </li>
                <li>
                  <img src="./checkcircle.jpg" alt="Check Circle" /> Assisted
                  Living & Rehab Facilities
                </li>
                <li>
                  <img src="./checkcircle.jpg" alt="Check Circle" /> Airbnb &
                  Short-Term Rentals
                </li>
              </ul>
            </div>
          </div>

          <div className="service-box">
            <h3>Features</h3>
            <p>
              Dedicated Pickup Schedules, Linen Supply & Rotation, Scalable to
              Multi-Location, Sanitized & Packaged, Commercial Contracts.
            </p>
          </div>
        </div>
      </div>

      <section className="cta-section">
        <h2>Professional Laundry Services For Businesses</h2>
        <p>Experience top-tier cleaning backed by trusted professionals.</p>
        <button className="btn-primary" onClick={openQuoteModal}>
          Get a Commercial Quote
        </button>
        <CommercialQuoteModal isOpen={isQuoteOpen} onClose={closeQuoteModal} />
      </section>
    </section>
  );
};

export default Commercial;
