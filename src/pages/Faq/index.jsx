import { Helmet } from "react-helmet";

import Faqs from "./sections/Faqs";
import Hero from "./sections/Hero";

function Faq() {
  return (
    <div>
      <Helmet>
        <title>Carmel Homes Ltd - FAQs</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="h-0 opacity-0">FAQs</h1>
      <Hero />
      <Faqs />
    </div>
  )
}

export default Faq
