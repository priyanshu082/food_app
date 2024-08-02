import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import SpecialDishes from "./components/SpecialDishes";
import Chef from "./components/Chef";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import curve from "../src/assets/ellipse.png";
import curve1 from "../src/assets/Ellipse1.png";
import curve2 from "../src/assets/Ellipse2.png";

const App = () => (
  <div>
    <div>
      <img src={curve} className="h-[30vw] absolute" />
      <img src={curve1} className="h-[25vw] absolute" />
      <img src={curve2} className="h-[30vw] absolute" />
    </div>

    <div className="overflow-hidden ">
      {/* <Header /> */}

      <Hero />
      <Categories />
      <SpecialDishes />
      <Chef />
      <Testimonials />
      <Newsletter />
      {/* 
      <Footer /> */}
    </div>
  </div>
);

export default App;
