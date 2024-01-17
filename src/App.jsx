import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
//import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Parcours from "./components/parcourtravail/Parcours";
import Cetification from "./certifications/Certification"

const App = () => {
  return (
    <>

      <Header />
      <Topbar />
      <Intro />
     
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Cetification/>
      <Parcours/>
      
      <Contact />
      <Footer />
     
    </>
  );
};

export default App;
