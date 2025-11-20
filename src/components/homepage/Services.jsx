import React from "react";

const CleaningService = () => {
  return (
    <section className="cleaning-section">
      <h4 className="section-tag">SERVICES</h4>
      <h2 className="section-title">Our Cleaning Services</h2>
      <p className="section-sub">
        Discover a range of services designed to bring comfort and cleanliness
        into every corner of your home and business.
      </p>

      <div className="service-grid">
        <div className="service-card first-card">
          <div className="card-group">
            <h3>Residential Laundry Services</h3>
            <p>
              Weekly laundry pickup, wash-dry-fold, and bedding cleaning for
              your home.
            </p>
            <a href="#">View Residential Services →</a>
          </div>
        </div>
        <div className="service-card second-card">
          <div className="card-group">
            <h3>Commercial Laundry Solutions</h3>
            <p>
              We keep your business running — clean linens, on-time delivery,
              professional service.
            </p>
            <a href="#">View Commercial Services →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningService;
