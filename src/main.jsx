import React from "react";
import ReactDOM from "react-dom/client";
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ApplyNow from "./pages/ApplyNow";
import WhatIsRentToOwn from "./pages/WhatIsRentToOwn";
import PartnerWithUs from "./pages/PartnerWithUs";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import _404 from "./pages/404";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <_404 />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/apply-now",
        element: <ApplyNow />,
      },
      {
        path: "/what-is-rent-to-own",
        element: <WhatIsRentToOwn />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/partner-with-us",
        element: <PartnerWithUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
if (document.getElementById("root").hasChildNodes()) {
  rootElement.hydrate(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  rootElement.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}