

function WhyPartner() {
  const whyPartnerBullets = [
    {
      title: "It’s a win-win situation",
      details: "Always have an offer for your clients, with our Low Deposit solution.",
    },
    {
      title: "Purchasing power",
      details: "Our all-cash offer helps your clients move with speed and win in competitive markets.",
    },
    {
      title: "Built for brokers",
      details: "Designed to help you painlessly track applicants and rewards.",
    },
  ];

  return (
    <section className="relative px-10 py-14 md:py-20 md:px-16 flex items-center 3xl:justify-center before:absolute before:bg-[url('partnerwithus/why-partner-with-us.png')] before:bg-cover before:bg-[center_right_40%] before:lg:bg-center before:xl:bg-left before:bg-no-repeat before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-20 before:md:opacity-70">
      <div className="flex flex-col items-start lg:items-center text-left gap-8 max-w-md lg:max-w-[40%] xl:max-w-[70%] 2xl:w-[50%] 2xl:items-end">
        <h2 className="text-[1.5rem] lg:text-[2rem] font-bold">Why partner with us</h2>
        {
          whyPartnerBullets.map((bullet, index) => (
            <div key={index} className="flex items-start justify-start gap-4 w-full md:w-[clamp(17.5rem,60%,24rem)] lg:w-[clamp(17.5rem,50%,30rem)] z-[2]">
              <div className={`w-5 h-7 ${index%2===0? "bg-[url('whatisrenttoown/blue-bullet.svg')]" : "bg-[url('whatisrenttoown/brown-bullet.svg')]"} bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
              <div className="max-w-[85%]">
                <p className="font-semibold text-[1.2rem] sm:text-[1.5rem] max-w-full">
                  {bullet.title}
                </p>
                <p className="text-[0.875rem] sm:text-[1.125rem] max-w-full">
                  {bullet.details}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default WhyPartner