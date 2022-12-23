import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";

// import pages
import Home from "./Pages/Home";
import Bjj from "./Pages/Bjj";
import Mma from "./Pages/Mma";
import Grappling from "./Pages/Grappling";
import BTT from "./Pages/BTT";
import Preis from "./Pages/Preis";
import Kontakt from "./Pages/Kontakt";
import SharedLayout from "./components/SharedLayout";

function App() {
  //aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 500);
  }
  return (
    !loading && (
      <div className="App overflow-x-hidden">
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/" element={<SharedLayout />}>
              <Route path="/BJJ" element={<Bjj />} />
              <Route path="/MMA" element={<Mma />} />
              <Route path="/Grappling" element={<Grappling />} />
              <Route path="/BTT" element={<BTT />} />
              <Route path="/Preis" element={<Preis />} />
              <Route path="/Kontakt" element={<Kontakt />} />
            </Route>
          </Routes>
        </Router>
      </div>
    )
  );
}

export default App;
