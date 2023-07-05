

function Hero() {
  return (
    <section className="h-max bg-[url('faq/hero.webp')] bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row p-5 items-center justify-center gap-5">
      <div className="w-[min(100%,25rem)] sm:w-full sm:max-w-[40%] lg:w-[min(40%,25rem)]">
        <h1 className="text-[1.5rem] md:text-[1.75rem] font-bold">FAQs</h1>
        <p className="text-[0.875rem] md:text-[1rem]">Find some commonly asked questions to give you more information about the Rent to Own Home Ownership Program</p>
      </div>
      <div className="h-[clamp(8rem,25vw,19rem)] w-[clamp(15rem,45%,30rem)] rounded-2xl bg-[url('faq/faq-img.webp')] bg-cover bg-center bg-no-repeat" role="img" aria-roledescription="a man and woman embrace in front of newly bought house with the setting sun just visible behind the house" />
    </section>
  )
}

export default Hero