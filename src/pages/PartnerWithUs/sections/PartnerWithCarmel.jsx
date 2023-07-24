import PartnerForm from "../components/PartnerForm"
import Partners from "../components/Partners"


function PartnerWithCarmel() {
  return (
    <section className="p-5 py-16 md:px-10 2xl:py-32 flex flex-col gap-5 md:gap-10 2xl:gap-20">
      <h2 className="font-bold text-[2rem] text-center">Partner With Us</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <PartnerForm />
        <Partners />
      </div>
   </section>
  )
}

export default PartnerWithCarmel