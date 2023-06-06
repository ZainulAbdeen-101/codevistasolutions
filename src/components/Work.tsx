import React from "react";
import Image from "next/image";
import {
  FaCode,
  HiColorSwatch,
  IoPeopleOutline,
  VscServerProcess,
} from "./Icons";

export default function Work() {
  return (
    <>
      <div className="flex  lg:flex-row min-[320px]:flex-col lg:h-screen lg:justify-evenly  bg-[#FFFBED] lg:items-center    ">
        
        <div className="lg:max-w-[500px] min-[320px]:m-4 ">
          <h1 className="font-font min-[320px]:text-center min-[320px]:text-[30px] lg:text-[50px] ">
            How We <span className="text-[#3098F3] ">Operate</span> ?
          </h1>
          <div className=" flex flex-col   lg:gap-10 mt-5">
            <div className="flex lg:flex-row min-[320px]:flex-col lg:gap-10  items-center">
              <div>
                <p>

                <HiColorSwatch fill="#3098F3" size={40} /> Design
                </p>
              </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolores nesciunt, ea quidem cupiditate quam.
            </p>
            </div>
            <div className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center">
            <div>
                <p>

              <FaCode fill="#3098F3" size={40} /> Coding
                </p>
            </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolores nesciunt, ea quidem cupiditate quam.
            </p>
            </div>
            <div className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center">
            <div>
                <p>

              <VscServerProcess fill="#3098F3" size={40} /> testing
                </p>
            </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolores nesciunt, ea quidem cupiditate quam.
            </p>
            </div>
            <div className="flex lg:flex-row lg:gap-10 min-[320px]:flex-col items-center">
            <div>
                <p>

              <IoPeopleOutline stroke="#3098F3" size={40} /> Submit
                </p>
            </div>
            <p className="text-sm text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolores nesciunt, ea quidem cupiditate quam.
            </p>
            </div>
           
           
         </div>
        </div>
          <div className="min-[320px]:m-4 md:mx-auto lg:mx-0">
          <Image src={"/work.png"} alt="" width={600} height={0} />
        </div>
      </div>
    </>
  );
}
