const About = () => {
  return (
    <section
      className="mx-auto w-full min-w-screen p-4 py-6 lg:py-8 min-h-screen md:pt-10 pt-5 flex items-center"
      id="about"
    >
      <div
        className="container mx-auto px-5 flex flex-col justify-center"
        data-aos=""
      >
        <h1
          className="text-center font-bold text-4xl mb-10 bg-gray-200c"
          data-aos="fade-down"
        >
          About Me
        </h1>
        <div className="flex items-center grid grid-col md:grid-cols-2">
          <div
            className="about-image w-full md:w-3/4 h-60 md:h-full rounded-lg drop-shadow-lg mx-auto border-l-4 border-black mb-5 md:mb-0"
            data-aos="fade-right"
          ></div>

          <div className="w-full md:w-4/5" data-aos="fade-left">
            <h1 className="text-md md:text-2xl font-bold mb-4 poppins text-center md:text-left">
              Hello There
            </h1>
            <p className="text-sm md:text-lg mb-4 mulish font-semibold">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <p className="text-sm md:text-lg mb-4 mulish font-semibold">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <p className="text-sm md:text-lg mulish font-semibold">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
