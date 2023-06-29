

function Hero() {
  return (
    <section className="bg-[url('aboutus/hero.webp')] bg-right md:bg-center bg-cover bg-no-repeat p-10 lg:p-20 flex flex-col items-center md:flex-row-reverse md:justify-center gap-10">
      <div className="flex flex-col gap-5 sm:w-full md:max-w-[50%] lg:w-[min(30rem,55%)]">
        <h2 className="text-[1.25rem] font-extrabold">Our mission is to make home ownership a reality again</h2>
        <p>Buying a home shouldn’t be so hard. Today, millions of us are missing out because we can’t get a mortgage for a home we could afford to rent.</p>
        <p>We’re here to change that. Rent-to-own can make home ownership in Canada a reality for you.</p>
      </div>
      <div className="bg-[url('aboutus/vision.webp')] bg-center bg-cover bg-no-repeat w-60 sm:w-64 md:w-72 lg:w-[30rem] h-40 md:h-48 lg-[20rem] rounded-md" role="img" />
    </section>
  )
}

export default Hero