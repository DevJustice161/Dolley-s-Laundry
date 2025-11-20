import React from "react";

const Herohome = () => {
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
            <button className="btn-primary">Schedule Residential Pickup</button>
            <button className="btn-outline">Request Commercial Quote</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="./van-laundry.png" alt="Laundry Delivery" />
        </div>
      </div>
    </section>
  );
};

export default Herohome;
