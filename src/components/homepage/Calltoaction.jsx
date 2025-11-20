import React from "react";

export default function Calltoaction() {
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
        <button className="btn-primary">Schedule Residential Pickup</button>
        <button className="btn-outline">Request Commercial Quote</button>
      </div>
    </div>
  );
}
