import { Helmet } from "react-helmet";

import Hero from "./sections/Hero";
import WhyPartner from "./sections/WhyPartner";
import PartnerWithCarmel from "./sections/PartnerWithCarmel";

function PartnerWithUs() {
  return (
    <>
      <Helmet>
        <title>Carmel Homes Ltd - Partner with Us</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="h-0 opacity-0">Partner with Us</h1>
      <Hero />
      <WhyPartner />
      <PartnerWithCarmel />
    </>
  )
}

export default PartnerWithUs
