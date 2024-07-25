import React from 'react';

const categories = [
  { name: 'Breakfast', icon: '🍳' },
  { name: 'Vegan', icon: '🥗' },
  { name: 'Meat', icon: '🍖' },
  { name: 'Dessert', icon: '🍰' },
  { name: 'Lunch', icon: '🍱' },
  { name: 'Chocolate', icon: '🍫' },
];

const Categories = () => (
  <section className="py-8 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap justify-center">
        {categories.map(category => (
          <div key={category.name} className="m-2 p-4 bg-white shadow rounded-lg w-24 text-center">
            <div className="text-4xl">{category.icon}</div>
            <div className="mt-2 text-lg">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
