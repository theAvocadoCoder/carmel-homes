import faqs from "../faqs";
import FaqCard from "../components/FaqCard";

function Faqs() {
  return (
    <section className="h-max flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-6 md:gap-10 px-5 py-10">
        {
          faqs.map((faq, index) => (
            <div key={index}>
              <FaqCard faq={faq} />
            </div>
          ))
        }
      </section>
  )
}

export default Faqs