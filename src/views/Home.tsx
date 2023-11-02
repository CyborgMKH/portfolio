import React from "react";
import avatar from "../assets/avatar.png";
import wave from "../assets/wave.png";
import Typewriter from "typewriter-effect";
import {
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaJava,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiJavascript,
  SiAndroidstudio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="lg:pl-2 flex flex-col">
      <div>
        <img
          className="w-18 h-18 shadow-lg rounded-full"
          src={avatar}
          alt="avatar"
        />
        <div className="mt-8 text-2xl font-bold flex">
          <img className="w-8 h-8 mr-2 wave" src={wave} alt="wave" />
          <div>Suman Mukhiya</div>
        </div>
      </div>

      <div className="text-2xl select-none font-gothaml pt-5">
        <Typewriter
          options={{
            strings: ["नमस्ते", "hello !", "こんにちは"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="leading-relaxed mt-2 text-justify">
        Python is tasty. JavaScript is juicy. TypeScript is toothsome. PyTorch
        is creamy. Vue is yummy. Happen to know some React now. Java / C# / Go,
        Express / SQL/ Firebase/ MongoDB ... maybe? Still a long way to full-stack or
        data scientist.
      </div>
      <div className="leading-relaxed mt-2 text-justify">
        I have great interest in full-stack development, artificial
        intelligence, human-computer interactions, and everything in between.
      </div>
      <div className="leading-relaxed mt-2 text-justify">
        Decent sense of aesthetic. Hope that won't disappoint you.
      </div>
      <div className="leading-relaxed mt-2 text-justify">
        Cheers. Obviously that's how people greet each other in Scotland ;)
      </div>

      <div className="leading-relaxed mt-12 flex flex-wrap space-x-3">
        <p className="pb-1 border-b-2 border-pink-500 select-none">
          Socials &#x40;
        </p>
        <a
          href="https://github.com/CyborgMKH"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-black hover:text-gray-600 dark:border-purple dark:hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/nascentmkh/"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/Suman.Mkh444/"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-yellow-500 hover:text-yellow-600"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/suman-mukhiya-b81b41214/"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-red-500 hover:text-red-600"
        >
          Linkedin
        </a>
      </div>
      <p className="text-lg mt-6 pb-2 border-b-2 select-none flex items-center">
        t&amp;t &#x1F527;
        <span className="ml-4 space-x-2">
          <SiVisualstudiocode className="h-8 w-8 inline-block" />
          <SiJavascript className="h-8 w-8 inline-block" />
          <FaReact className="h-8 w-8 inline-block" />
          <FaNodeJs className="h-8 w-8 inline-block" />
          <SiTailwindcss className="h-8 w-8 inline-block" />
          <FaFigma className="h-8 w-8 inline-block" />
          <FaGitAlt className="h-8 w-8 inline-block" />
          <FaGithub className="h-8 w-8 inline-block" />
          <FaJava className="h-8 w-8 inline-block" />
          <SiAndroidstudio className="h-8 w-8 inline-block" />
          <SiFirebase className="h-8 w-8 inline-block" />
          <SiMongodb className="h-8 w-8 inline-block" />
          <FaProjectDiagram className="h-8 w-8 inline-block" />
        </span>
      </p>
    </div>
  );
};

export default Home;
