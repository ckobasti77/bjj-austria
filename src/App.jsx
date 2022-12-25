import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsChevronBarUp } from "react-icons/bs";

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
    duration: 500,
    delay: 150,
  });

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight >= 1000) {
        setShowScrollToTop(true);
      } else if (currentHeight < 1000) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <button
          className="scrollToTop fixed bottom-[2.5vw] right-[2.5vw]"
          onClick={() => scrollToTop()}
          style={{ visibility: showScrollToTop ? "visible" : "hidden" }}
          title="Scroll To Top"
        >
          <BsChevronBarUp />
        </button>
      </div>
    )
  );
}

export default App;
