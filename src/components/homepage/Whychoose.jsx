import React from "react";

const Whychoose = () => {
  return (
    <section className="why-choose-section">
      <div className="reason-grid">
        <h4 className="section-tag">WHY CHOOSE US</h4>
        <h2 className="section-title">
          Why Dolley's Is The Right Choice For You.
        </h2>
        <p className="section-sub">
          Trusted by families and businesses across Rhode Island.
        </p>
      </div>

      <div className="benefit-grid">
        <div className="benefit-row1">
          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-transfer-van.png" alt="Transfer Van" />
            </span>
            <h3>Pickup & Delivery</h3>
            <p>We offer free pickup and delivery to our clients.</p>
          </div>

          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-notebook.png" alt="Notebook" />
            </span>
            <h3>Next-Day Turnaround</h3>
            <p>48 hours is all we need for your laundry to be delivered.</p>
          </div>

          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-hospital.png" alt="Hospital icon" />
            </span>
            <h3>Hospital-Grade Clean</h3>
            <p>
              Because our machines are safe, sanitized, and ready for anything.
            </p>
          </div>
        </div>
        <div className="benefit-row2">
          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-shield.png" alt="shield icon" />
            </span>
            <h3>Insured & Professional</h3>
            <p>
              Handled by trained professionals, covered by insurance
              specialists.
            </p>
          </div>

          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-icons_gears.png" alt="gear icon" />
            </span>
            <h3>Commercial-Grade Equipment</h3>
            <p>
              We use high-capacity washers & dryers trusted for dependability.
            </p>
          </div>

          <div className="benefit-card">
            <span className="icon">
              <img src="./vector-document.png" alt="document icon" />
            </span>
            <h3>Contracts Available</h3>
            <p>We offer long-term & short-term contracts for individuals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
