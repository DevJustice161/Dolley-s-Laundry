import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommercialQuoteModal from "../CommercialQuoteModal";

const Residential = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);
  return (
    <section className="residential-section" id="residential-section">
      <h1 className="title">Residential Services</h1>
      <p className="subtitle">
        Weekly laundry pickup, wash-dry-fold, and bedding cleaning for your
        home.
      </p>

      <div className="residential-content">
        <div className="image-box">
          <img src="./residential-main.jpg" alt="Residential Laundry" />
        </div>
      </div>
      <div className="service-detail">
        <div className="description">
          <div className="top-desc">
            <h3>Description</h3>
            <p>
              Keep your home laundry routine effortless with our reliable weekly
              service. Dolley's Laundry Service handles everything — from pickup
              to folding to bedding — so you never have to worry about laundry
              again. We help you save time, maintain cleanliness, and stay
              comfortable at home.
            </p>
          </div>
          <div className="service-list">
            <h3>Service List</h3>
            <ul>
              <li>
                <img src="./checkcircle.jpg" alt="Check Circle" /> Wash, Dry &
                Fold
              </li>
              <li>
                <img src="./checkcircle.jpg" alt="Check Circle" /> Comforters,
                Sheets & Bedding
              </li>
              <li>
                <img src="./checkcircle.jpg" alt="Check Circle" /> Same-Day &
                Next-Day Options
              </li>
              <li>
                <img src="./checkcircle.jpg" alt="Check Circle" /> Eco-Friendly
                Detergents Available
              </li>
              <li>
                <img src="./checkcircle.jpg" alt="Check Circle" /> Text Pickup
                Notifications
              </li>
            </ul>
          </div>
        </div>
        <div className="service-box">
          <h3>Service Area</h3>
          <p>
            Available in Pawtucket, Providence, East Providence, Cranston,
            Warwick, Seekonk, Attleboro, and Surroundings.
          </p>
          <button className="btn-primary" onClick={openQuoteModal}>
            Book Now
          </button>
          <CommercialQuoteModal
            isOpen={isQuoteOpen}
            onClose={closeQuoteModal}
          />
        </div>
      </div>
    </section>
  );
};

export default Residential;
