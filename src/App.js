import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
