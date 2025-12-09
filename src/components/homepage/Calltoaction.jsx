import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommercialQuoteModal from "../CommercialQuoteModal";

export default function Calltoaction() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);
  return (
    <div className="cta-banner">
      <div className="cta-banner-head">
        <h2>
          <span>Ready</span> For A Fresh, <span>Laundry?</span>
        </h2>
        <p>
          Book today and discover why we are the best in commercial and
          residential services.
        </p>
      </div>
      <div className="cta-buttons">
        <Link
          to="https://app.trycents.com/new-order/OW94/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary">Schedule Residential Pickup</button>
        </Link>
        <button className="btn-outline" onClick={openQuoteModal}>
          Request Commercial Quote
        </button>
        <CommercialQuoteModal isOpen={isQuoteOpen} onClose={closeQuoteModal} />
      </div>
    </div>
  );
}
