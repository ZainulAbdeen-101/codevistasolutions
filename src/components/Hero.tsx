"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sentence, image, letter } from "./motion";

export default function Hero() {
  return (
    <>
      <div className=" w-[100%] h-screen">
        <div className="flex lg:flex-row  min-[320px]:flex-col justify-evenly min-[320px]:pt-[30px]   lg:pt-[100px]">
          <motion.div
            variants={Sentence}
            initial="hidden"
            whileInView="visible"
            className="lg:mt-[150px] lg:text-left min-[320px]:mb-10 min-[320px]:text-center    font-font"
          >
            <motion.p
              variants={letter}
              className="min-[320px]:text-[25px] lg:text-[40px]"
            >
              Welcome !
            </motion.p>

            <motion.h1
              variants={letter}
              className=" min-[320px]:text-[40px] lg:text-[64px] font-light leading-none"
            >
              CodeVista Solutions
            </motion.h1>
            <motion.p
              variants={letter}
              className="min-[320px]:text-[20px] min-[320px]:mt-5 lg:text-[35px] font-bold text-[#FFCC00]"
            >
              {" "}
              Empowering Your Digital Future.
            </motion.p>
          </motion.div>
          <motion.div
            variants={image}
            initial="hidden"
            whileInView={"visible"}
            className="min-[320px]:m-4 md:mx-auto lg:mx-0"
          >
            <Image src={"/o.png"} height={520} width={520} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
