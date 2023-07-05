import PropTypes from "prop-types";
import { useState } from "react";

function FaqCard(props) {
  const [detailIsOpen, toggleDetailIsOpen] = useState(false);

  return (
    <details className="min-h-[4rem] p-4 shadow-lg shadow-brown-gray/50 rounded-lg flex items-center">
      <summary className="grid grid-cols-[repeat(12,1fr)] w-[85vw] md:w-[40vw] xl:max-w-[30rem] gap-4 items-center justify-end list-none cursor-pointer font-bold" onClick={() => toggleDetailIsOpen(state => !state)}>
        <p className="col-span-11">
          {props.faq.title}
        </p>
        <div className={`p-3 bg-brown-accent rounded-full h-3 w-3 ${detailIsOpen ? "rotate-180" : ""} bg-[url('faq/chevron-bottom.svg')] bg-no-repeat bg-center bg-auto`} role="img" aria-roledescription="chevron bottom icon" />
      </summary>
      <p className="w-[85vw] md:w-[40vw] xl:max-w-[30rem] mt-3">
        {props.faq.details}
        {props.faq.link && props.faq.link}
        {props.faq.postLinkText && props.faq.postLinkText}
      </p>
    </details>
  )
}

FaqCard.propTypes = {
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.any.isRequired,
    link: PropTypes.object,
    postLinkText: PropTypes.string,
  })
}

export default FaqCard