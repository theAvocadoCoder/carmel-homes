import { useState, useRef, useEffect } from "react";
import Button from "global/Button";
import { Link } from "react-router-dom";
import whiteCouple from "homepage/white-couple.png";

function Hero() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-150px"
    });
    observer.observe(heroRef.current);
  
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <section ref={heroRef} className={`[background-blend-mode:overlay] bg-blue-primary/70 bg-[url('homepage/hero.png')] bg-cover bg-center bg-no-repeat w-full lg:h-[600px] flex justify-evenly overflow-hidden`}>
      <div className={`flex flex-col gap-6 ${isIntersecting ? "motion-safe:animate-slide-bottom md:motion-safe:animate-slide-left" : ""} md:max-w-[50%] lg:max-w-[37%] px-[clamp(1.25rem,7%,2.5rem)] py-28 md:pt-40 self-center`}>
        <p className="text-white text-5xl [letter-spacing:0.15rem] font-extrabold" >
          Get a Step Closer to <span className="text-brown-primary">Home</span> Ownership
        </p>
        <div className="flex gap-3">
          <Link to="/apply-now">
            <Button theme="primary" className="px-4 py-3 shadow-slate-600 shadow-sm">
              Apply Now
            </Button>
          </Link>

          <Link to="/">
            <Button theme="secondary" className="px-4 py-3 shadow-slate-200 shadow-sm">
              Request a Callback
            </Button>
          </Link>
        </div>
      </div>
      <img className={`hidden md:block ${isIntersecting ? "md:motion-safe:animate-slide-right" : ""} md:object-cover md:object-center md:w-[465px] md:h-[334px] lg:w-[623px] lg:h-[462px] self-end`} src={whiteCouple} alt="a man and a woman, both grinning" />
    </section>
  )
}

export default Hero