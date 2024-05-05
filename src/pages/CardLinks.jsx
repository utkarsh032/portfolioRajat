import { HoverEffect } from "../components/ui/card-hover-effect";
import dribbble from "../assets/dribbble.svg";
import linkedin from "../assets/linkedin.svg";
import behance from "../assets/behance.svg";
import insta from "../assets/insta.svg";

const CardLinks = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 text-neutral-200">
      <h1 className=" text-4xl font-bold py-6 text-center">Social Acc.</h1>
      <div className=" flex flex-wrap ">
        <HoverEffect items={socialLink} />
      </div>
      <hr className="border-[#610A26]" />
      <div className="text-center py-2">
        <p className="text-sm">
          Copyright @2024-24 <span className="font-bold">Designed By:</span>{" "}
          @strologer
        </p>
      </div>
    </div>
  );
};

export const socialLink = [
  {
    title: "Dribbble",
    to: "https://dribbble.com/rajat_k_prajapati",
    src: dribbble,
  },
  {
    title: "LinkedIn",
    to: "https://www.linkedin.com/in/rajat-kumar-090b10121/",
    src: linkedin,
  },
  {
    title: "Instagram",
    to: "https://www.instagram.com/rajat_k_prajapati",
    src: insta,
  },
  {
    title: "Behance",
    to: "https://www.behance.net/rajat-k-prajapati",
    src: behance,
  },
  {
    title: "Amazon",
    to: "https://amazon.com",
    src: insta,
  },
];

export default CardLinks;
