import React from "react";
import { BsPcDisplay, IoColorFilter, MdOutlineMobileFriendly } from "./Icons";

export default function Services() {
  return (
    <>
      <div id="Services" className="text-center mt-14">
        <p className="text-xl  font-semibold">Our Services</p>
        <h1 className="min-[320px]:text-[25px] text-[35px] text-[#082C4E] font-font font-semibold">
          We provide{" "}
          <span className="text-[#3098F3]">professional IT solutions</span> for
          Our Clients
        </h1>
      </div>
      <div className="grid min-[320px]:grid-cols-1  md:grid-cols-3 min-[320px]:gap-5 lg:gap-10 min-[320px]:px-6  lg:px-14 lg:py-10 bg-[#F7F7F7]  lg:h-screen items-center min-[320px]:mb-[100px]    mb-20">
        <div className="shadow-xl text-center min-[320px]:h-[320px] md:h-[400px] border-2 border-[#3098F3] hover:border-[white] p-6 rounded-lg   hover:bg-[#082C4E] bg-[white]/10  duration-500 delay-75  hover:text-white  backdrop-filter backdrop-blur-lg  ">
          <h3 className="font-font min-[320px]:text-[30px] lg:text-[40px] leading-tight text-[#3098F3]">
            Website Development
          </h3>
          <BsPcDisplay className="mx-auto" fill="#FE6571" size={50} />
          <h4 className="text-[#FD6470]  text-lg font-bold mt-5 ">Features</h4>
          <ul className="flex flex-col tracking-wider  font-light gap-2">
            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                Website Designing
              </a>{" "}
            </li>
            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                Wordpress Development
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                web Application
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                {" "}
                E-Commerce Website
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-xl min-[320px]:h-[320px] md:h-[400px] text-center  p-6 rounded-lg border-2 border-[#3098F3]  hover:bg-[#082C4E] hover:border-[white] duration-500 delay-75  hover:text-white  bg-[white]/10 backdrop-filter backdrop-blur-lg ">
          <h3 className="font-font min-[320px]:text-[30px] lg:text-[44px] leading-tight text-[#3098F3]">
            Innovative Design
          </h3>
          <IoColorFilter className="mx-auto" fill="#FE6571" size={50} />
          <h4 className="text-[#FD6470] mt-3 text-lg font-bold">Features</h4>
          <ul className="flex flex-col tracking-wider  font-light gap-2">
            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                UI/UX Design
              </a>{" "}
            </li>
            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                Graphic Design
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                Logo Design
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                {" "}
                Banner Design
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-xl text-center min-[320px]:h-[320px] md:h-[400px] p-6 rounded-lg border-2 border-[#3098F3] hover:bg-[#082C4E] hover:border-[white] duration-500 delay-75  hover:text-white bg-[white]/10 backdrop-filter backdrop-blur-lg ">
          <h3 className="font-font min-[320px]:text-[30px] lg:text-[40px] leading-tight text-[#3098F3]">
            Mobile Development
          </h3>
          <MdOutlineMobileFriendly
            className="mx-auto"
            fill="#FE6571"
            size={50}
          />
          <h4 className="text-[#FD6470] mt-5 text-lg font-bold">Features</h4>
          <ul className="flex flex-col tracking-wider  font-light gap-2">
            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                Android Development
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                IOS Development
              </a>{" "}
            </li>

            <li className="">
              <a className="hover:text-[#FD6470] duration-100 " href="">
                {" "}
                Cross-Plateform
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
