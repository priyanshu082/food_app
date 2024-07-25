import React from 'react';

const testimonials = [
  { name: 'Customer 1', comment: 'Great food!', image: '/path/to/customer1.jpg' },
  { name: 'Customer 2', comment: 'Excellent service!', image: '/path/to/customer2.jpg' },
];

const Testimonials = () => (
  <section className="py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Our Happy Customers</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map(testimonial => (
          <div key={testimonial.name} className="m-2 p-4 bg-white shadow rounded-lg w-60">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
            <div className="mt-4 text-xl font-bold">{testimonial.name}</div>
            <div className="mt-2 text-gray-700">{testimonial.comment}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
