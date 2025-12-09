import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommercialQuoteModal from "../CommercialQuoteModal";

const Herohome = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);
  return (
    <section className="hero-home">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1>
            <span>Laundry</span> Pickup & Delivery You Can Count
            <span> On.</span>
          </h1>
          <p>
            Fast, reliable professional laundry services for homes, medical
            offices, and multi-unit properties.
          </p>
          <div className="hero-buttons">
            <Link
              to="https://app.trycents.com/new-order/OW94/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">
                Schedule Residential Pickup
              </button>
            </Link>
            <button className="btn-outline" onClick={openQuoteModal}>
              Request Commercial Quote
            </button>
          </div>
          <CommercialQuoteModal
            isOpen={isQuoteOpen}
            onClose={closeQuoteModal}
          />
        </div>
        <div className="hero-image">
          <img src="./van-laundry.png" alt="Laundry Delivery" />
        </div>
      </div>
    </section>
  );
};

export default Herohome;
