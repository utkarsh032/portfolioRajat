import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import Behance from "../assets/behance.png";
import Dribbble from "../assets/dribbble.svg";
// projectsMedia
import Project1 from "../assets/Pregnancy.gif";
import Project2 from "../assets/Covid.gif";
import Project3 from "../assets/TheBerth.gif";
import Project4 from "../assets/Cryptoptika.gif";
import Project5 from "../assets/Podsphere.gif";
import Project6 from "../assets/Deciphr.gif";
import Project7 from "../assets/Ayurveda.gif";
import Project8 from "../assets/Discovery+.gif";
import Project9 from "../assets/Fundflex.gif";

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-2 text-white">
      <h1 className="text-4xl font-bold py-6 text-center">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {ProjectLink.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
      <button className="flex">Show More</button>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="p-2 rounded-2xl relative border shadow-xl  border-[#610A26] bg-[#150014]/50 backdrop-blur-xl ">
      <img src={project.src} className="rounded-xl" alt="project" />
      <div className="py-4 px-2">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <p className="font-thin">{project.desc}</p>
        <div className="flex justify-between py-1 my-2 text-center">
          <div className="flex gap-1">
            <p className="text-[#FF0000]">{project.tag1}</p>
            <p className="text-[#24FF00]">{project.tag2}</p>
            <p className="text-[#FFF500]">{project.tag3}</p>
          </div>
          <a
            href={project.to}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full text-lg px-2 block duration-300 hover:-translate-x-3 hover:px-2 hover:flex hover:items-center hover:gap-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? (
              <span className="flex items-center gap-1">
                View <LuExternalLink />
              </span>
            ) : (
              "View"
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectLink = [
  {
    name: "Pregnancy Care Solution",
    desc: "crafted mobile app for pregnant women for medical support during covid.",
    tag1: "#figma",
    tag2: "#UIDesign",
    tag3: "#Designsystem",
    to: "https://www.behance.net/gallery/136156037/Pregnancy-Care-Solution",
    src: Project1,
    img: Behance,
  },
  {
    name: "Covid 19 Indian Tracker",
    desc: "crafted mobile app for pregnant women for medical support during covid.",
    tag1: "#UIDesign",
    tag2: "#dashboard",
    tag3: "#userreasearch",
    to: "https://www.behance.net/gallery/136155147/Covid-19-Indian-Tracker",
    src: Project2,
    img: Behance,
  },
  {
    name: "The Berth Booking Co.",
    desc: "Designed website & Mobile vesrion for berth booking",
    tag1: "#UIDesign",
    tag2: "#website",
    tag3: "#userreasearch",
    to: "https://www.behance.net/gallery/172390383/The-Berth-Booking-Co",
    src: Project3,
    img: Dribbble,
  },
  {
    name: "Cryptoptika",
    desc: "Designed website & Mobile vesrion for berth booking",
    tag1: "#UIDesign",
    tag2: "#website",
    tag3: "#userreasearch",
    to: "https://www.behance.net/gallery/176033235/Cryptoptika",
    src: Project4,
    img: Behance,
  },
  {
    name: "Podsphere - Audiobook & Podcast App ",
    desc: "Designed mobile app for Audio Books  & Podcasts",
    tag1: "#UIDesign",
    tag2: "#website",
    tag3: "#userreasearch",
    to: "https://www.behance.net/gallery/185327633/Podsphere-Audiobook-Podcast-App",
    src: Project5,
    img: Behance,
  },
  {
    name: "Deciphr - Redesign & Case Study",
    desc: "Redesigned deciphr’s Web App.",
    tag1: "#UIDesign",
    tag2: "#website",
    tag3: "#userreasearch",
    to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
    src: Project6,
    img: Behance,
  },
  // {
  //   name: "Cryptoptika",
  //   desc: "Designed website & Mobile vesrion for berth booking",
  //   tag1: "#UIDesign",
  //   tag2: "#website",
  //   tag3: "#userreasearch",
  //   to: "https://www.behance.net/gallery/176033235/Cryptoptika",
  //   src: Project7,
  //   img: Behance,
  // },
  // {
  //   name: "Podsphere - Audiobook & Podcast App ",
  //   desc: "Designed mobile app for Audio Books  & Podcasts",
  //   tag1: "#UIDesign",
  //   tag2: "#website",
  //   tag3: "#userreasearch",
  //   to: "https://www.behance.net/gallery/185327633/Podsphere-Audiobook-Podcast-App",
  //   src: Project8,
  //   img: Behance,
  // },
  // {
  //   name: "Deciphr - Redesign & Case Study",
  //   desc: "Redesigned deciphr’s Web App.",
  //   tag1: "#UIDesign",
  //   tag2: "#website",
  //   tag3: "#userreasearch",
  //   to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
  //   src: Project9,
  //   img: Behance,
  // },
];
export default Products;
