"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen pt-20 flex items-center" id="educations">
      <div className="container mx-auto p-5">
        <h1
          className="text-center font-bold text-4xl mb-10"
          data-aos="fade-down"
        >
          Education
        </h1>

        <div className="flex justify-center">
          <div
            className="grid gap-5 sm:w-screen md:w-3/6 border-l-2 border-black pl-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* 1 */}
            <div className="p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow">
              <div className="absolute top-1/2 transform-translate-y-1/2 -mx-10">
                <div
                  className="w-3 h-3 bg-black rounded-full"
                  data-aos="zoom-out-right"
                  data-aos-delay="200"
                ></div>
              </div>

              <div data-aos="fade-left" data-aos-delay="300">
                <div className="flex justify-between items-center">
                  <h1 className="text-md md:text-xl font-bold">
                    State Polytechnic of Malang
                  </h1>
                  <h2 className="text-xs md:text-sm text-right">
                    Malang, Indonesia
                  </h2>
                </div>
                <h2 className="text-xs md:text-sm text-gray-600 mb-4">
                  D4 - Informatics Engineering
                </h2>
                <ul className="list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4">
                  <li>GPA: 3.74/4.0{/*- GPA: 3.61/4.0*/}</li>
                </ul>
                <div className="flex justify-end items-center text-xs text-gray-400">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h3 className="inline ml-2">August 2021 - July 2025</h3>
                </div>
              </div>
            </div>

            {/* 2 */}
            {/* <motion.div
              // ref={ref}
              // initial={{ y: "100%" }}
              // animate={inView ? { y: 0 } : {}}
              // transition={{ delay: 0 }}
              className="p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow"
            >
              <div className="absolute top-1/2 transform-translate-y-1/2 -mx-10">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-md md:text-xl font-bold">
                  State Polytechnic of Malang
                </h1>
                <h2 className="text-xs md:text-sm text-right">
                  Malang, Indonesia
                </h2>
              </div>
              <h2 className="text-xs md:text-sm text-gray-600 mb-4">
                D4 - Informatics Engineering
              </h2>
              <ul className="list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4">
                <li>Ungraduated - GPA: 3.61/4.0</li>
              </ul>
              <div className="flex justify-end items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faCalendar} />
                <h3 className="inline ml-2">August 2021 - Now</h3>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
