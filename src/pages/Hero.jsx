import { GoDownload } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Resume from "../../src/assets/Rajat.pdf";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto max-w-7xl text-white">
      <div className="absolute inset-0 top-[120px]  md:flex md:flex-row-reverse  md:items-center md:text-start text-center px-4">
        <div className="w-full md:w-1/2 py-16">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-ux-design-5996826-4972885.png"
            className="w-full"
            alt="heroArt"
          />
        </div>

        <div className="w-full md:w-1/2  mb-8 ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 ">
            Hi, {`I'm`} <br />
            <span className="bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] text-6xl text-transparent bg-clip-text ">
              Rajat Kumar
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 p-1 rounded-md">
            Designer with a passion for crafting impactful experiences through
            user-centered design and captivating visuals.
          </p>
          <div className="flex md:justify-start justify-center gap-4">
            <a
              href={Resume}
              download
              className="border  rounded-full px-6 py-3 text-lg font-medium shadow-md flex text-center items-center gap-2"
            >
              Resume
              <GoDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
