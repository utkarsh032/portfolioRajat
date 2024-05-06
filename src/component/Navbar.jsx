import { Link } from "react-router-dom";
import Resume from "../../src/assets/Rajat.pdf";
import { RiGitClosePullRequestLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full shadow-xl items-center py-4 px-8 fixed top-0 z-20 backdrop-blur-0 bg-transparent border-b-[1px] ${
        scrolled ? "backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between text-center max-w-7xl mx-auto ">
        <div className="w-full ">
          <div className="flex justify-between text-center items-center">
            <Link className="text-4xl font-bold text-neutral-300 ">
              Rajat
              <p className="animate-bounce bg-[#A11143] w-3 h-3 rounded-full inline-block mx-1"></p>
            </Link>
            <a
              href={Resume}
              download
              className="hidden sm:block bg-[#A11143] text-neutral-300 rounded-md uppercase text-md font-medium px-4 py-2 outline-none"
            >
              Resume
            </a>
          </div>

          {/* large screen */}
          <div className="py-2 hidden sm:block text-neutral-100 ">
            <ul className="list-none flex justify-between gap-10">
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/skill">Skill</Link>
              </li>
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/tech">Tech</Link>
              </li>
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/static">Static</Link>
              </li>
              <li className="hover:text-neutral-300 text-[18px] font-medium cursor-pointer">
                <Link to="/achievement">Achievement</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* small screen */}
        <div className="sm:hidden flex justify-end items-center ">
          <div
            onClick={() => setToggle(!toggle)}
            className="transition duration-1000"
          >
            {" "}
            {toggle ? (
              <RiGitClosePullRequestLine className="text-neutral-300 h-8 w-8 " />
            ) : (
              <CgMenuGridO className="text-neutral-300 h-8 w-8 " />
            )}{" "}
          </div>
        </div>
      </div>

      {/* Responsive menu */}
      {toggle && (
        <div className="sm:hidden w-full shadow-xl border-l border-b absolute top-20 z-10 rounded-xl backdrop-blur-xl bg-black/40 text-neutral-100 transition duration-300">
          <ul className="list-none flex flex-col px-8 py-4 gap-4 ">
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/skill">Skill</Link>
            </li>
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/tech">Tech</Link>
            </li>
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/static">Static</Link>
            </li>
            <li className="hover:text-black text-[18px] font-medium cursor-pointer">
              <Link to="/achievement">Achievement</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
