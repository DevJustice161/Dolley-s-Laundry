import React from "react";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./../components/services/services.css";
import Pagehero from "../components/Pagehero";
import CleaningService from "../components/homepage/Services";
import Residential from "../components/services/Residential";
import Commercial from "../components/services/Commercial";
import Towel from "../components/services/Towel";

export default function Services() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Pagehero
          head="SERVICES"
          title="Professional laundry service for homes and businesses"
          paragraph="Discover our complete range of services — designed to meet your cleaning needs."
        />
        <div className="reveal">
          <CleaningService />
        </div>
        <div className="reveal">
          <Residential />
        </div>
        <div className="reveal">
          <Commercial />
        </div>
        <div className="reveal">
          <Towel />
        </div>
      </div>
    </motion.div>
  );
}
