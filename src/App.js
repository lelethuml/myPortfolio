import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import the CSS file (if needed)
import AOS from 'aos'; // Import the 'aos' library with an uppercase 'A'

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";


function App() {
  useEffect(() => {
    AOS.init(); // Corrected to use 'AOS.init()'
  }, []);

  return <>
    <Header/>
    <main>
      <Hero/>
    </main>

    <Footer/>

  </>
}

export default App;
