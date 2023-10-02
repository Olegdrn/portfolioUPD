import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
// import avatarPic from "../public/images/avatar.jpg";
import { GoLocation } from "react-icons/go";
import { AiOutlineDownload } from 'react-icons/ai';
import { motion } from "framer-motion";
const Sidebar = () => {

  return (
    <>
      <div className="max-w-xs m-auto">
        <Image
          src="/images/avatarSec.png"
          alt="avatar"
          className="overflow-hidden mx-auto border rounded-full "
          layout="responsive"
          width='80'
          height='80'
          quality={100}
        />
        <h3 className="text-3xl font-bold pb-1 tracking-wider">
          Oleg Dranov
        </h3>
        <p className="px-2 py-1 my-3 bg-slate rounded-full ">
          Web Developer
        </p>
        {/* Resume */}
        <a
          href="/images/CV.pdf"
          download="Oleg Dranov CV.pdf"
          className="flex items-center justify-center px-2 py-1 my-2 bg-slate rounded-full cursor-pointer "
        >
          <AiOutlineDownload className="w-6 h-6" />
          <span>Download Resume</span>
        </a>

        <div className="flex justify-around w-9/12 mx-auto my-5 text-slate-600 md:w-full ">

          <a href="https://github.com/Olegdrn" aria-label="GitHub" target="_blank">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
          </a>
        </div>

        {/* Contacts */}
        <div
          className="py-4 my-5 bg-slate"
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex items-center justify-center">
            <GoLocation className="mr-2" /> <span>Moscow, Russia </span>
          </div>
          <p className="my-2 "> E-mail: dranoff.oleg@gmail.com </p>
          <p className="my-2"> Mob.: +7(967)031-10-64 </p>
        </div>

        {/* Email Button */}

        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => { }}
          onHoverEnd={e => { }}
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-slate-600  to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() => window.open("mailto:dranoff.oleg@gmail.com")}
        >
          Email me
        </motion.button>
      </div>
    </>
  );
};

export default Sidebar;
