"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "./motion";

export default function About() {
  return (
    <>
      <section
        id="About"
        className="overflow-hidden pt-20 pb-12 min-[320px]:px-7 md:px-14 lg:pt-[120px] lg:pb-[90px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    variants={about}
                    initial="hidden"
                    whileInView={"visible"}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                  </motion.div>
                  <motion.div
                    variants={about}
                    initial="hidden"
                    whileInView={"visible"}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                  </motion.div>
                </div>
                <motion.div
                  variants={about}
                  initial="hidden"
                  whileInView={"visible"}
                  className="w-full px-3 sm:px-4 xl:w-1/2"
                >
                  <div className="relative z-10 my-4">
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={about}
              initial="hidden"
              whileInView={"visible"}
              className="w-full px-4 lg:w-1/2 xl:w-5/12"
            >
              <div className="mt-10 lg:mt-0">
                <span className="text-[#3098F3] mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-[#082C4E] mb-8 text-3xl font-bold sm:text-4xl font-font">
                  Make our customers happy by giving services.
                </h2>
                <p className="text-body-color mb-8 text-base">
                  When you choose Codevista Solutions, you gain a reliable
                  partner dedicated to transforming your software ideas into
                  reality. With our expertise, tailored solutions, commitment to
                  quality, transparent communication, timely delivery, and
                  ongoing support, we are ready to take your software project to
                  new heights.
                </p>
                <p className="text-body-color mb-12 text-base">
                  Experience the Codevista Solutions difference and let us be
                  your trusted partner in software development.
                </p>
                <a
                  href="javascript:void(0)"
                  className="bg-[#3098F3] inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
