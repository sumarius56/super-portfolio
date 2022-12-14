import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:marius56suciu@gmail.com?subject=${
      formData.subject
    }&body=Hi, my name is ${formData.name}${" "},${formData.message}(${
      formData.email
    })`;
  };

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[90vh] tracking-widest flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden "
      >
        <h3 className="hidden sm:inline absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className="md:text-4xl font-semibold text-center tracking-widest">
            I have got just what you need.
            <span className="decoration-[#F7AB0A]/50 underline">
              Lets Talk!
            </span>
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
              <p className="md:text-2xl tracking-widest">+40 0771450410</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
              <p className="md:text-2xl tracking-widest">Ocna Mures, Romania</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
              <p className="md:text-2xl tracking-widest">
                marius56suciu@gmail.com
              </p>
            </div>
          </div>
          <form
            className="flex flex-col space-y-2 w-fit mx-auto relative "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex  space-x-2">
              <input
                className="contactInput  w-1/2 md:w-fit"
                type="text"
                placeholder="Name"
                {...register("name")}
                required
              />
              <input
                className="contactInput  w-1/2 md:w-fit"
                type="email"
                placeholder="Email"
                {...register("email")}
                required
              />
            </div>
            <input
              className="contactInput"
              type="text"
              placeholder="Subject"
              {...register("subject")}
              required
            />
            <textarea
              className="contactInput"
              placeholder="Message"
              {...register("message")}
              required
            />
            <button
              className="bg-[#F7AB0A]  py-2 px-5  sm:py-5 sm:px-10 rounded-md text-black font-bold md:text-lg "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          className="w-full  absolute  top-[59%] bg-[#F7AB0A]/10 left-0 h-[50px] -skew-y-12 animate-pulse "
        />
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: 2, repeat: 1, repeatType: "reverse" }}
          whileInView={{
            scale: [1, 2, 2, 3, 1, 0, 1.5, 2, 2.2, 1, 0.5],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1, 0, 1],
          }}
          className="w-full z-0 absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[90px] skew-y-12 animate-pulse rounded-lg "
        />
        <motion.div
          style={{
            width: 100,
            height: 100,
            borderRadius: 30,
          }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className="absolute z-10 bottom-[22%] left-[92%] bg-[#F7AB0A]/10  h-[90px] skew-y-12 animate-pulse "
        />
        <motion.div
          style={{
            width: 100,
            height: 100,
            borderRadius: 30,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[45%] right-[92%] bg-[#F7AB0A]/10  h-[90px] skew-y-12 animate-pulse "
        />
      </motion.div>
      <footer>
        <div className="flex space-x-10 justify-center items-center mb-2 sm:mb-5 lg:mb-10 ">
          ??<span className="text-[#F7AB0A]/80">Suciu Marius</span> ???
          <a
            href="https://protofolio-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="animate-pulse"
          >
            Portfolio V1
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactMe;
