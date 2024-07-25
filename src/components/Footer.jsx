import React from 'react';

const Footer = () => (
  <footer className="bg-white py-8">
    <div className="container mx-auto text-center">
      <div className="text-2xl font-bold">Restaurant</div>
      <nav className="space-x-4 my-4">
        <a href="#home" className="text-gray-700">Home</a>
        <a href="#menu" className="text-gray-700">Menu</a>
        <a href="#events" className="text-gray-700">Events</a>
        <a href="#gallery" className="text-gray-700">Gallery</a>
        <a href="#about" className="text-gray-700">About</a>
        <a href="#contact" className="text-gray-700">Contact</a>
      </nav>
      <div className="text-gray-700">&copy; 2024 Restaurant. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;
