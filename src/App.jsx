import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import SpecialDishes from './components/SpecialDishes';
import Chef from './components/Chef';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <Categories />
    <SpecialDishes />
    <Chef />
    <Testimonials />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
