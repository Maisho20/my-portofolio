"use client";
import { React } from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center" id="projects">
      <div className="container mx-auto px-5">
        <h1
          className="text-center font-bold text-4xl mb-10"
          data-aos="fade-down"
        >
          Projects
        </h1>

        <div className="flex items-stretch grid grid-col md:grid-row gap-8">
          {/* 1 */}
          <div
            className="md:grid md:grid-rows-4 md:grid-cols-4 md:grid-flow-col md:gap-4 shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-left"
          >
            <Image
              src="/image/project/smart-city.png"
              height={0}
              width={0}
              sizes="auto"
              style={{ width: "100%", height: "auto" }}
              className="md:row-span-4 md:col-span-2 project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <div className="md:row-span-4 md:col-span-2 self-center">
              <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                Smart City
              </h1>
              <p className="mulish text-xs md:text-base font-semibold mb-4">
                Smart City is a website for accessing information related to one
                of the programs in Malang district called Smart City. This
                website was built using the Laravel framework.
              </p>
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
            </div>
          </div>

          {/* 2 */}
          <div
            className="md:grid md:grid-rows-4 md:grid-cols-4 md:grid-flow-col md:gap-4 shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-right"
          >
            <div className="md:row-span-4 md:col-span-2 self-center">
              <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                VacationPal
              </h1>
              <p className="mulish text-xs md:text-base font-semibold mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              </p>
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
            </div>

            <Image
              src="/image/project/Pantai 3 Warna.png"
              height={0}
              width={0}
              sizes="auto"
              style={{ width: "100%", height: "auto" }}
              className="md:row-span-4 md:col-span-2 project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
          </div>
          {/* <div
            className="shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-left"
          >
            <Image
              src="/image/project/pantai 3 warna.png"
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
          </div> */}

          {/* 3 */}
          <div
            className="md:grid md:grid-rows-4 md:grid-cols-4 md:grid-flow-col md:gap-4 shadow-lg shadow-gray-300 rounded p-5"
            data-aos="fade-down-left"
          >
            <Image
              src="/image/project/transfer-me.png"
              height={0}
              width={0}
              sizes="auto"
              style={{ width: "100%", height: "auto" }}
              className="md:row-span-4 md:col-span-2 project rounded-lg border border-gray-300 mb-4 drop-shadow-md"
            />
            <div className="md:row-span-4 md:col-span-2 self-center">
              <h1 className="text-lg md:text-2xl font-bold mb-1 text-center mb-4">
                TransferMe
              </h1>
              <p className="mulish text-xs md:text-base font-semibold mb-4">
                TransferMe is a simple digital wallet prototype designed for
                effortless transactions. It features an OCR system for quick and
                easy account setup, streamlining the process and enhancing user
                experience. With TransferMe, managing your finances has never
                been simpler or more convenient.
              </p>
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
            </div>
          </div>
          {/* <div
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
          </div> */}

          {/* 4 */}
          {/* <div
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
