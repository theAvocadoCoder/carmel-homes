
function Partners() {
  const partners = [
    {
      title: "Investors",
      details: "",
      icon: "bg-[url('partnerwithus/investors-icon.svg')]",
    },
    {
      title: "Mortgage Brokers",
      details: "Flexible, low-deposit solutions for mortgage brokers and specialist lending intermediaries",
      icon: "bg-[url('partnerwithus/mortgage-brokers-icon.svg')]",
    },
    {
      title: "Estate Agents",
      details: "Close more deals faster, and grow your revenue by partnering with Carmel homes",
      icon: "bg-[url('partnerwithus/estate-agents-icon.svg')]",
    },
    {
      title: "Other Partners",
      details: "Partner solutions for advisers, accountants, conveyancers and other homebuying professionals",
      icon: "bg-[url('partnerwithus/other-partners-icon.svg')]",
    },
  ]
  return (
    <div className="flex flex-col lg:flex-row md:flex-wrap justify-center gap-5 w-[clamp(15rem,99%,30rem)] h-fit p-0">
      {
        partners.map((partner, index) => (
          <div className={`flex ${index%2!=0?"flex-row-reverse text-left":"text-right"} justify-center xl:justify-start xl:flex-col xl:items-center xl:text-center gap-10 xl:gap-4 w-full xl:w-[clamp(10rem,20%,12.5rem] xl:max-w-[12.5rem] h-fit`} key={index}>
              <div className={`${partner.icon} bg-center bg-contain bg-no-repeat w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 inline-block`} />
              <div className="w[12.5rem] w-full inline-block [line-height:1.2rem]">
                <p className="font-bold">{partner.title}</p>
                <p>{partner.details}</p>
              </div>
            </div>
        ))
      }
    </div>
  )
}

export default Partners