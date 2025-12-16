import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollTrigger);

const App = () => {
  return (
    <>
      <Header />

      <Hero />
    </>
  )
}

export default App;