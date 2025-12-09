import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CleaningService = () => {
  return (
    <section className="cleaning-section">
      <h4 className="section-tag">SERVICES</h4>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Our Cleaning Services</h2>
      </motion.div>

      <p className="section-sub">
        Discover a range of services designed to bring comfort and cleanliness
        into every corner of your home and business.
      </p>

      <div className="service-grid">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <div className="service-card first-card">
            <div className="card-group">
              <h3>Residential Laundry Services</h3>
              <p>
                Weekly laundry pickup, wash-dry-fold, and bedding cleaning for
                your home.
              </p>
              <Link to="/services#residential-section">
                View Residential Services →
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <div className="service-card second-card">
            <div className="card-group">
              <h3>Commercial Laundry Solutions</h3>
              <p>
                We keep your business running — clean linens, on-time delivery,
                professional service.
              </p>
              <Link to="/services#commercial-section">
                View Commercial Services →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleaningService;
