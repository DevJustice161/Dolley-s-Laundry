import React from "react";
import "./../components/services/services.css";
import Pagehero from "../components/Pagehero";
import CleaningService from "../components/homepage/Services";
import Residential from "../components/services/Residential";
import Commercial from "../components/services/Commercial";
import Towel from "../components/services/Towel";

export default function Services() {
  return (
    <div>
      <Pagehero
        head="SERVICES"
        title="Professional laundry service for homes and businesses"
        paragraph="Discover our complete range of services — designed to meet your cleaning needs."
      />
      <CleaningService />
      <Residential />
      <Commercial />
      <Towel />
    </div>
  );
}
