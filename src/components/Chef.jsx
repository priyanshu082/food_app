import React from 'react';

const Chef = () => (
  <section className="py-8 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Our Expert Chef</h2>
      <div className="flex justify-center items-center">
        <img src="/path/to/chef-image.jpg" alt="Chef" className="rounded-full w-32 h-32 object-cover" />
        <div className="ml-4 text-left">
          <div className="text-xl font-bold">Chef Name</div>
          <div className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex lorem.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Chef;
