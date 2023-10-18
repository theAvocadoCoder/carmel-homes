import { Helmet } from "react-helmet";

import Faqs from "./sections/Faqs";
import Hero from "./sections/Hero";

function Faq() {
  return (
    <div>
      <Helmet>
        <title>Carmel Homes Ltd - FAQs</title>
        <meta name="description" content="Find some commonly asked questions to give you more information about the Rent to Own Home Ownership Program." />
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
      <h1 className="h-0 opacity-0">FAQs</h1>
      <Hero />
      <Faqs />
    </div>
  )
}

export default Faq
