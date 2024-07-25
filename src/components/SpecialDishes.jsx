import React from 'react';

const dishes = [
  { name: 'Lampsh with rice', price: '$12', description: 'Lorem ipsum dolor sit amet.', image: '/path/to/image1.jpg' },
  { name: 'Fish and Veggie', price: '$15', description: 'Lorem ipsum dolor sit amet.', image: '/path/to/image2.jpg' },
  { name: 'Tofu Chili', price: '$10', description: 'Lorem ipsum dolor sit amet.', image: '/path/to/image3.jpg' },
  { name: 'Egg and Cucumber', price: '$8', description: 'Lorem ipsum dolor sit amet.', image: '/path/to/image4.jpg' },
];

const SpecialDishes = () => (
  <section className="py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Our Special Dishes</h2>
      <div className="flex flex-wrap justify-center">
        {dishes.map(dish => (
          <div key={dish.name} className="m-2 p-4 bg-white shadow rounded-lg w-60">
            <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded" />
            <div className="mt-4 text-xl font-bold">{dish.name}</div>
            <div className="text-gray-500">{dish.price}</div>
            <div className="mt-2 text-gray-700">{dish.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialDishes;
