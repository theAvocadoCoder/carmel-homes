
function Hero() {
  return (
    <section className="h-max bg-[url('partnerwithus/hero-bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row p-8 md:py-10 items-center justify-center gap-5">
      <div className="w-[min(100%,25rem)] sm:w-full sm:max-w-[40%] lg:w-[min(40%,25rem)]">
        <h1 className="text-[2rem] [line-height:2rem] lg:text-[2.5rem] font-bold lg:[line-height:2.5rem] mb-4">
          Expand your addressable market instantly!
        </h1>
        <p className="text-[0.875rem] md:text-[1.125rem]">By partnering with us, you can help convert reluctant renters into homeowners, increasing the chances of converting a sale.</p>
      </div>
      <div className="h-[clamp(8rem,25vw,19rem)] w-[clamp(15rem,45%,30rem)] rounded-2xl bg-[url('partnerwithus/partner-img.png')] bg-cover bg-center bg-no-repeat" role="img" aria-roledescription="a man and woman embrace in front of newly bought house with the setting sun just visible behind the house" />
    </section>
  )
}

export default Hero