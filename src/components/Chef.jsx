import React from 'react';
import chef from "../assets/chef 1.png"
import Button from './Button';
import img5 from "../assets/Group (3).png"

const Chef = () => (
  <section className="py-8 bg-white relative">
       <img src={img5} className="h-[20vw] mt-[0vw] ml-[4vw] absolute " />
    <div className="flex flex-col md:flex-row  my-[2vw] justify-around relative mx-[7vw]">

      <div className="w-[50%] flex flex-col gap-[3vw]  py-[5vw] px-[3vw] ">
        <div className="text-[4vw] leading-[5vw]  font-semibold w-[35vw]">Our experts Chefs</div>
        <div className="mt-[1vw] w-[75%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          aliquid ex pariatur, veritatis doloremque repudiandae sed ipsa
          molestias ea omnis magn
        </div>
        <div className="flex flex-row gap-[1vw] mt-[15vw] items-center ml-[4vw]">
          <Button className="bg-black " name="Menu" />
          <Button className="bg-red-700 " name="Book a table" />
        </div>
      </div>
<div className='items-center flex justify-center '>
        <img src={chef} className="h-[40vw]  z-10"/>
</div>
   
    </div>
  </section>
);

export default Chef;
