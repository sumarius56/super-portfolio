import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "./../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://protofolio-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutImg.c1fee657.avif&w=2048&q=75"
        alt=""
        //fix the bug with img not uploading
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Self-Taught Programmer</h4>
        <p className="font-bold text-2xl mt-1">Web Developer </p>
        <div className="flex space-x-2 my-2 items-center ">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-12 w-15 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
