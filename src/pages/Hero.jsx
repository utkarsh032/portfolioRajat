import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import Resume from "../../src/assets/Rajat.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto max-w-7xl text-white">
      <div className="absolute inset-0 top-[100px] flex flex-col md:flex-row-reverse md:items-center text-center md:text-start px-4">
        {/* Hero Image */}
        <motion.div
          className="w-full md:w-1/2 py-8 md:py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-ux-design-5996826-4972885.png"
            className="w-full max-w-[500px] mx-auto md:mx-0"
            alt="heroArt"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="w-full md:w-1/2 mb-8">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Hi, {`I'm`} <br />
            <span className="bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] text-6xl text-transparent bg-clip-text">
              Rajat Kumar
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 p-1 rounded-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            Designer with a passion for crafting impactful experiences through
            user-centered design and captivating visuals.
          </motion.p>

          {/* Resume Button */}
          <motion.div
            className="flex md:justify-start justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            <a
              href={Resume}
              download
              className="bg-[#A11143] text-neutral-300 rounded-full px-6 py-3 text-lg font-medium shadow-md flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r from-[#A11143] to-[#eeaeca] hover:text-white hover:shadow-lg"
            >
              Resume
              <GoDownload />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
