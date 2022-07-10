import React from "react";
import heroImg from "../img/hero-img.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image src={heroImg} alt="hero" layout="fill" className="w-screen" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
        <h1 className=" text-6xl text-gray-200">Deb's Designs</h1>
        <a
          href="#products-gallery"
          className="bg-green-400 hover:bg-green-500 duration-300 rounded-sm w-max px-10 py-5 text-xl">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
