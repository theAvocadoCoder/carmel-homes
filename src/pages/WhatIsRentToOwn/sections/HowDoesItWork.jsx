import { useState, useEffect } from "react";

function HowDoesItWork() {
  const [activeSlide, setActiveSlide] = useState(1);
  

  const slideTexts = [
    null,
    {
      title: "Tell us about you",
      img: "bg-[url('whatisrenttoown/how-it-works-1.webp')]",
      text: ["In a few questions, tell us about you and what road blocks you’ve been facing. No matter what it is  we can provide you with an estimated budget for your new home and an approach to fit your circumstances."]
    },
    {
      title: "Search for your ideal home",
      img: "bg-[url('whatisrenttoown/how-it-works-2.webp')]",
      text: ["You can look for any home, new and old, big and small. Once you’ve found one you like, let us know and we will put in an offer that makes sense for you. The lower the price of the home the lower your monthly payments and future buy-back price. We do our best to make sure you get a good deal!"]
    },
    {
      title: "Carmel Homes buys the home for you",
      img: "bg-[url('whatisrenttoown/how-it-works-3.webp')]",
      text: [
        "Once we’re happy, we will then make you an offer before buying the home for you. This includes your lease length, monthly payment amount, and the locked-in price for the home so you’re protected from price increases.",
        "We take care of all the boring stuff like surveys, legal process and buildings insurance."
      ]
    },
    {
      title: "Move into your new home",
      img: "bg-[url('whatisrenttoown/how-it-works-4.webp')]",
      text: [
        "Time to move into your new home. You will sign your lease agreement, pay your one-off product fee and first month’s rent and the keys are in your hand.",
        "Your monthly payments are locked. No increases! Up to 25% of these payments are converted into reducing your future buy-back price for when you buy the home from Carmel Homes later on."
      ],
    },
    {
      title: "Buy the home when you’re ready",
      img: "bg-[url('whatisrenttoown/how-it-works-5.webp')]",
      text: [
        "You can buy the home from us whenever you want.If it’s before the end of your lease you’ll need to pay an early exit fee.",
        "The buy-back price for your home will be the price we paid for it, plus the costs we incurred buying it, minus all your converted payments."
      ],      
    },
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide(state => {
        if (state === slideTexts.length - 1) {
          return 1;
        } else {
          return state + 1;
        }
      })
    }, 5000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, [slideTexts.length])

  return (
    <section className={`lg:h-[38.375rem] bg-blend-darken bg-blue-primary text-white p-8 flex flex-col gap-8 ${slideTexts[activeSlide].img} bg-cover bg-center bg-no-repeat bg-opacity-[0.85] lg:bg-opacity-0`}>
      <h2 className="text-[1.25rem] lg:text-[1.5rem] text-center sm:text-left lg:text-center font-semibold max-w-md lg:max-w-[47%] 2xl:max-w-[50rem]">How Does This Work?</h2>
      <div className="flex flex-col lg:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-8 max-w-md lg:max-w-[47%] 2xl:max-w-[45rem]">
        {/* Slider */}
        <ul className="flex lg:flex-col gap-6 justify-between relative">
          {[...Array(5)].map((_, index) => (
            <li key={index} className={`font-semibold lg:font-bold lg:text-[1.75rem] [line-height:1] px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 rounded-[100%] ${activeSlide == index + 1 ? "bg-brown-primary text-white" : "bg-brown-accent text-blue-primary"} z-[1]`} onClick={() => {setActiveSlide(index+1)}}>{index + 1}</li>
          ))}
          <div className="absolute lg:h-[calc(100%-2rem)] w-[calc(100%-2rem)] lg:w-0 left-3 lg:left-[50%] top-[50%] lg:top-3 border-t-[0.3125rem] lg:border-t-0 lg:border-l-[0.3125rem] border-brown-accent border-dotted -z-[0]" />
        </ul>
        {/* Text */}
        {slideTexts.map((slide, index) => (
          index !== 0 && (
            <div className={`${activeSlide === index ? "flex" : "hidden"} flex-col justify-center gap-4`} key={index}>
              <p className="font-extrabold text-[1.75rem] lg:text-[2.25rem] [line-height:1]">{slide.title}</p>
              {
                slide.text.map((t, i) => (
                  <p className="font-semibold text-[1rem] xl:text-[1.25rem]" key={i}>{t}</p>
                ))
              }
            </div>
          )
        ))}
      </div>
    </section>
  )
}

export default HowDoesItWork