
function StackedOdds() {
  const stackedOddsIconTexts = [
    [
      {
        icon: "bg-[url('aboutus/odds-1.svg')]",
        text: "Little down payment",
      },
      {
        icon: "bg-[url('aboutus/odds-2.svg')]",
        text: "Low credit score",
      },
      {
        icon: "bg-[url('aboutus/odds-3.svg')]",
        text: "Renting but unable to buy",
      },
    ],
    [
      {
        icon: "bg-[url('aboutus/odds-4.svg')]",
        text: "New to Canada",
      },
      {
        icon: "bg-[url('aboutus/odds-5.svg')]",
        text: "Self-Employed or started a new job",
      },
      {
        icon: "bg-[url('aboutus/odds-6.svg')]",
        text: "Lenders cap their offers",
      },
    ],
  ]
  function stackedOddElement(object, index) {
    return (
      <div className="flex items-center gap-6 sm:justify-between lg:justify-center" key={index}>
        <div className={`${object.icon} bg-contain bg-center bg-no-repeat h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16`} />
        <p className="font-bold w-[8rem]">{ object.text }</p>
      </div>
    )
  }
  return (
    <section className="flex flex-col lg:flex-row p-14 items-center justify-center gap-16 lg:gap-28">
      <div className="flex flex-col gap-4 md:max-w-[70%] lg:w-[min(40%,30rem)]">
        <h2 className="text-[1.5rem] font-bold">The odds are stacked against us</h2>
        <p>
          {"It has never been as difficult to buy a home than it is today. Mortgage lender's rules and restrictions for borrowers are out of date. Endless house pricce increases, residency considerations, and slow wage growth and the cost of living crisis have excluded millions from their homeownership dream."}
        </p>
        <p>{"It's time for change."}</p>
        <p>
          {"We made a way to help left-behind home buyers get a foot on the property ladder. And while we're at it, we've taken the hassle out of the buying process. In other words, we're here to make homeownership a reality again."}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full max-w-[70%] md:max-w-[40%] lg:w-[min(40%,30rem)] justify-center items-center">
        {
          stackedOddsIconTexts.map((column, cIndex) => (
            <div className="gap-4 flex flex-col w-full" key={cIndex}>
              {
                column.map((object, oIndex) => (
                  stackedOddElement(object, oIndex)
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default StackedOdds