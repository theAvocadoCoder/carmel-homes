import { Outlet } from "react-router-dom";
import Navbar from "global/Navbar";
import Footer from "global/Footer";

function App() {
  return (
    <div className="font-raleway text-blue-primary">
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App