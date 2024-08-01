import React from "react";
import dish1 from "../assets/dish-1 1.png";
import dish2 from "../assets/dish-3 1.png";
import dish3 from "../assets/dish-5.png";
import dish4 from "../assets/dish-4.png";
import { DiHackernews } from "react-icons/di";

const dishes = [
  {
    name: "Lampsh with rice",
    price: "$12",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish1,
  },
  {
    name: "Fish and Veggie",
    price: "$15",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish2,
  },
  {
    name: "Tofu Chili",
    price: "$10",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish3,
  },
  {
    name: "Egg and Cucumber",
    price: "$8",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
    image: dish4,
  },
];

const SpecialDishes = () => (
  <div className="flex flex-col justify-center items-center mt-[5vw] bg-gray-100 h-[100vh]">
    <div className="flex flex-col justify-center items-center mx-[7vw] gap-[2vw]">
      <div className="text-red-800 text-[5vw] font-semibold">
        Our Special Dishes
      </div>
      <div className="w-[35vw]">
        Lorem ipsum dolor, sit amet consectetNihil, vitae fugit nobis voluptatum
        eaque eum facilis ipsa odio praesentium, velit consectetur..
      </div>
    </div>

    <div className="flex flex-row flex-wrap justify-center items-center gap-[2vw] mt-[12vw]">
      {dishes.map((item, index) => (
        <div className="flex flex-col items-center justify-center relative border-white bg-transparent hover:bg-white border-[2px] rounded-tl-[4vw] rounded-tr-md rounded-bl-md rounded-br-[4vw] px-[1.5vw] py-[2vw] gap-[2vw]  shadow-inner">
          <div className="relative">
          <img src={item.image} className="h-[14vw] w-[14vw] mt-[-10vw] " />
          <div className="bg-black rounded-full text-white p-[1vw] absolute mt-[-14vw] ml-[10vw] shadow-2xl">
            {item.price}
          </div>
            </div>
         
          <div className="text-[1.5vw] font-medium ">{item.name}</div>
          <div className="w-[15vw] text-[1vw] text-center">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SpecialDishes;
