import React from "react";
import codeWhite from "../assets/codeWhite.svg";
import boxArrow from "../assets/boxArrow.svg";
import notes from "../assets/notes.png";
import blogify from "../assets/blogify.png";
import currency from "../assets/currency.png";
import weather from "../assets/weather.png";
import github from "../assets/github.svg";
import starAmber from "../assets/starAmber.svg";
import noteLogo from "../assets/notes.svg";
import blogLogo from "../assets/blog.svg";
import weatherLogo from "../assets/weather.svg";
import convert from "../assets/convert.svg";
import medal from "../assets/medal.svg";
import arrow from "../assets/arrow.svg";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Notes Application",
      image: notes,
      logo: noteLogo,
      description:
        "Create, edit, and organize notes with ease.Secure authentication and a modern responsive UI.",
      tech: ["React", "MongoDB", "Node.js", "+2"],
      demo: "https://notes-app-xi-gold.vercel.app/",
      code: "https://github.com/Aakash2084/notes-app",
    },
    {
      id: 2,
      title: "Blogyfy",
      image: blogify,
      logo: blogLogo,
      description:
        "Create, publish, and manage blog posts with ease.A clean, responsive platform for seamless content sharing.",
      tech: ["EJS", "MongoDB", "Node.js", "+1"],
      demo: "https://blog-application-xpjl.onrender.com",
      code: "https://github.com/Aakash2084/blog-application",
    },
    {
      id: 3,
      title: "Weather Application",
      image: weather,
      logo: weatherLogo,
      description:
        "Get real-time weather updates for any city.View temperature, humidity, and wind details instantly.",
      tech: ["React", " CSS", "API", "+1"],
      demo: "https://weather-application-iota-eight.vercel.app/",
      code: "https://github.com/Aakash2084/weather-application",
    },
    {
      id: 4,
      title: "Currency Convertor",
      image: currency,
      logo: convert,
      description:
        "Convert currencies with live exchange rates.Fast, accurate, and responsive conversion experience.",
      tech: ["React", "Tailwind CSS", "API", "+1"],
      demo: "https://currency-converter-silk-rho.vercel.app/",
      code: "https://github.com/Aakash2084/currency-converter",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-5 px-4 sm:px-6 lg:px-8">
      <div className="flex h-11 w-fit items-center gap-2 rounded-r-full border-l-4 border-green-500 bg-white/90 px-5 text-sm font-bold text-green-700 shadow-sm transition-transform duration-500 hover:scale-105 ">
        {/* Ping Dot */}
        <div className="relative flex items-center justify-center ">
          <span className="absolute h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
        </div>

        {/* Text */}
        <p>5+ Project Built & Deployed</p>

        {/* Star */}
        <img className="h-4  " src={medal} alt="About" />
      </div>

      <p className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold mt-5">
        My Projects
      </p>

      <div className="flex flex-wrap justify-center items-center gap-2">
        <p className="text-amber-400 text-xl sm:text-2xl lg:text-3xl text-center font-bold">
          Building Digital Solutions
        </p>
        <img className="h-8 animate-pulse " src={starAmber} alt="" />
      </div>

      <div className="flex flex-col items-center text-center max-w-3xl">
        <p className="text-lg text-slate-300 ">
          From full-stack web applications to interactive games, explore my
          journey of turning
        </p>
        <p className="text-slate-300">
          ideas into{" "}
          <span className="text-white font-bold ">
            functional digital experiences .
          </span>{" "}
          Each project represents my growth as a
        </p>
        <p className="text-slate-300">
          developer and my passion for creating meaningful solutions.
        </p>
      </div>

      <div className="text-gray-600 font-bold mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        <div className=" bg-white/90 border-2 border-white h-20 w-full rounded-xl flex flex-col items-center justify-center gap-1 ">
          <p className="text-gray-800 font-extrabold text-xl">5+</p>
          <p className="text-xs font-extrabold ">Projects</p>
        </div>

        <div className=" bg-white/90 border-2 border-white h-20 w-full rounded-xl flex flex-col items-center justify-center gap-1 ">
          <p className="text-emerald-700 font-extrabold text-xl">100%</p>
          <p className="text-xs font-extrabold ">Live</p>
        </div>

        <div className=" bg-white/90 border-2 border-white h-20 w-full rounded-xl flex flex-col items-center justify-center gap-1 ">
          <p className="text-amber-600 font-extrabold text-xl">5+</p>
          <p className="text-xs font-extrabold ">Tech Stack</p>
        </div>

        <div className=" bg-white/90 border-2 border-white h-20 w-full rounded-xl flex flex-col items-center justify-center gap-1 ">
          <p className="text-blue-700 font-extrabold text-xl">24/7</p>
          <p className="text-xs font-extrabold ">Available</p>
        </div>
      </div>

      <div className="w-full  ">
        <div className="flex justify-center items-center gap-3 px-4">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 ">
            <img className="p-2" src={codeWhite} alt="" />
          </div>
          <p className="font-extrabold text-slate-300 text-3xl">Projects</p>
          <div className=" h-0.5 flex-1 bg-gradient-to-r from-amber-300 to-transparent"></div>
        </div>
        <div className="mt-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-auto min-h-96 w-full border-2 border-white rounded-xl text-gray-700 text-xs overflow-hidden"
            >
              <div className="h-48 w-full">
                <img
                  className="h-full w-full rounded-t-xl object-cover"
                  src={project.image}
                  alt=""
                />
              </div>

              <div className="min-h-48 w-full rounded-b-xl bg-gray-200 py-4 px-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img className="h-5" src={project.logo} alt="" />
                  <p className="font-extrabold text-sm text-gray-800">
                    {project.title}
                  </p>
                </div>

                <p>{project.description}</p>

                <div className="mt-1 flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <button key={index} className="bg-white p-2 rounded-xl">
                      {item}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap mt-2 gap-2">
                  <a href={project.demo}>
                    <button className="bg-gray-900 px-8 py-3 cursor-pointer flex justify-center gap-2 text-white font-bold items-center rounded-2xl  transition-transform duration-500 hover:bg-gray-800 ">
                      <img className="h-3" src={boxArrow} alt="" />
                      <p>Demo</p>
                    </button>
                  </a>

                  <a href={project.code}>
                    <button className="border border-gray-900 cursor-pointer px-8 py-3 flex justify-center gap-2 font-bold items-center rounded-2xl group transition-transform duration-500 hover:bg-gray-900 ">
                      <img
                        className="h-3 group-hover:invert "
                        src={github}
                        alt=""
                      />
                      <p className="text-gray-700 group-hover:text-white ">
                        Code
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center  mt-5 group  ">
        <div className="h-56 w-full sm:w-2/3 lg:w-1/3 bg-linear-to-r from-gray-700 to-gray-900 rounded-2xl flex flex-col items-center justify-center gap-3">
          <img
            className="h-10 invert transition-all duration-300 group-hover:scale-110 "
            src={github}
            alt=""
          />
          <p className="font-bold text-lg">Explore More Projects</p>
          <p className="text-sm text-white/80">
            Check out my Github for more projects and contributions
          </p>
          <button className="bg-white  text-gray-900 text-sm font-bold h-10 w-44 rounded-xl flex justify-center items-center gap-1 transition-all duration-500 hover:scale-105 ">
            <a href="https://github.com/Aakash2084">View Github Profile </a>
            <img
              className="h-3 invert brightness-75 transition-all duration-300 group-hover:translate-x-1 "
              src={arrow}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
