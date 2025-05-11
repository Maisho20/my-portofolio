import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Experiences = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center" id="experiences">
      <div className="container mx-auto p-5">
        <h1
          className="text-center font-bold text-4xl mb-10"
          data-aos="fade-down"
        >
          Experiences
        </h1>
        <div className="flex justify-center">
          <div
            className="grid gap-5 sm:w-screen md:w-3/6 border-l-2 border-black pl-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* 1 */}
            <div className="p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow mb-10">
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
                    Full-stack Web Developer
                  </h1>
                  <h1 className="text-xs md:text-sm font-semibold text-right">
                    Gresik, Indonesia
                  </h1>
                </div>
                <h2 className="text-xs md:text-sm text-gray-600 mb-4">
                  PT. Petrokimia Gresik | Internship
                </h2>
                <ul className="list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4">
                  <li>Creating a web development plan from scratch</li>
                  <li>
                    Creating a web-based application for PT Petrokimia Gresik to
                    manage internal employee leave data.
                  </li>
                  <li>
                    Creating a manual book for project documentation, User Guide
                    and Design Standards and Guidelines.
                  </li>
                </ul>

                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  <div className="flex justify-evenly items-center gap-1 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/laravel.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                      className="items-center"
                    />
                    <Image />
                    <h2 className="text-xs font-semibold inline">Laravel</h2>
                  </div>

                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/bootstrap.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                    />
                    <h2 className="text-xs font-semibold inline">Bootstrap</h2>
                  </div>

                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/PostgreSQL.png"
                      alt="NextJS"
                      width={15}
                      height={15}
                    />
                    <h2 className="text-xs font-semibold inline">PostgreSQL</h2>
                  </div>
                </div>
                <div className="flex justify-end items-center text-xs text-gray-400">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h3 className="inline ml-2">
                    1 September 2024 - 31 January 2025
                  </h3>
                </div>
              </div>
            </div>

            {/* 2 */}
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
                    Full-stack Web Developer
                  </h1>
                  <h1 className="text-xs md:text-sm font-semibold text-right">
                    Malang, Indonesia
                  </h1>
                </div>
                <h2 className="text-xs md:text-sm text-gray-600 mb-4">
                  Dinas Komunikasi dan Informasi Kabupaten Malang | Internship
                </h2>
                <ul className="list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4">
                  <li>Created an enterprise resource planning web-based</li>
                  <li>Develop feature information for Smart City programs</li>
                  <li>
                    Developed a web-based application for the Malang Regency
                    Government to manage the data of the Smart City programs
                    {/* Integration with Mapbox for counting the distance of pick-up
                  location and destination location */}
                  </li>
                </ul>

                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  <div className="flex justify-evenly items-center gap-1 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/laravel.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                      className="items-center"
                    />
                    <Image />
                    <h2 className="text-xs font-semibold inline">Laravel</h2>
                  </div>

                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/bootstrap.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                    />
                    <h2 className="text-xs font-semibold inline">Bootstrap</h2>
                  </div>

                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/mysql.png"
                      alt="NextJS"
                      width={15}
                      height={15}
                    />
                    <h2 className="text-xs font-semibold inline">MySQL</h2>
                  </div>
                </div>
                <div className="flex justify-end items-center text-xs text-gray-400">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h3 className="inline ml-2">
                    22 February 2024 - 22 June 2024
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
