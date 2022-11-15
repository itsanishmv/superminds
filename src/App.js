import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Venue from "./pages/Venue";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-between w-[100%] min-h-screen">
      <Navbar />
      <div className="w-[100%]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/venue" element={<Venue />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
