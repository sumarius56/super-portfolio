import Link from "next/link";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import { urlFor } from "../sanity";
import { Howl } from "howler";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [openModal, setOpenModal] = useState(true);
  const [text, count] = useTypewriter({
    words: [
      'console.log("Hello World!")',
      "{dev Suciu in the house!}",
      "Guy who loves coffee.tsx",
      "<But loves to code more />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const soundSource = "https://www.mboxdrive.com/ES_Clutch%20-%20STRLGHT.mp3";

  const playMusic = (src: string) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  function handleClick() {
    setOpenModal(false);
    playMusic(soundSource);
  }

  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {openModal && (
        <div className="flex flex-col absolute bg-black/90 w-full h-screen  items-center justify-center z-50">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            transition={{
              duration: 1.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl animate-pulse p-10"
          >
            Are you ready for a{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              top notch experience
            </span>
            ?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 1.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl text-[#F7AB0A]/40 hover:scale-125 hover:text-[#F7AB0A] "
            onClick={handleClick}
          >
            YES!
          </motion.button>
        </div>
      )}

      {/* Music */}

      {/* Music */}

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#F7AB0A]/40 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// https://youtu.be/urgi2iz9P6U?t=3966
