import { Helmet } from "react-helmet";

import Hero from "./sections/Hero";
import WhyPartner from "./sections/WhyPartner";
import PartnerWithCarmel from "./sections/PartnerWithCarmel";

function PartnerWithUs() {
  return (
    <>
      <Helmet>
        <title>Carmel Homes Ltd - Partner with Us</title>
        <meta name="description" content="Expand your addressable market instantly! Partnering with us can help convert reluctant renters into homeowners, increasing the chances of converting a sale." />
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
      <h1 className="h-0 opacity-0">Partner with Us</h1>
      <Hero />
      <WhyPartner />
      <PartnerWithCarmel />
    </>
  )
}

export default PartnerWithUs
