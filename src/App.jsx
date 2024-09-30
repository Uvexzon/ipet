import { useState } from "react";
import Wrapper from "./components/Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";

import Footer from "./components/footer";
import ContactInfo from "./components/ContactInfo";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Directors from "./components/Directors";

function App() {
  return (
    <Wrapper>
      <ContactInfo />
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <About />

      {/* Courses Section */}
      <Courses />

      <div className="flex justify-center px-4">
        <Directors />
      </div>
      <Footer />
    </Wrapper>
  );
}
export default App;
