import { motion } from "framer-motion";
import { FaHtml5, FaNode } from "react-icons/fa";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { SiJavascript, SiReact, SiTypescript, SiWebpack, SiTailwindcss } from "react-icons/si";
import { fadeInUp, routeFade, stagger } from "../animations";
import Head from "next/head";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const About = ({ }) => {
  console.log(languages)
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Dranov Oleg | Web Developer</title>
      </Head>
      {/* // h5 */}
      <div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold font-montserrat ">Education</h5>
          <div className="grid text-xs md:grid-cols-2 gap-2 text-xl ">
            <div >
              <h5 className="my-2 text-xl font-bold ">
                Bauman Moscow State Technical University (2011-2017)
              </h5>
              <p className="font-semibold">
                Power Engineering
              </p>
              <p className="font-normal">
                Gas Turbine and Nonconventional Power Plants
              </p>
              <p className="mt-2 font-semibold">
                Diploma paper:
              </p>
              <p className="font-normal">
                Mathematical modeling and analysis
                of the gas turbine engine processes
              </p>
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Geekbrains (2022-2023)
              </h5>
              <p className="font-semibold">
                Fullstack JavaScript
              </p>
              <div className="flex justify-around w-9/12 mx-auto my-5 text-slate-600 md:w-full ">
                <FaHtml5 className="w-20 h-20" />
                <SiJavascript className="w-20 h-20" />
                <SiReact className="w-20 h-20" />
                <SiTypescript className="w-20 h-20" />
                <FaNode className="w-20 h-20" />
                < SiWebpack className="w-20 h-20" />
                < SiTailwindcss className="w-20 h-20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold ">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// // //!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // console.log(process.env.VERCEL_URL)
//   // const BASE_URL = process.env.VERCEL_URL;
//   // const res = await fetch(`${BASE_URL}api/projects`);
//   // const data = await res.json();
//   return { props: { BASE_URL: process.env.VERCEL_URL } };
// };

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
