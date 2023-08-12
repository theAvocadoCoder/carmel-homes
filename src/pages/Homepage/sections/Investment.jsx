import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "global/Button";

function Investment() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const investmentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-100px"
    });
    observer.observe(investmentRef.current);
  
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <section ref={investmentRef} className="bg-black text-white text-[1rem] font-semibold lg:text-[1.25rem] px-14 lg:px-16 py-[9rem] lg:py-[7.5rem] [background-image:linear-gradient(to_bottom_right,black,#16293AAA_70%,#16293A30_90%,transparent_100%),url('homepage/invest.png')] bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className={`flex flex-col md:max-w-[70%] lg:max-w-[40%] gap-8 ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-[2rem] lg:text-[3rem] lg:[letter-spacing:0.15rem] font-bold lg:font-extrabold">Investment</h2>
        <p>
          Do you want to invest in real estate but feel overwhelmed by where to start? Or are you an active investor seeking to expand your portfolio?
        </p>
        <p>
          At Carmel Homes, we provide you with range of opportunities. Our program is designed to help individuals with the financial capacity to invest in real estate.
        </p>
        <Link to="/partner-with-us">
          <Button theme="secondary" className="px-3 py-4 text-[1.25rem] font-semibold">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Investment