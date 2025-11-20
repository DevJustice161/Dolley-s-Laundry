import React from "react";
import { Link } from "react-router-dom";
import Herohome from "../components/homepage/Herohome";
import Whychoose from "../components/homepage/Whychoose";
import CleaningService from "../components/homepage/Services";
import Howitworks from "../components/homepage/Howitworks";
import Testimonials from "../components/homepage/Testimonials";
import Coverage from "../components/homepage/Coverage";
import Calltoaction from "../components/homepage/Calltoaction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Herohome />
      <Whychoose />
      <div className="top-cleaning-section">
        <CleaningService />
      </div>
      <Howitworks />
      <Testimonials />
      <Calltoaction />
      <Coverage />
    </div>
  );
}
