import { BsBriefcaseFill } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import { LuExternalLink } from "react-icons/lu";

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row">
      <div className="px-4 sm:w-1/2">
        <h1 className="text-neutral-100 text-4xl font-bold py-2 px-4 rounded-r-3xl rounded-tl-3xl bg-[#A11143] inline-block">
          Experience
        </h1>
        {Experiences.map((item, index) => (
          <div
            key={index}
            className="text-neutral-200 border border-[#610A26] my-4 p-4 rounded-2xl backdrop-blur-xl bg-[#150014]/50 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <BsBriefcaseFill className="text-2xl" />
              <h4>{item.duration}</h4>
            </div>
            <div className="md:px-10 px-1 py-2">
              <div className="flex gap-4 items-center">
                <h3 className="md:text-2xl text-xl font-bold">{item.role}</h3>
                <p className="text-neutral-300 font-thin">{item.branch}</p>
              </div>
              <ul className="list-disc pl-5">
                <li className="py-1">
                  <span className="w-3 h-3 bg-[#A11143] animate-pulse rounded-full inline-block mr-2" />
                  {item.quote1}
                </li>
                <li className="py-1">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2" />
                  {item.quote12}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 sm:w-1/2 md:flex md:flex-col">
        <div className="flex justify-end py-2">
          <h1 className="text-neutral-100 text-4xl font-bold py-2 px-4 rounded-tr-3xl rounded-l-3xl bg-[#A11143]">
            Education
          </h1>
        </div>
        {Education.map((item, index) => (
          <div
            key={index}
            className="text-neutral-200 border border-[#610A26] my-4 py-4 px-1 rounded-xl backdrop-blur-xl bg-[#150014]/50 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center px-2 gap-2">
              <PiCertificateFill className="text-2xl" />
              <h4>{item.duration}</h4>
            </div>
            <div className="md:px-8 px-2 py-2">
              <div className="flex items-center">
                <h3 className="md:text-2xl text-xl font-bold">{item.role}</h3>
              </div>
              <div className="flex text-center items-center justify-between">
                <p className="text-neutral-300 font-thin">{item.branch}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full px-2 py-1 inline-flex items-center gap-2 my-4 transition-colors duration-300 hover:bg-[#A11143] hover:text-white"
                >
                  View Certificate
                  <LuExternalLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experiences = [
  {
    duration: "Mar 2022 - Dec 2023",
    role: "UI/UX Designer",
    branch: "@Blowhorn, Bengaluru",
    quote1: 'Developed user-centric "Integrated Fulfillment (IF)" dashboard, seamlessly integrating Warehouse & Transport Management functions.',
    quote12: "Enhanced user experience across website and IF mobile app designs for seamless and efficient interaction.",
  },
  {
    duration: "Sep 2020 - Aug 2021",
    role: "Graphic Designer",
    branch: "@Solar Press, Kanpur",
    quote1: "Worked on over 30 books, magazines, balance sheets & 50 packaging projects, learning printing processes and driving company growth.",
    quote12: "Contributed to significant expansion by leveraging project experience and production process understanding.",
  },
  {
    duration: "Aug 2019 - May 2020",
    role: "Graphic Designer",
    branch: "@Gratia, Kanpur",
    quote1: "Crafted engaging content, visuals, & packaging, boosting brand visibility.",
    quote12: "Gained Digital Marketing & manufacturing insights, fueling business growth.",
  },
  {
    duration: "Dec 2017 - Mar 2018",
    role: "Graphic Mentor",
    branch: "@MAAC, Lucknow",
    quote1: "Instructed graphics software, mentoring students for career growth in design.",
    quote12: "Guided students to enhance careers in graphics and design.",
  },
];

const Education = [
  {
    duration: "Aug 2021 - Feb 2022",
    role: "Full Stack UI/UX Designing",
    branch: "@Masai, Bengaluru",
    href: "https://drive.google.com/file/d/1ahEaPBZ_fRk52aMaulBHSHURqyNuazxV/view",
  },
  {
    duration: "Jun 2015 - Apr 2017",
    role: "Advanced Program in Digital Media & Design",
    branch: "@MAAC, Kanpur",
    href: "https://drive.google.com/file/d/1ahEaPBZ_fRk52aMaulBHSHURqyNuazxV/view",
  },
];

export default Experience;
