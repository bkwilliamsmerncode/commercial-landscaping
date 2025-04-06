import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact"
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={ <Home />}/> 
  <Route path="/About" element={ <About />}/> 
  <Route path="/Projects" element={ <Projects />}/> 
  <Route path="/Services" element={ <Services />}/> 
  <Route path="/Contact" element={ <Contact />}/> 
  <Route path="/Testimonials" element={ <Testimonials /> } /> 
</Routes>
</>
  );
}

export default App;