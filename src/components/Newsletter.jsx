import React from 'react';

const Newsletter = () => (
  <section className="py-8 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Get On Promo Code by Subscribing To our Newsletter</h2>
      <form className="flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded-l" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-r">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Newsletter;
