import React from "react";
import star from "../assets/star.svg";
import { useEffect, useState } from "react";

import codeWhite from "../assets/codeWhite.svg";
import book from "../assets/book.svg";
import database from "../assets/databaseWhite.svg";
import tools from "../assets/tools.svg";
import greaterThen from "../assets/greaterThen.svg";
import layout from "../assets/layout.svg";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      color: " from-[#3886F4] via-[#3090EF] to-[#28A2E7]",
      image: codeWhite,
      skills: [
        {
          name: "HTML",
          discription: "Semantic markup and accessibility",
        },

        {
          name: "JavaScript",

          discription: "ES6+ and modern features",
        },

        {
          name: " CSS",

          discription: "Modern styling and animations",
        },

        {
          name: "C++",

          discription: "Object-oriented programming",
        },
      ],
    },

    {
      title: "Frameworks & Libraries",
      color: " from-[#22C55E] via-[#1FC66B] to-[#18C77A]",
      image: layout,
      skills: [
        {
          name: "React",
          discription: "Component-based UI development",
        },

        {
          name: "Node.js",

          discription: "Server-side javascript runtime",
        },

        {
          name: " Tailwind css",

          discription: "Utility first CSS framework",
        },

        {
          name: "Mern Stack",

          discription: "Web application framework",
        },
      ],
    },

    {
      title: "Database",
      color: " from-[#A855F7] via-[#C026D3] to-[#EC4899]",
      image: database,
      skills: [
        {
          name: " MongoDB",

          discription: "NoSQL document database",
        },

        {
          name: "MySQL",

          discription: "Relational database management",
        },
      ],
    },

    {
      title: "Tools",
      image: tools,
      color: " from-[#FF6A1A] via-[#FF5A2F] to-[#FF4B4B]",

      skills: [
        {
          name: "Git",
          discription: "Version control system",
        },

        {
          name: "Visual Studio Code",

          discription: "Code editor and debugging",
        },

        {
          name: " GitHub",

          discription: "Code repository and collaboration",
        },

        {
          name: "REST APIs",

          discription: "Web service architecture",
        },
      ],
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentData = skillCategories[currentCategory];
  return (
    <div className="mt-5 flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">
      <div className="flex h-11 w-fit items-center gap-2 rounded-r-full border-l-4 border-gray-500 bg-slate-100 px-5 text-sm font-bold text-gray-700 shadow-sm transition-transform duration-500 hover:scale-105">
        {/* Ping Dot */}
        <div className="relative flex items-center justify-center">
          <span className="absolute h-2.5 w-2.5 rounded-full bg-gray-500 animate-ping"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500"></span>
        </div>

        <p>Technical Experties</p>

        <img className="h-4 w-4" src={star} alt="About" />
      </div>

      <p className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200">
        My Skills
      </p>

      <p className="max-w-2xl text-center text-sm sm:text-base text-amber-400">
        Comprehensive technical skills for building responsive and user-friendly
        applications
      </p>

      {/* Category Buttons */}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {skillCategories.map((category, index) => (
          <button
            key={category.title}
            onClick={() => setCurrentCategory(index)}
            className={`px-5 sm:px-6 py-2 font-bold rounded-xl cursor-pointer transition-all duration-300 ${
              currentCategory === index
                ? `bg-gradient-to-r ${category.color} text-white`
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-6">
        {currentData.skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-5 min-h-32 w-full flex items-center gap-5 rounded-xl border border-slate-200 bg-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-r ${currentData.color} flex justify-center items-center`}
            >
              <img className="h-5" src={currentData.image} alt="" />
            </div>

            <div className="flex-1">
              <p className="text-lg sm:text-xl font-bold text-black">
                {skill.name}
              </p>

              <p className="text-sm text-gray-600">{skill.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
