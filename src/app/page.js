import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Portofolio from "../components/Utilities/Portofolio";
import About from "../components/Utilities/About";
import Education from "../components/Utilities/Education";
import Experiences from "@/components/Utilities/Experiences";
import Projects from "@/components/Utilities/Projects";
import Skills from "@/components/Utilities/Skills";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <Fragment>
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

          {/* experiences */}
          <Experiences />
          {/* end experiences */}

          {/* projects */}
          <Projects />
          {/* end projects */}

          {/* skills */}
          <Skills />
          {/* end skills */}
        </div>
        {/* Footer */}
        <Footer />
        {/* end footer */}
      </div>
    </Fragment>
  );
};

export default Home;
