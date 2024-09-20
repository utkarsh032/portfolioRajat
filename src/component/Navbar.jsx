import { Link } from "react-router-dom";
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
      className={`w-full shadow-xl items-center py-4 px-8 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between text-center max-w-7xl mx-auto text-white">
        {/* Logo */}
        <div className="w-full flex justify-between items-center">
          <Link
            to="/"
            className="text-4xl font-bold flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-all duration-500"
          >
            Rajat
            <p className="animate-bounce bg-[#A11143] w-3 h-3 rounded-full inline-block"></p>
          </Link>

          {/* Desktop Menu */}
          <div className="py-2 hidden sm:flex items-center">
            <ul className="flex gap-8 text-[18px] font-medium">
              {[
                { path: "/about", label: "About Me" },
                { path: "/skill", label: "My Expertise" },
                { path: "/projects", label: "Portfolio" },
                { path: "/tech", label: "Experience & Education" },
                { path: "/static", label: "Contact Me" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="relative group cursor-pointer hover:text-[#A11143] transition-all duration-500"
                >
                  <Link to={item.path}>{item.label}</Link>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#A11143] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
              <li>
              <a
                href="tel:+919305638595"
                className="hidden sm:block bg-[#A11143] text-neutral-300 rounded-md uppercase text-[18px] font-medium px-4 py-1 outline-none transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-[#A11143] to-[#ff6b6b] hover:text-white hover:shadow-lg hover:border hover:border-white "
              >
                Call Me
              </a>
            </li>
            
            </ul>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden flex items-center">
          <div
            onClick={() => setToggle(!toggle)}
            className="transition-all duration-500"
          >
            {toggle ? (
              <RiGitClosePullRequestLine className="text-neutral-300 h-8 w-8" />
            ) : (
              <CgMenuGridO className="text-neutral-300 h-8 w-8" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="sm:hidden w-full shadow-xl absolute top-20 left-0 z-10 rounded-xl backdrop-blur-xl bg-black/40 text-neutral-100 transition-all duration-500">
          <ul className="flex flex-col px-8 py-4 gap-4 text-[18px] font-medium">
            {[
              { path: "/about", label: "About Me" },
              { path: "/skill", label: "My Expertise" },
              { path: "/projects", label: "Portfolio" },
              { path: "/tech", label: "Experience & Education" },
              { path: "/static", label: "Contact Me" },
            ].map((item) => (
              <li
                key={item.label}
                className="cursor-pointer hover:text-[#A11143] transition-all duration-500"
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
