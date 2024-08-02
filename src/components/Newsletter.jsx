import React from "react";
import bgImg from "../assets/bgImg.png";
import Button from "./Button";

const Newsletter = () => (
  <div className="my-[8vw] justify-center items-center flex">
    <div
      className="h-[30vw] w-[80vw] gap-[4vw] relative flex justify-center items-center rounded-[3vw] flex-col "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[40vw] text-white text-[2.5vw] text-center font-semibold">
        Get or Promo Code by Subscribing to our Newsletter
      </div>
      <div>
        <input
          placeholder="Enter your mail"
          className="w-[40vw] rounded-[1vw] py-[1.5vw] px-[1vw]"
        />
        <div className="absolute mt-[-4vw] ml-[31vw]">
          <Button className="bg-red-800" name="Subscribe" />
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;
