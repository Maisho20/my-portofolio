"use client";
import { React } from "react";
import Image from "next/image";
// import ModalProject from "./ModalProject";

const Projects = () => {
  return (
    <section
      className="mx-auto w-full min-w-screen p-4 py-6 lg:py-8 min-h-screen md:pt-5 pt-5 flex items-center"
      id="projects"
    >
      <div className="container mx-auto px-5">
        <h1
          className="text-center font-bold text-4xl mb-10"
          data-aos="fade-down"
        >
          Projects
        </h1>

        <div className="flex items-center grid grid-col md:grid-cols-2 gap-8">
          {/* 1 */}
          <div
            className="shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-right"
          >
            <Image
              src="/image/project/smart-city.png"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-1">Smart City</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                <Image
                  src="/image/tools/laravel.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                />
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

            <p className="mulish text-xs md:text-base font-semibold mb-4">
              Smart City website created using Laravel, Bootstrap CSS and MySQL.
              This project contain information about Smart City program in
              Malang Regency.
            </p>
          </div>

          {/* 2 */}
          <div
            className="shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-left"
          >
            <Image
              src="/image/project/smart-city.png"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-1">Smart City</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                <Image
                  src="/image/tools/laravel.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                />
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

            <p className="mulish text-xs md:text-base font-semibold mb-4">
              Smart City website created using Laravel, Bootstrap CSS and MySQL.
              This project contain information about Smart City program in
              Malang Regency.
            </p>
          </div>

          {/* 3 */}
          <div
            className="shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-up-right"
            data-aos-delay="200"
          >
            <Image
              src="/image/project/smart-city.png"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-1">Smart City</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                <Image
                  src="/image/tools/laravel.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                />
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

            <p className="mulish text-xs md:text-base font-semibold mb-4">
              Smart City website created using Laravel, Bootstrap CSS and MySQL.
              This project contain information about Smart City program in
              Malang Regency.
            </p>
          </div>

          {/* 4 */}
          <div
            className="shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <Image
              src="/image/project/smart-city.png"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-1">Smart City</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                <Image
                  src="/image/tools/laravel.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                />
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

            <p className="mulish text-xs md:text-base font-semibold mb-4">
              Smart City website created using Laravel, Bootstrap CSS and MySQL.
              This project contain information about Smart City program in
              Malang Regency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
