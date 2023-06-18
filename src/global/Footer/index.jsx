import { Link } from "react-router-dom";
import Button from "global/Button";

function Footer() {
  return (
    <div className="bg-blue-primary text-white flex flex-col gap-10 lg:gap-[100px] px-6 lg:px-[min(100px,4vw)] py-8 pb-0 lg:py-[100px] lg:pb-0">
      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] lg:justify-evenly">
        
        {/* Logo & Write up  */}
        <div className="flex flex-col items-start gap-5 md:w-[40%] lg:w-[min(25%,20rem)]">
          {/* Logo */}
          <div className="lg:w-[150px] lg:h-[51.52px] w-[80px] h-[33.39px] bg-[url('assets/full-logo-white.svg')] bg-center bg-contain bg-no-repeat" />
          {/* Write up */}
          <p className="text-xs lg:text-sm font-semibold">
            Home ownership in a few clicks. Get in touch tell us your story, so that we can get an overview of your challenges and support you.
          </p>
          <Button theme="secondary" isNavbarButton={true}>
            Apply Now
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service */}
          <div className="flex flex-col gap-2 text-xs font-semibold [font-variant:small-caps]">
            <p className="text-lg [font-variant:normal]">Service</p>
            <Link to="/what-is-rent-to-own#how-it-works">How It Works</Link>
            <Link to="/apply-now">Apply Now</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2 text-xs font-semibold [font-variant:small-caps]">
            <p className="text-lg [font-variant:normal]">Company</p>
            <Link to="/about-us">About Us</Link>
            <Link to="/partner-with-us">Partner with Us</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2 text-xs font-semibold [font-variant:small-caps]">
            <p className="text-lg [font-variant:normal]">Legal</p>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-2 text-xs font-semibold [font-variant:small-caps]">
            <p className="text-lg [font-variant:normal]">Contact</p>
            <Link to="tel:+19053410200">+1 (905) 3410200</Link>
            <Link to="mailto:info@carmelhomesltd.com">info@carmelhomesltd.com</Link>
            <div className="mt-1 lg:mt-2">
              <Button theme="secondary" isNavbarButton={true}>
                Request a Callback
              </Button>
            </div>
            <div className="flex gap-2 mt-1 lg:mt-2">
              <a href="https://www.instagram.com/carmelhomesltd/" target="_blank" rel="noreferrer" className="h-6 lg:h-8 w-6 lg:w-8 bg-[url('assets/instagram-logo-white.svg')] bg-center bg-contain bg-no-repeat" />
              <a href="https://www.linkedin.com/company/carmel-homes-ltd/" target="_blank" rel="noreferrer" className="h-6 lg:h-8 w-6 lg:w-8 bg-[url('assets/linkedin-logo-white.svg')] bg-center bg-contain bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2 border-t-white py-8 flex justify-center">
        <p className="text-sm font-semibold text-center">
          Copyright © 2023 Carmel Homes Ltd
        </p>
      </div>
    </div>
  )
}

export default Footer