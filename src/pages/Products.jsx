import Project1 from "../assets/project1.gif";
import Project2 from "../assets/project2.gif";
import Project3 from "../assets/project3.gif";
import Behance from "../assets/behance.png";
import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 text-neutral-200">
      <h1 className="text-4xl font-bold py-6 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectLink.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="p-2 rounded-2xl relative border border-[#610A26] backdrop-blur-md">
      <a
        href={project.to}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end px-2"
      >
        <img
          src={Behance}
          alt="Behance"
          className="w-10 h-10 rounded-full absolute bg-gray-300 hover:scale-105 duration-150 hover:bg-white"
        />
      </a>
      <img src={project.src} className="rounded-xl" alt="project" />
      <div className="py-4 px-2">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <p className="font-thin">{project.desc}</p>
        <div className="flex justify-between py-1 my-2 text-center">
          <p>{project.tag}</p>
          <a
            href={project.to}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full text-lg px-2 mx-4 block duration-300 hover:-translate-x-3 hover:px-4 hover:flex hover:items-center hover:gap-1"
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
    name: "Deciphr",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
    src: Project1,
  },
  {
    name: "Pod Sphere",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/176033235/Cryptoptika",
    src: Project2,
  },
  {
    name: "Cryptoptika",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
    src: Project3,
  },
  {
    name: "Deciphr",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
    src: Project1,
  },
  {
    name: "Pod Sphere",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/176033235/Cryptoptika",
    src: Project2,
  },
  {
    name: "Cryptoptika",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tag: "#figma #figma #figma",
    to: "https://www.behance.net/gallery/190273715/Deciphr-Redesign-Case-Study",
    src: Project3,
  },
];
export default Products;
