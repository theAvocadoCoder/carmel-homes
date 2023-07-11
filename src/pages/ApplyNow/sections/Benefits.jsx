
function Benefits() {
  const benefits = [
    {
      icon: "bg-[url('applynow/apply-1.svg')]",
      title: "Response in 24 hours",
      details: "We aim to get back to you and start the process as soon as poosible",
    },
    {
      icon: "bg-[url('applynow/apply-2.svg')]",
      title: "No commitment",
      details: "You’re not committing to anything by completing this application",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "No effect on your credit card rating",
      details: "Won’t affect your ability to apply for loans or credit elsewhere - even if we’re unable to give you a property",
    },
  ]
  
  return (
    <div className="flex flex-col w-full lg:w-[clamp(25rem,30%,35rem)] gap-6 py-5">
      <h2 className="text-[2rem] font-bold">Apply Now</h2>
      <div className="hidden lg:flex flex-col gap-5">
        {
          benefits.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className={`${item.icon} bg-center bg-cover bg-no-repeat w-12 h-12`} />
              <div className="w-[clamp(16rem,70%,27rem)]">
                <p className="font-bold">{item.title}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Benefits