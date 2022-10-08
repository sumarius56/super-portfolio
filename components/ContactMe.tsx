import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk!</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+40 0771450410</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Ocna Mures, Romania</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">marius56suciu@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
