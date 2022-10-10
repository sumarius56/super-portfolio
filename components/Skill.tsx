import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -220 : 220,

          opacity: 0, 
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          x: 0,
        }}
        src={urlFor(skill.image).url()}
        className="hidden sm:inline rounded-full border border-gray-500 object-contain w-[40px] h-[40px] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Mobile Img */}
      <img
       
        src={urlFor(skill.image).url()}
        className=" sm:hidden rounded-full border border-gray-500 object-contain w-[40px] h-[40px] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* Mobile */}
      <div className="absolute opacity-0 group-hover:opacity-70 transition  duration-300 ease-in-out group-hover:bg-white h-[40px] w-[40px] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
