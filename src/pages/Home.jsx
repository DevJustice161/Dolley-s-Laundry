import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Herohome from "../components/homepage/Herohome";
import Whychoose from "../components/homepage/Whychoose";
import CleaningService from "../components/homepage/Services";
import Howitworks from "../components/homepage/Howitworks";
import Testimonials from "../components/homepage/Testimonials";
import Coverage from "../components/homepage/Coverage";
import Calltoaction from "../components/homepage/Calltoaction";
import Footer from "../components/Footer";

export default function Home() {
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
    <div>
      <Herohome />
      <div className="reveal">
        <Whychoose />
      </div>
      <div className="top-cleaning-section reveal">
        <CleaningService />
      </div>
      <div className="reveal">
        <Howitworks />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <Calltoaction />
      </div>
      <div className="reveal">
        <Coverage />
      </div>
    </div>
  );
}
