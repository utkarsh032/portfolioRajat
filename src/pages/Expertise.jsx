import Skill1 from "../assets/skill1.gif";
import Skill2 from "../assets/skill2.gif";
import Skill3 from "../assets/skill3.gif";

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <h1 className="text-neutral-200 text-4xl font-bold py-6 text-center">
        My Expertise
      </h1>
      <div className="md:flex gap-4 justify-between items-center  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="md:w-[50vh] md:h-[40vh] p-2 m-4 flex flex-col text-center items-center border border-[#610A26] rounded-xl shadow-xl"
          >
            <img
              src={testimonial.src}
              className="w-48 hover:scale-105 duration-300"
              alt="Skills"
            />
            <h2 className="text-3xl py-4 font-bold text-neutral-300">
              {testimonial.title}
            </h2>
            <p className="text-xl text-neutral-400">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const testimonials = [
  {
    quote:
      "UI/UX design is the process of creating visually appealing and user-friendly digital interfaces to enhance user experience.",
    title: "UI/UX DESIGN",
    src: Skill1,
  },
  {
    quote:
      "Visual communication using typography, imagery, and layout to convey messages effectively.",
    title: "Graphic Design",
    src: Skill2,
  },
  {
    quote:
      "Animated visual content combining text, graphics, and audio for dynamic communication.",
    title: "Motion Graphic",
    src: Skill3,
  },
];

export default Skills;
