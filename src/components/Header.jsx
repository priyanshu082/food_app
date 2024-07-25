import React from 'react';

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Restaurant</div>
      <nav className="space-x-4">
        <a href="#home" className="text-gray-700">Home</a>
        <a href="#menu" className="text-gray-700">Menu</a>
        <a href="#events" className="text-gray-700">Events</a>
        <a href="#gallery" className="text-gray-700">Gallery</a>
        <a href="#about" className="text-gray-700">About</a>
        <a href="#contact" className="text-gray-700">Contact</a>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Book a Table</button>
      </nav>
    </div>
  </header>
);

export default Header;
