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
//import Directors from "./components/Directors";
import Directors from "./pages/Directors";
import Memberships from "./pages/Memberships";
import News from './pages/News';

function App() {
  return (
    <Wrapper>
      <ContactInfo />
      <Navbar />
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      {/* Courses Section */}
      <div id="courses">
        <Courses />
      </div>
      <div className="flex justify-center px-4" id="memberships">
        <Directors />
      </div>
       <div>
        <Directors />
        <Memberships/>
        <News/>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default App;
