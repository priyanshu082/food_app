import React from "react";

const dishes = [
  {
    name: "Lampsh with rice",
    price: "$12",
    description: "Lorem ipsum dolor sit amet.",
    image: "/path/to/image1.jpg",
  },
  {
    name: "Fish and Veggie",
    price: "$15",
    description: "Lorem ipsum dolor sit amet.",
    image: "/path/to/image2.jpg",
  },
  {
    name: "Tofu Chili",
    price: "$10",
    description: "Lorem ipsum dolor sit amet.",
    image: "/path/to/image3.jpg",
  },
  {
    name: "Egg and Cucumber",
    price: "$8",
    description: "Lorem ipsum dolor sit amet.",
    image: "/path/to/image4.jpg",
  },
];

const SpecialDishes = () => (
  <div className="flex flex-col justify-center items-center mt-[5vw] bg-gray-100">
    <div className="flex flex-col justify-center items-center mx-[7vw]">
      <div className="text-red-800 text-[5vw]">Our Special Dishes</div>
      <div className="w-[35vw]">Lorem ipsum dolor, sit amet consectetNihil,  vitae fugit nobis voluptatum eaque eum facilis ipsa odio praesentium, velit consectetur..</div>
    </div>
  </div>
);

export default SpecialDishes;
