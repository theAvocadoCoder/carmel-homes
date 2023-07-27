import { Link } from "react-router-dom";

export default function render(element, index, copiedToClipBoard, showPopUp, hidePopUp) {
  switch (element.type) {
    case "p":
      return _renderP(element, index);
    case "ul":
      return _renderUl(element, index, copiedToClipBoard, showPopUp, hidePopUp);
    case "h4":
      return _renderH4(element, index);
    case "h3":
      return _renderH3(element, index);
    case "h2":
      return _renderH2(element, index);
  }
}

function _renderP(p, index = 0) {
  const pClass = "max-w-full";
  const linkClass = "text-brown-primary font-semibold";

  if (!p.withLink) {
    switch (typeof p.content) {
      case "string":
        return (
          <p className={pClass} key={index}>{p.content}</p>
        );
        
      case "object":
        return p.content.map((pString, pIndex) => {
          return (
            <p className={pClass} key={pIndex}>{pString}</p>
          );
        });
    }
  } else {
    return (
      <p className={pClass} key={index}>
        {p.content.preLink}
        <a className={linkClass} target="_blank" rel="noreferrer" href={p.content.link[0]}>{ p.content.link[1] }</a>
      </p>
    )
  }
}

function _renderLi(element, index, style, copiedToClipBoard, showPopUp, hidePopUp) { 
  switch (style) {
    case "definitions":
      return (
        <li key={index}>
          <span className="font-semibold">{element.word}</span>{element.definition}{element.link ? (
            <Link to={element.link[0]} className="font-semibold text-brown-primary break-all">{element.link[1]}</Link>
          ) : ""}
        </li>
      )
    case "tracking tech 2":
      return (
        <li key={index}>
          <span className="font-semibold">{element.name}</span><br />
          Type: {element.type} Cookies<br />
          Administered by: Us<br />
          Purpose: These cookies {element.purpose}
        </li>
      )
    case "personal data 1":
    case "personal data 2":
      return (
        <li key={index}>
          <span className="font-semibold">{element.purpose ? element.purpose : element.situation}</span>{element.details}
        </li>
      )
    case "contact":
      return (
        <li key={index} className="relative">
          {element.text}
          {
            element.link[0].match(/^\/.*$/) ? (
              <Link to={element.link[0]} className="text-brown-primary font-semibold">
                {element.link[1]}
              </Link>
            ) : element.link[0] == "" ? (
              <>
                <span className="max-w-full text-brown-primary font-semibold cursor-pointer" onClick={(e) => {
                  let text = e.target.innerHTML;
                    navigator.clipboard.writeText(text);
                    showPopUp();
                    setTimeout(() => {
                      hidePopUp();
                    }, 1000);
                }}>
                  {element.link[1]}
                </span>
                <span className={`absolute ${copiedToClipBoard} [font-size:0.6rem] [line-height:1rem] align-middle text-white py-1 px-3 bg-blue-primary rounded-lg w-max -bottom-7 left-20`}>Text copied to clipboard!</span>
              </>
            ) : (
              <a href={element.link[0]} target="_blank" rel="noreferrer" className="max-w-full text-brown-primary font-semibold">{ element.link[1] }</a>
            )
          }
        </li>
      )
    case "personal data":
    case "third party":
    case "tracking tech 1":
    case "legal reqs":
    default:
      return (
        <li key={index}>
          {element}
        </li>
      )
  }
}

function _renderUl(element, index, copiedToClipBoard, showPopUp, hidePopUp) {
  
  return (
    <ul key={index} className="p-[revert] list-disc">
     {
        element.content.map((listItem, listIndex) => {
          return _renderLi(listItem, listIndex, element.style, copiedToClipBoard, showPopUp, hidePopUp) 
      })
     }
    </ul>
  )
}

function _renderH2(element, index) {
  return <h2 key={index} className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-bold mt-4">{element.content}</h2>
}

function _renderH3(element, index) {
  return <h3 key={index} className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-brown-primary mt-4">{element.content}</h3>
}

function _renderH4(element, index) {
  return <h4 key={index} className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-semibold mt-4">{element.content}</h4>
}

export {
  _renderP
}
