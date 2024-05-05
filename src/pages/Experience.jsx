import { BsBriefcaseFill } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";

const Experience = () => {
  return (
    <section className=" max-w-7xl mx-auto py-8 flex  ">
      <div className="px-4">
        {/*<h1 className="text-xl font-bold text-[#A11143]  bg-neutral-300 hover:bg-[#A11143] hover:text-neutral-200 duration-200 text-end p-3  inline-block rounded-r-full rounded-tl-full">
          Experience & Education
  </h1>*/}
        <h1 className="text-neutral-200 text-4xl font-bold py-6 text-end">
          Experience & Education
        </h1>
        {Experiences.map((item, index) => (
          <div
            key={index}
            className="text-neutral-200 border  border-[#610A26]  my-4  p-4 rounded-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center ">
                <BsBriefcaseFill className="text-2xl " />
              </div>
              <h4>{item.duration}</h4>
            </div>
            <div className="px-10 py-2">
              <div className="flex gap-4 items-center ">
                <h3 className="text-2xl font-bold">{item.role}</h3>
                <p className="text-neutral-300 font-thin">{item.branch}</p>
              </div>
              <ul className="">
                <li className="">
                  <p className="w-3 h-3 bg-[#A11143] animate-pulse rounded-full inline-block mr-2" />
                  {item.quote1}
                </li>
                <li>
                  <p className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2" />
                  {item.quote12}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="px-2 flex flex-col justify-center">
        {Education.map((item, index) => (
          <div
            key={index}
            className="text-neutral-200 border border-[#610A26]  my-4  py-4 px-1 rounded-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <div className="flex justify-center ">
                <PiCertificateFill className="text-2xl " />
              </div>
              <h4>{item.duration}</h4>
            </div>
            <div className="px-8 py-2">
              <div className="flex items-center ">
                <h3 className="text-2xl font-bold ">{item.role}</h3>
                <p className="text-neutral-300 font-thin ">{item.branch}</p>
              </div>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
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
    branch: "@Blowhorn, Bengaluru ",
    quote1:
      'Developed user-centric "Integrated Fulfillment (IF)" dashboard, seamlessly integrating Warehouse & Transport Management functions ',
    quote12:
      "Enhanced user experience across website and IF mobile app designs for seamless and efficient interaction.",
  },

  {
    duration: "Sep 2020 - Aug 2021",
    role: "Graphic Designer",
    branch: "@Solar Press, Kanpur ",
    quote1:
      "Worked over 30 books, magazines, balance sheets & 50 packaging projects, learn printing processes and driving company growth.",
    quote12:
      "Contributed to significant expansion by leveraging project experience and production process understanding.",
  },
  {
    duration: "Aug 2019 - May 2020",
    role: "Graphic Designer",
    branch: "@Gratia, Kanpur  ",
    quote1:
      "Crafted engaging content, visuals, & packaging, boosting brand visibility.",
    quote12:
      "Gained Digital Marketing & manufacturing insights, fueling business growth.",
  },
  {
    duration: "Dec 2017 - Mar 2018",
    role: "Graphic Mentor",
    branch: "@MAAC, Lucknow ",
    quote1:
      "Instructed graphics software, mentoring students for career growth in design.",
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
