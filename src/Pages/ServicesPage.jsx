import React from "react";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import PricingPlans from "./PricingPlans/PricingPlans";

function ServicesPage() {
  return <div>
    <Services/>
    <Skills />
    <Work/>
    <PricingPlans />
  </div>;
}

export default ServicesPage;
