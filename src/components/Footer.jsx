import React from "react";
import logo from "../assets/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import img5 from "../assets/Group4.png";

const Footer = () => (
  <div className="flex flex-col gap-[2vw] mx-[10vw] text-gray-500 mb-[5vw] relative">
    <img src={img5} className="h-[40vw] mt-[-5vw] ml-[15vw] absolute " />

    <div className="flex flex-row  gap-[8vw] ">
      <div className="w-[30vw] flex flex-col gap-[2vw]">
        <div className="flex flex-col gap-[1vw]">
          <img src={logo} className="w-[15vw]" />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            assumenda commodi nihil, quibusdam placeat in ex, vel totam aliquid
            excepturi laboriosam, deleniti voluptatem voluptate quae harum ad
            fuga. Aspernatur, accusamus.
          </div>
        </div>
        <div className="font-bold text-black">OPENING HOURS</div>
        <div className="flex flex-row gap-[1vw] justify-between">
          <div>
            Monday - Friday <br />
            <div className="mt-[0.5vw]">8:00 am to 9:00 pm </div>
          </div>
          <div>
            Saturday <br />
            <div className="mt-[0.5vw]">8:00 am to 9:00 pm </div>
          </div>
          <div className="text-start">
            Sunday <br />
            <div className="mt-[0.5vw]">CLOSED </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between  w-[20vw]">
        <div className="flex flex-col gap-[1vw] mt-[3vw] ">
          <div className="font-bold text-[1vw] text-black">NAVIGATION</div>
          <div>Menu</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Main Dishes</div>
        </div>
        <div className="flex flex-col gap-[1vw] mt-[3vw] ">
          <div className="font-bold text-[1vw] text-black">NAVIGATION</div>
          <div>Menu</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Main Dishes</div>
        </div>
      </div>

      <div className="flex flex-col justify-start  mt-[3vw]">
        <div className="font-bold text-[1vw] text-black ">FOLLOW US</div>
        <div className="flex flex-row gap-[2vw] mt-[2vw]">
          <CiFacebook className="text-[2.25vw]" />
          <FaInstagram className="text-[2.25vw]" />
          <TfiTwitter className="text-[2.25vw]" />
        </div>
      </div>
    </div>

    <div className="border " />

    <div className="flex flex-row justify-between">
      <div>© 2022 Restaurants. All Right Reserved.</div>
      <div className="flex flex-row gap-[2vw]">
        <div>Terms of Services</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  </div>
);

export default Footer;
