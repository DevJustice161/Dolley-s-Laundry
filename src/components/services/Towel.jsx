import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommercialQuoteModal from "../CommercialQuoteModal";

const Towel = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);
  return (
    <section className="towel-section">
      <h1 className="title">Towel Rental Services</h1>
      <p className="subtitle">
        Reliable towel rental that keeps your guests comfortable and your
        operations seamless.
      </p>

      <div className="towel-content">
        <div className="image-box">
          <img src="./towel-main.png" alt="Towel Services" />
        </div>
        <div className="service-detail">
          <div className="description">
            <h3>Description</h3>
            <p>
              Dolley's Laundry Service provides a steady supply of fresh,
              professionally cleaned towels tailored to your business needs. We
              handle the pickup, laundering, and delivery on a scheduled basis —
              allowing you to focus on your operations while we keep your towel
              stock consistently clean and ready for use.
            </p>
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
      </div>
    </section>
  );
};

export default Towel;
