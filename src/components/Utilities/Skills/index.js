import Image from "next/image";

const Skills = () => {
  return (
    <section
      className="mx-auto w-full min-w-screen p-4 py-6 lg:py-8 min-h-screen md:pt-10 pt-5 flex items-center"
      id="skills"
    >
      <div className="container mx-auto px-5">
        <h1
          className="text-center font-bold text-4xl mb-10"
          data-aos="fade-down"
        >
          Skills
        </h1>
        <div className="flex flex-col md:flex-row items-center md:grid md:grid-cols">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-xs md:text-sm shadow-lg shadow-gray-300 rounded p-5">
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/html.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">HTML</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/js.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">Javascript</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/css.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">CSS</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/php.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">PHP</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/laravel.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">Laravel</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/nextjs.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">NextJS</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/tailwindcss.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">
                TailwindCSS
              </h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/bootstrap.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">Bootstrap</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/mysql.png"
                  alt="..."
                  width={36}
                  height={36}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">MySQL</h1>
            </div>
            {/* 1 */}
            <div className="flex flex-col">
              <div className="relative w-16 h-16 rounded-full flex justify-center items-center shadow-lg shadow-gray-300 mx-auto">
                <Image
                  src="/image/tools/midtrans-2.png"
                  alt="..."
                  width={40}
                  height={40}
                  className="absolute"
                />
              </div>
              <h1 className="mx-auto mt-4 font-bold text-center">MIDTRANS</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
