import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        {/* <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/venue" element={VenuePage} />
        </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
