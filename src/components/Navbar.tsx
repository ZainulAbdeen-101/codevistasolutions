"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  HiBars3CenterLeft,
} from "./Icons";
import { Sentence, navbar } from "./motion";

export default function Navbar() {
  const navLinks = [
    "Work",
    "Services",
    "Pricing",
    "Contacts",
    "About",
    "Blogs",
  ];
  const RenderNavlink = (content: string) => {
    const scrolltold = content;
    const handleClicknav = () => {
      document
        .getElementById(scrolltold)
        ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li
        key={content}
        onClick={handleClicknav}
        className="underline-none hover:underline hover:decoration-[#FFCC00] decoration-2 underline-offset-4 transition delay-75 duration-100"
      >
        {content}
      </li>
    );
  };
  const Topnav = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <motion.div
        variants={Sentence}
        initial="hidden"
        animate={"visible"}
        className="backdrop-filter backdrop-blur-md lg:flex justify-around gap-x-10 items-center min-[320px]:hidden  fixed top-0 left-0 w-[100%] z-50 pt-3 pb-3   "
      >
        <motion.div onClick={Topnav} variants={navbar} className="">
          <Image
            src={"/logo.png"}
            alt="codevistasolution.com"
            width={50}
            height={50}
          />
        </motion.div>
        <motion.ul
          variants={navbar}
          className="lg:flex   min-[320px]:hidden  font-font justify-center md:gap-10  md:text-xl cursor-pointer"
        >
          {navLinks.map((nav) => RenderNavlink(nav))}
        </motion.ul>

        <motion.div variants={navbar} className="flex gap-3">
          <Link
            href={"https://www.instagram.com/codevista_solution/"}
            target="_blank"
          >
            <AiFillInstagram fill="#3098F3" size={30} />
          </Link>
          <Link
            href={"https://www.facebook.com/Codevista-solution-108838185572001"}
            target="_blank"
          >
            <AiFillFacebook fill="#3098F3" size={30} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/codevista-solution-88070027a/"}
            target="_blank"
          >
            <AiFillLinkedin fill="#3098F3" size={30} />
          </Link>
        </motion.div>
      </motion.div>
      <div className="lg:hidden drawer drawer-end z-50 fixed top-0 left-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className=" backdrop-filter backdrop-blur-sm drawer-button"
          >
            <HiBars3CenterLeft fill="#FD6470" size={40} />{" "}
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#082C4E] text-white ">
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
