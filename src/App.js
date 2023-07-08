import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo from "../src/logo.svg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import imagee from "../src/images/vecteezy_man-face-clipart-design-illustration_9383461_485.png";
import Page2 from "./components/Page-2";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "white"}>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className=" item-center mx-auto md:flex justify-between py-10 mb-12 sm:flex justify-between py-10 mb-12">
            <div className="flex mb-4">
              <img src={Logo} alt="logo" width={40} className="text-blue-800" />
              <h1 className="font-bold pt-1 pl-0 dark:text-white">
                EmyraldCorp
              </h1>
            </div>
            <ul className="flex ml-4 md:flex items-center sm:flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="dark:text-white"
                />
              </li>
              <a
                href="#resume"
                className="ml-4 bg-blue-700 rounded-md px-3 py-1 text-white hover:bg-blue-500"
              >
                Resume
              </a>
            </ul>
          </nav>
          <div className="text-center p-10">
            {/* start */}
            <div className="text-center md:flex gap-6 sm:gap-4">
              <div>
                <h3 className="text-2xl py-2 text-blue-800 font-bold md:text-3xl text-center mx-auto md:mx-auto dark:text-white">
                  Front-End React Developer
                </h3>
                <p className=" mx-auto text-sm pt-2 leading-2 text-gray-800 md:text-sm max-w-xl mx-auto font-bold dark:text-orange-300">
                  Hi, I'm Emmanuel. An experienced and passionate software
                  developer with a solid foundation in front-end, based in
                  Nigeria. Join me down below and let's get cracking
                </p>
                <div className="text-2xl flex justify-center gap-5 pt-3 pb-7 text-gray-600 md:pt-3 dark:text-white">
                  <AiFillTwitterCircle />
                  <AiFillLinkedin />
                  <AiFillYoutube />
                </div>
              </div>
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-40 h-45 mx-auto overflow-hidden sm:h-30 md:h-40">
                <img src={imagee} alt="myImage" />
              </div>
            </div>
          </div>
          {/* end */}
          <div className="flex justify-center gap-2 text-blue-600 text-xl mt-10 md:mt-3 md:gap-6 dark:text-orange-500">
            <h4 className="text-sm">Tech Stack |</h4>
            <TbBrandJavascript />
            <SiReact />
            <TbBrandTailwind />
            <FaPython />
            <TbBrandCSharp />
          </div>
        </section>
        <Page2 />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
