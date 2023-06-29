
function WhoCanUseRTO() {
  const whoCanUseBullets = [
    {
      title: "You are self-employed",
      text: "We help hard working entrepreneurs get into home ownership. We will outline a plan so the lenders will clearly see what you already know: You deserve to be a homeowner!",
    },
    {
      title: "You’re a new immigrant",
      text: "New residents sometimes have a difficult time securing a mortgage. We can help you establish your credit to help you qualify for a traditional mortgage.",
    },
    {
      title: "You have bruised credit",
      text: "PREVIOUSLY HAD A CONSUMER PROPOSAL, OR DISCHARGED FROM BANKRUPTCY: We will work with you to repair your credit, and get on track to becoming a homeowner.",
    },
    {
      title: "You are recently divorced",
      text: "Divorce can be tough on your credit, but the path to home ownership doesn’t have to be. Let us show you how!",
    },
    {
      title: "You need to save more of a downpayment",
      text: "It is not always easy to save money. Life happens! Our program allows you to move into your home now, while saving money to be used towards the down payment at the successful completion of the program",
    },
    {
      title: "You’re in pre-foreclosure or bank said no to refinancing",
      text: "We will take a look at your situation, and develop a plan to move forward. There are options available!",
    },
    {
      title: "Other?",
      text: "We will take a look at your situation, and develop a plan to move forward. There are options available!",
    },
  ]
  return (
    <section className="md:h-[40rem] p-10 py-14 md:px-10 lg:p-20 flex flex-col gap-6 md:gap-10 lg:gap-12 md:bg-[url('whatisrenttoown/who-can-use-bg.webp')] md:bg-cover md:bg-no-repeat md:bg-center">
      <h2 className="text-center mx-auto md:text-left lg:text-center md:m-0 text-[1.5rem] [line-height:1] font-bold">Who can Use Rent to Own?</h2>
      <div className="flex flex-col md:flex-wrap items-center xl:content-center w-full h-full gap-8 xl:gap-12">
        {
          whoCanUseBullets.map((bullet, index) => (
            <div key={index} className="flex items-start justify-start gap-3 w-full md:w-[clamp(17.5rem,50%,20rem)] lg:w-[clamp(17.5rem,50%,25rem)]">
              <div className={`w-5 h-7 ${index%2===0? "bg-[url('whatisrenttoown/blue-bullet.svg')]" : "bg-[url('whatisrenttoown/brown-bullet.svg')]"} bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
              <div className="max-w-[90%]">
                <p className="font-semibold text-[1.25rem] max-w-full">
                  {bullet.title}
                </p>
                <p className="text-[.75rem] max-w-full">
                  {bullet.text}
                </p>
              </div>
            </div>
          ))
      }
    </div>
    </section>
  )
}

export default WhoCanUseRTO