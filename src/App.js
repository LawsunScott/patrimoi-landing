import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import BailleursSociauxPage from "@/pages/BailleursSociauxPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bailleurs-sociaux" element={<BailleursSociauxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
