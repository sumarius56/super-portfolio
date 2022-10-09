import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "./../typings.d";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex  text-sm flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About{" "}
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-[120px] md:mb-0 flex-shrink-0 w-56   h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-[400px] xl:w-[500px] xl:h-[650px]"
      />

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="space-y-1 md:space-y-10 px-0 md:px-10 "
      >
        <h4 className=" md:mb-0  md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background{" "}
        </h4>
        <p className="md:text-base text-sm">{pageInfo?.backgroundInformation}</p>
      </motion.div>
    </motion.div>
  );
}

export default About;
