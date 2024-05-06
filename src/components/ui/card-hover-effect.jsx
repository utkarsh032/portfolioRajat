import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "flex flex-wrap  justify-evenly gap-4 py-4 px-2 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.to} // Change href to to
          key={item?.to}
          className="relative group block p-2 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0  bg-[#610A26] dark:bg-[#40002e]/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardImage src={item.src} />
            <CardTitle title={item.title} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-44 w-44 overflow-hidden backdrop-blur-xl bg-transparent border border-transparent dark:border-[#610A26] group-hover:border-[#610A26] relative z-0 ",
        className
      )}
    >
      <div className="relative z-50 ">{children}</div>
    </div>
  );
};

export const CardImage = ({ className, src }) => {
  return (
    <img
      src={src} // Use src prop here
      alt="Social"
      className="p-4 w-24 h-24 mx-auto"
    />
  );
};

export const CardTitle = ({ className, title }) => {
  return (
    <h1
      className={`text-xl font-bold text-neutral-300 text-center uppercase pt-7 ${className}`}
    >
      {title}
    </h1>
  );
};

export const CardLink = ({ className, children }) => {
  return (
    <Link
      to={children}
      target="_blank"
      className="flex justify-center items-center"
    />
  );
};
