import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {projects?.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="h-10 w-10 md:h-64 md:w-64"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    src={urlFor(technology.image).url()}
                    key={technology._id}
                    alt=""
                    className="h-10 w-10"
                  />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-sm md:text-lg text-center md:text-left  "
              >
                {project?.summary}
              </motion.p>
              <br />
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex relative items-center justify-center md:text-4xl text-[#F7AB0A]/20 mx-auto max-w-[140px] rounded-3xl  py-1 "
              >
                <a
                  className="animate-pulse absolute transition duration-300 ease-in-out top-30 sm:top-20  "
                  href={project?.linkToBuild}
                >
                  Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
