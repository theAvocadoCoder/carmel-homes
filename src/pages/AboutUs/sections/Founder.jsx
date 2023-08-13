
function Founder() {
  return (
    <section className="flex flex-col md:flex-row p-8 items-center md:justify-center">
      <div className="bg-blend-normal bg-[url('aboutus/quote.svg')] bg-no-repeat bg-auto bg-left-top bg-white bg-opacity-30 px-10 py-8 md:max-w-[50%] lg:w-[min(40%,40rem)] flex flex-col gap-4 [line-height:1.595]">
        <p>There are several roadblocks from residency, self employment and more that makes housing feel impossible. Many are spending years saving for a deposit and even then are having to take on large debt burdens to get on the property ladder.</p>
        <p>I founded Carmel Homes on belief that there should be a better way that will enable millions of households to buy their first home earlier.</p>
        <p>Our mission is to help provide housing to all.</p>
        <p className="font-bold">Oluwadamilare - Founder</p>
      </div>
      <div className="bg-[url('aboutus/damilare.png')] bg-center bg-cover bg-no-repeat h-[clamp(8rem,30vw,19rem)] w-[clamp(15rem,50%,30rem)] rounded-lg" role="img" aria-roledescription="Carmel Homes founder, Oluwadamilare" />
    </section>
  )
}

export default Founder