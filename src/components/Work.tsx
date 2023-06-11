"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCode,
  HiColorSwatch,
  IoPeopleOutline,
  VscServerProcess,
} from "./Icons";
import { Sentence, image, letter } from "./motion";

export default function Work() {
  return (
    <>
      <div className="flex  lg:flex-row min-[320px]:flex-col lg:h-screen lg:justify-evenly  bg-[#FFFBED] lg:items-center    ">
        <motion.div
          variants={Sentence}
          initial="hidden"
          whileInView={"visible"}
          className="lg:max-w-[500px] min-[320px]:m-4 "
        >
          <h1 className="font-font min-[320px]:text-center min-[320px]:text-[30px] lg:text-[50px] ">
            How We <span className="text-[#3098F3] ">Operate</span> ?
          </h1>
          <div className=" flex flex-col   lg:gap-8 mt-1">
            <motion.div
              variants={letter}
              className="flex lg:flex-row min-[320px]:flex-col lg:gap-10  items-center"
            >
              <div>
                <p>
                  <HiColorSwatch fill="#3098F3" size={40} /> Design
                </p>
              </div>
              <p className="text-sm text-justify">
                Our team of talented designers utilizes the latest design trends
                and user-centered principles to bring your vision to life. Get
                ready to embark on a visually stunning journey that will
                captivate your audience and elevate your brand.
              </p>
            </motion.div>
            <motion.div
              variants={letter}
              className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center"
            >
              <div>
                <p>
                  <FaCode fill="#3098F3" size={40} /> Coding
                </p>
              </div>
              <p className="text-sm text-justify">
                At Codevista Solutions, we are passionate about writing clean,
                efficient, and scalable code. Our experienced developers thrive
                on challenging projects, employing best practices and
                cutting-edge technologies to build robust and reliable software
                solutions
              </p>
            </motion.div>
            <motion.div
              variants={letter}
              className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center"
            >
              <div>
                <p>
                  <VscServerProcess fill="#3098F3" size={40} /> testing
                </p>
              </div>
              <p className="text-sm text-justify">
                Ensuring flawless functionality is a crucial step in our
                software development process. Our dedicated testing team
                rigorously puts your software through its paces, meticulously
                identifying and resolving any bugs or glitches
              </p>
            </motion.div>
            <motion.div
              variants={letter}
              className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center"
            >
              <div>
                <p>
                  <IoPeopleOutline stroke="#3098F3" size={40} /> Submit
                </p>
              </div>
              <p className="text-sm text-justify">
                When its time to deliver your software, we ensure a smooth
                transition from development to deployment. Our team handles the
                final stages with precision and care, packaging your solution
                and assisting with installation, configuration, and integration.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={image}
          initial="hidden"
          whileInView={"visible"}
          className="min-[320px]:m-4 md:mx-auto lg:mx-0"
        >
          <Image src={"/work.png"} alt="" width={600} height={0} />
        </motion.div>
      </div>
    </>
  );
}
