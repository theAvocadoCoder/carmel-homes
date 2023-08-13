import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "global/Button";
import carmelPDF from "global/carmel.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,).toString();

function FindOutMore() {
  const [numPages, setNumPages] = useState(11);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(300);

  useEffect(() => {
    if (window.innerWidth < 768) { 
      setWindowWidth(300)
    } else if (window.innerWidth < 1024) {
      setWindowWidth(window.innerWidth / 2);
    } else {
      setWindowWidth(500);
    }
  }, [])

  function onDocumentLoadSucces({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center gap-3 lg:gap-5 px-10 py-14 md:py-20 md:px-16">
      <div>
        <h2 className="text-[1.5rem] lg:text-[2rem] font-bold lg:text-center mb-2">For more information, see the PDF below</h2>
        <p className="max-w-2xl text-[1rem] sm:text-[1.2rem] lg:text-center">Rent-to-own is a home ownership program designed to make your dream of home ownership a reality. To get more details on how rent-to-own works, you can view or download the PDF below</p>
      </div>
      

      <div className=" border-blue-primary border-4 w-[19.25rem] md:w-[calc(50vw+.5rem)] lg:w-[31.75rem] h-16rem md:h-[calc((50vw+.5rem)/1.289473684210526)] lg:h-[23.0625rem] flex flex-col justify-between">
        <div className="bg-blue-primary text-white text-center py-2">
          <p className="font-bold">Carmel Homes Ltd - Rent-to-Own</p>
        </div>

        <Document
          file={carmelPDF}
          onLoadSuccess={onDocumentLoadSucces}
        >
          <Page pageNumber={pageNumber}
            width={windowWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>

        <nav className="flex justify-evenly bg-blue-primary text-white py-1">
          <button className="px-2 py-1 bg-blue-accent text-blue-primary font-bold rounded-md" onClick={goToPrevPage}>Previous</button>
          <span className="font-bold text-xl">{ pageNumber }</span>
          <button className="px-2 py-1 bg-blue-accent text-blue-primary font-bold rounded-md" onClick={goToNextPage}>Next</button>
        </nav>
      </div>

      <a
        href={carmelPDF}
        download="carmel-homes-rent-to-own"
        target="_blank"
        rel="noreferrer"
      >
        <Button theme="primary">Download the PDF</Button>
      </a>
    </section>
  )
}

export default FindOutMore