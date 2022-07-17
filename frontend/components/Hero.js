import React from "react";
import heroImg from "../img/hero-img.jpg";
import Image from "next/image";
const { motion } = require("framer-motion");

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image src={heroImg} alt="hero" layout="fill" className="w-screen" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
        <motion.h1
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className=" text-6xl text-gray-200 tracking-wider text-center leading-relaxed">
          Deb's Designs
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.3,
            type: "tween",
          }}
          href="#products-gallery"
          className="bg-green-400 hover:bg-green-500 duration-300 rounded-sm w-max px-10 py-5 text-xl">
          Shop Now
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
