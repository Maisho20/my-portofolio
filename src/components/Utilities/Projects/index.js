"use client";
import { React } from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="min-h-screen pt-20 flex items-center" id="projects">
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
              className="shadow-lg shadow-gray-300 rounded p-5 min-h-80"
              data-aos="fade-down-right"
            >
              <Image
                src="/image/project/iLeave.png"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg border border-gray-300 mb-4 drop-shadow-md"
              />
              <div className="md:row-span-4 md:col-span-2 self-center">
                <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                  iLeave
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                      src="/image/tools/PostgreSQL.png"
                      alt="NextJS"
                      width={15}
                      height={15}
                    />
                    <h2 className="text-xs font-semibold inline">PostgreSQL</h2>
                  </div>
                </div>
                <p className="mulish text-xs md:text-base font-semibold mb-4">
                  iLeave is a web-based system that functions to record every
                  leave activity proposed by the employees at PT Petrokimia
                  company. This system is built using the Laravel framework and
                  PostgreSQL.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div
              className="shadow-lg shadow-gray-300 rounded p-5 min-h-80"
              data-aos="fade-down-left"
            >
              <Image
                src="/image/project/smart-city.png"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg border border-gray-300 mb-4 drop-shadow-md"
              />
              <div className="md:row-span-4 md:col-span-2 self-center">
                <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                  Smart City
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                  Smart City website created using Laravel, Bootstrap CSS and
                  MySQL. This project contain information about Smart City
                  program in Malang Regency.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div
              className="shadow-lg shadow-gray-300 rounded p-5 min-h-80"
              data-aos="fade-up-right"
            >
              <Image
                src="/image/project/Pantai 3 Warna.png"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg border border-gray-300 mb-4 drop-shadow-md"
              />
              <div className="md:row-span-4 md:col-span-2 self-center">
                <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                  VacationPal
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                  VacationPal is a website that provides information about
                  tourist attractions in Indonesia. This website was built using
                  the Laravel framework.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div
              className="shadow-lg shadow-gray-300 rounded p-5 min-h-80"
              data-aos="fade-up-left"
            >
              <Image
                src="/image/project/transfer-me.png"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg border border-gray-300 mb-4 drop-shadow-md"
              />
              <div className="md:row-span-4 md:col-span-2 self-center">
                <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                  TransferMe
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/flutter.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                    />
                    <h2 className="text-xs font-semibold inline">Flutter</h2>
                  </div>

                  <div className="flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded">
                    <Image
                      src="/image/tools/dart.png"
                      alt="NextJS"
                      width={16}
                      height={16}
                    />
                    <h2 className="text-xs font-semibold inline">Dart</h2>
                  </div>
                </div>
                <p className="mulish text-xs md:text-base font-semibold mb-4">
                  TransferMe is a simple digital wallet prototype designed for
                  effortless transactions. It features an OCR system for quick
                  and easy account setup, streamlining the process and enhancing
                  user experience.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
