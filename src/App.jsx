import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import SpecialDishes from './components/SpecialDishes';
import Chef from './components/Chef';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App = () => (
  <div>
    {/* <Header /> */}
    <Hero/>
    <Categories />
    <SpecialDishes />
    <Chef />
    <Testimonials />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
