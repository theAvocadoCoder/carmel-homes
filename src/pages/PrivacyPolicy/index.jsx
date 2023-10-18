import { Helmet } from "react-helmet";

//eslint-disable-next-line no-unused-vars
import policyText from "./policy";
//eslint-disable-next-line no-unused-vars
import render from "./policyRenderers";
import useStore from "src/store";

function PrivacyPolicy() {
  const [
    copiedToClipBoard, showPopUp, hidePopUp] = useStore(
      (state) => [state.copiedToClipBoard, state.showPopUp, state.hidePopUp]
    )
  return (
    <>
      <Helmet>
        <title>Carmel Homes Ltd - Privacy Policy</title>
        <meta name="description" content="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service." />
        {/*Google tag (gtag.js)*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
      <section className="p-8 md:p-16 lg:p-36 py-4 md:py-8 lg:py-16">
        <h1 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold">Privacy Policy</h1>
        <span>Last updated: January 02, 2023</span>

        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. 
        </p>
      </section>

      <section className="relative p-8 md:p-16 lg:p-36 2xl:max-w-[75%] pt-4 md:pt-8 lg:pt-16">
        {
          policyText.map((element, index) => (
            render(element, index, copiedToClipBoard, showPopUp, hidePopUp)
          ))
        }
      </section>
      
    </>
  )
}

export default PrivacyPolicy
