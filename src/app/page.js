import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Portofolio from "../components/Utilities/Portofolio";
import About from "../components/Utilities/About";
import Education from "../components/Utilities/Education";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="content-container mx-auto">
        {/* home */}
        <Portofolio />
        {/* end home */}

        {/* about */}
        <About />
        {/* end about */}

        {/* education */}
        <Education />
        {/* end education */}
      </div>
    </div>
  );
};

export default Home;
