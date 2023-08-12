import { useState, useRef, useEffect } from "react";

function WhatYouGet() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const whatYouGetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-100px"
    });
    observer.observe(whatYouGetRef.current);
  
    return () => {
      observer.disconnect();
    }
  }, []) 

  const whatYouGetCards = [
    {
      img: "bg-[url(homepage/what-you-get-1.svg)]",
      title: "Rent that Rewards",
      description: "Convert part of your rent into a deposit when you buy your home.",
      icon: "checked house",
      animation: "motion-safe:animate-[fadeUp_1s_ease]",
    },
    {
      img: "bg-[url(homepage/what-you-get-2.svg)]",
      title: "Property Price Lock",
      description: "Today’s property price is locked in. You keep the gains.",
      icon: "secure price",
      animation: "motion-safe:animate-[fadeUp_1.3s_ease]",
    },
    {
      img: "bg-[url(homepage/what-you-get-3.svg)]",
      title: "No Sweat",
      description: "We handle the buying process. No sweat.",
      icon: "no sweat",
      animation: "motion-safe:animate-[fadeUp_1.5s_ease]",
    },
    {
      img: "bg-[url(homepage/what-you-get-4.svg)]",
      title: "No Surprises",
      description: "No unexpected fees or increases. Monthly payments stay the same.",
      icon: "secure document",
      animation: "motion-safe:animate-[fadeUp_1.7s_ease]",
    },
    {
      img: "bg-[url(homepage/what-you-get-5.svg)]",
      title: "Low Downpayment",
      description: "We know how hard it is to save. Get a home. 0% deposit required.",
      icon: "savings",
      animation: "motion-safe:animate-[fadeUp_1.9s_ease]",
    },
  ];

  return (
    <section ref={whatYouGetRef} className="flex flex-col items-center justify-between py-[4.5rem] lg:px-20 gap-[4.5rem] text-center bg-gradient-to-br from-brown-accent/30 via-white to-blue-accent/50 overflow-hidden">
      <h2 className="text-[2rem] font-bold">What you get at Carmel Homes</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-12 lg:gap-20">
        {
          whatYouGetCards.map((card, index) => (
            <div key={index} className={`flex flex-col items-center justify-between gap-5 px-6 py-10 rounded-[1.25rem] max-w-[17rem] md:max-w-xs bg-white shadow-[0px_0px_10px_0px] shadow-brown-gray ${isIntersecting ? card.animation : "opacity-0"}`}  role="img" aria-roledescription={`${card.icon} icon`}>
              <div className={`${card.img} bg-contain bg-no-repeat w-[4.5rem] h-[4.5rem]`} />
              <p className="text-[1.5rem] font-semibold">{card.title}</p>
              <p className="text-[1rem]">{card.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default WhatYouGet