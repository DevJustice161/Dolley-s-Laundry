import React from "react";

const Coverage = () => {
  const areas = [
    { city: "Providence", img: "./providence.jpg" },
    { city: "East Providence", img: "./east-providence.jpg" },
    { city: "Cranston", img: "./cranston.jpg" },
    { city: "Seekonk", img: "./seekonk.jpg" },
    { city: "Warwick", img: "./warwick.jpg" },
    { city: "Attleboro", img: "./attleboro.jpg" },
  ];

  return (
    <section className="coverage-section">
      <h4 className="section-tag">Service Area</h4>
      <h2 className="section-title">Our Coverage Area</h2>
      <p className="section-sub">
        Areas in Rhode Island and its surrounding environments where we provide
        our services.
      </p>

      <div className="coverage-wrapper">
        <div className="main-image">
          <img src="./pawtucket.jpg" alt="Pawtucket" />
          <p className="city-name">Pawtucket</p>
        </div>

        <div className="city-list">
          {areas.map((item, i) => (
            <div key={i} className="city-card">
              <img src={item.img} alt={item.city} />
              <p>{item.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
