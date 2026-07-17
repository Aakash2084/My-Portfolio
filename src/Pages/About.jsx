import React from "react";
import star from "../assets/star.svg";
import aboutStar from "../assets/aboutStar.svg";
import tea from "../assets/cup.svg";
import codeWhite from "../assets/codeWhite.svg";
import screen from "../assets/screen.svg";
import database from "../assets/database.svg";
import internet from "../assets/internet.svg";
import team from "../assets/team.svg";
import book from "../assets/book.svg";
import target from "../assets/target.svg";
import rocket from "../assets/rocket.svg";
import brain from "../assets/brain.svg";
import correctLogo from "../assets/correctLogo.svg";
import flash from "../assets/flash.svg";
import arrow from "../assets/arrow.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function About() {
  const coreValues = [
    {
      title: "Clean Code",
      desc: "Writing maintainable, scalable code with focus on performance and user experience.",
      icon: codeWhite,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "User-Centered",
      desc: "Building responsive applications that work seamlessly across all devices.",
      icon: team,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Problem Solving",
      desc: "Approaching challenges systematically, from chess logic to healthcare solutions.",
      icon: target,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Continuous Learning",
      desc: "From MCA fundamentals to modern web technologies - always eager to learn and grow.",
      icon: book,
      color: "from-purple-500 to-fuchsia-500",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % coreValues.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 px-4 sm:px-6 lg:px-8">
      <div className="flex h-10 w-fit items-center gap-2 rounded-r-full border-l-4 border-gray-500 bg-white/90 px-5 text-sm font-bold text-gray-700 shadow-sm transition-transform duration-500 hover:scale-105 ">
        {/* Ping Dot */}
        <div className="relative flex items-center justify-center">
          <span className="absolute h-2.5 w-2.5 rounded-full bg-gray-500 animate-ping"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500"></span>
        </div>

        {/* Text */}
        <p>About Me</p>

        {/* Star */}
        <img className="h-4 w-4" src={aboutStar} alt="About" />
      </div>

      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 text-center">
        Web Developer
      </p>

      <p className="text-amber-300 text-xl sm:text-2xl text-center">
        Building Modern Web Solutions
      </p>
      <div className="flex flex-col justify-center items-center text-center max-w-3xl">
        <p>
          MCA graduate passionate about creating responsive, user-friendly web
          applications. From learning programming fundamentals to building
          full-stack solutions, I'm driven by the endless possibilities of web
          development.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        <div className="h-36 w-full rounded-2xl bg-white/90 flex flex-col gap-2 justify-center items-center  transition-transform duration-500 border-t-4 border-transparent hover:border-blue-600  hover:scale-105 ">
          <p className=" text-3xl font-extrabold text-blue-600">1+</p>
          <p className=" text-gray-600 text-sm font-extrabold ">
            Year Learning
          </p>
          <p className=" text-gray-500 text-sm ">Contineous Growth</p>
        </div>

        <div className="h-36 w-full rounded-2xl bg-white/90 flex flex-col gap-2 justify-center items-center  transition-transform duration-500 border-t-4 border-transparent hover:border-green-700  hover:scale-105 ">
          <p className=" text-3xl font-extrabold text-green-700">5+</p>
          <p className=" text-gray-600 text-sm font-extrabold ">
            Projects built
          </p>
          <p className=" text-gray-500 text-sm ">Real World Applications</p>
        </div>

        <div className="h-36 w-full rounded-2xl bg-white/90 flex flex-col gap-2 justify-center items-center  transition-transform duration-500 border-t-4 border-transparent hover:border-purple-600  hover:scale-105 ">
          <p className=" text-3xl font-extrabold text-purple-600">10+</p>
          <p className=" text-gray-600 text-sm font-extrabold ">Technologies</p>
          <p className=" text-gray-500 text-sm ">Modern Stack</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-center gap-10 mt-10 w-full">
        <div className="flex flex-col gap-10 w-full xl:w-auto">
          <div className="  relative  flex h-auto min-h-80 w-full xl:w-[576px] flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 text-slate-600 shadow-[0_20px_50px_rgba(15,23,42,.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,.18)]">
            {/* Floating Badge */}
            <div className="absolute -top-5 left-8 text-xs transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 rounded-full bg-linear-to-r from-gray-700 to-gray-800  px-5 py-2 text-white font-semibold shadow-[0_10px_30px_rgba(15,23,42,.25)]">
                <img
                  src={tea}
                  className="w-4 h-4 brightness-0 invert animate-pulse"
                  alt=""
                />
                My Story
              </div>
            </div>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              My path into web development began during my{" "}
              <span className="  font-bold text-gray-700">MCA studies</span> at
              Pt. J.L.N. Govt. College. What started as curriculum requirements
              quickly became a genuine passion for creating digital solutions.{" "}
              <br />
              Through college projects and self-directed learning, I discovered
              the power of modern web technologies. From basic HTML/CSS to
              complex{" "}
              <span className="  font-bold text-gray-700">
                React applications
              </span>{" "}
              , each project taught me something new about building
              user-centered experiences. <br />
              Today, I specialize in{" "}
              <span className="  font-bold text-gray-700">
                full-stack development
              </span>{" "}
              with React, Node.js, and modern databases. My approach focuses on
              writing clean, maintainable code and creating applications that
              solve real problems.
            </p>
          </div>

          <div className="relative  h-auto min-h-96 w-full xl:w-[576px] overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-[0_15px_40px_rgba(0,0,0,.06)]">
            {/* Soft Glow */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl"></div>

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-slate-100/60 blur-3xl"></div>

            <div className="relative z-10">
              {/* Heading */}
              <div className=" ml-1 flex items-center gap-3  ">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600">
                  <img className="h-5" src={codeWhite} alt="" />
                </div>

                <p className="text-xl font-bold text-gray-900">
                  Technical Skills
                </p>
              </div>

              {/* Glass Boxes */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-600">
                <div className="contents">
                  <div className="h-32 p-4 w-full rounded-2xl ... border border-sky-200 bg-sky-50/50 backdrop-blur-2xl shadow-[0_10px_25px_rgba(148,163,184,.12)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/55">
                    <div className="flex items-start gap-2">
                      <img className="h-3" src={screen} alt="" />
                      <p className="text-xs text-gray-700 font-bold">
                        Frontend
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <p className="text-xs">React</p>
                      <p className="text-xs">Javascript</p>
                      <p className="text-xs">HTML/CSS</p>
                      <p className="text-xs">Tailwind CSS</p>
                    </div>
                  </div>

                  <div className="h-32 p-4 w-full  rounded-2xl border border-white/80 bg-white/35 backdrop-blur-2xl shadow-[0_10px_25px_rgba(148,163,184,.12)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/55">
                    <div className="flex items-center gap-2 ">
                      <img className="h-4" src={database} alt="" />
                      <p className="text-xs text-gray-700 font-bold">
                        Database
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <p className="text-xs">MongoDB</p>
                      <p className="text-xs">MySQL</p>
                      <p className="text-xs">Data Management</p>
                    </div>
                  </div>
                </div>

                <div className="contents">
                  <div className="h-32 p-4  w-full  rounded-2xl border border-white/80 bg-white/35 backdrop-blur-2xl shadow-[0_10px_25px_rgba(148,163,184,.12)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/55">
                    <div className="flex items-start gap-2">
                      <img className="h-4" src={database} alt="" />
                      <p className="text-xs text-gray-700 font-bold">Backend</p>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <p className="text-xs">Node.js</p>
                      <p className="text-xs">Express.js</p>
                      <p className="text-xs">REST APIs</p>
                      <p className="text-xs">C++</p>
                    </div>
                  </div>

                  <div className="h-32 p-4 w-full  rounded-2xl border border-white/80 bg-white/35 backdrop-blur-2xl shadow-[0_10px_25px_rgba(148,163,184,.12)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/55">
                    <div className="flex items-center gap-2 ">
                      <img className="h-4" src={internet} alt="" />
                      <p className="text-xs text-gray-700 font-bold">Tools</p>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <p className="text-xs">Git/GitHub</p>
                      <p className="text-xs">VS Code</p>
                      <p className="text-xs">API Integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-auto min-h-72 w-full xl:w-[576px] px-8 py-5 overflow-visible rounded-xl border border-white/80 bg-gradient-to-br from-white via-[#FAFBFD] to-[#F3F6FA] shadow-[0_20px_60px_rgba(15,23,42,.08)]">
            {/* Badge */}
            <div className="absolute -top-5 left-8 z-20 rounded-full bg-linear-to-r from-emerald-600 to-emerald-700 px-3 py-2 text-xs font-bold text-white shadow-xl flex items-center gap-2 ">
              <img className="h-4 invert " src={star} alt="" />
              <p>Core Values</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="pt-10"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${coreValues[index].color}`}
                  >
                    <img
                      src={coreValues[index].icon}
                      alt=""
                      className="h-5  object-contain"
                    />
                  </div>
                  <div>
                    <h2 className=" text-xl font-bold text-slate-900">
                      {coreValues[index].title}
                    </h2>
                  </div>
                </div>

                <p className="mt-5  leading-8 text-slate-500">
                  {coreValues[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {coreValues.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 ${
                    index === i
                      ? "h-2 w-8 rounded-full bg-emerald-500"
                      : "h-2 w-2 rounded-full bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-10 h-auto min-h-84 w-full xl:w-[576px] rounded-2xl border border-slate-200 bg-white p-8 text-slate-600 shadow-[0_20px_50px_rgba(15,23,42,.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,.18)]">
            {/* Floating Badge */}
            <div className="absolute -top-5 left-8 text-xs transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-700 px-4 py-2 text-white font-semibold shadow-[0_10px_30px_rgba(15,23,42,.25)]">
                <img src={rocket} className="w-4 h-4 animate-pulse" alt="" />
                Journey
              </div>
            </div>

            <div className="flex flex-col  gap-3 pt-2">
              <div className="flex gap-4 transition-transform duration-300 hover:scale-105 ">
                <div className="bg-blue-500 h-8 w-8 rounded-full flex justify-center items-center ">
                  <img className="h-4" src={book} alt="" />
                </div>
                <div>
                  <p className="text-xs">FOUNDATION</p>

                  <p className="text-xs mt-1 text-gray-700 font-extrabold">
                    MCA Student
                  </p>
                  <p className="text-xs mt-1 ">
                    Building strong fundamentals in computer science and
                    programming
                  </p>
                </div>
              </div>

              <div className="flex gap-4 transition-transform duration-300 hover:scale-105 ">
                <div className="bg-emerald-500 h-8 w-8 rounded-full flex justify-center items-center ">
                  <img className="h-4" src={codeWhite} alt="" />
                </div>
                <div>
                  <p className="text-xs">EXPLORATION</p>

                  <p className="text-xs mt-1 text-gray-700 font-extrabold">
                    Web Developement
                  </p>
                  <p className="text-xs  mt-1 ">
                    Discovered passion for creating beautiful, functional web
                    applications
                  </p>
                </div>
              </div>

              <div className="flex gap-4 transition-transform duration-300 hover:scale-105 ">
                <div className="bg-purple-500 h-8 w-8 rounded-full flex justify-center items-center ">
                  <img className="h-4" src={rocket} alt="" />
                </div>
                <div>
                  <p className="text-xs">MASTERY</p>

                  <p className="text-xs mt-1 text-gray-700 font-extrabold">
                    Modern Stack
                  </p>
                  <p className="text-xs  mt-1 ">
                    Mastered React, Tailwind CSS, and modern development
                    practices
                  </p>
                </div>
              </div>

              <div className="flex gap-4 transition-transform duration-300 hover:scale-105 ">
                <div className="bg-amber-500 h-8 w-8 rounded-full flex justify-center items-center ">
                  <img className="h-4" src={brain} alt="" />
                </div>
                <div>
                  <p className="text-xs">INNOVATION</p>

                  <p className="text-xs mt-1 text-gray-700 font-extrabold">
                    Future Ready
                  </p>
                  <p className="text-xs  mt-1 ">
                    Continuously learning and adapting to emerging technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
relative mt-10 w-full lg:w-4/5 min-h-52
overflow-hidden rounded-3xl
bg-[#34415A]
p-8
shadow-xl
transition-all duration-500 hover:-translate-y-1

before:content-['']
before:absolute
before:w-44 before:h-44
before:rounded-full
before:bg-white/5
before:-top-20
before:-right-16
before:scale-100
before:transition-all
before:duration-700
before:ease-out

after:content-['']
after:absolute
after:w-64 after:h-64
after:rounded-full
after:bg-white/[0.04]
after:-bottom-40
after:-left-40
after:scale-100
after:transition-all
after:duration-700
after:ease-out

hover:before:scale-150
hover:after:scale-150
"
      >
        <div className="relative m-5   z-10">
          <div className="  flex items-center gap-2">
            <img className="h-5" src={flash} alt="" />

            <h3 className="text-sm font-bold uppercase tracking-[3px]  text-white">
              What Drives Me
            </h3>
          </div>

          <div className="text-sm flex flex-col lg:flex-row justify-between gap-5 text-white mt-5">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <img className="h-6" src={correctLogo} alt="" />
                <p className="text-white/90">
                  {" "}
                  <span className="font-bold text-white ">
                    Crafting intuitive
                  </span>{" "}
                  and responsive user interfaces that delight users
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-6" src={correctLogo} alt="" />
                <p className="text-white/90">
                  {" "}
                  <span className="font-bold text-white ">
                    Optimizing performance
                  </span>{" "}
                  for lightning-fast web applications
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-6" src={correctLogo} alt="" />
                <p className="text-white/90">
                  {" "}
                  <span className="font-bold text-white ">
                    Staying updated
                  </span>{" "}
                  with latest web technologies and best practices
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-6" src={correctLogo} alt="" />
                <p className="text-white/90">
                  {" "}
                  <span className="font-bold text-white ">
                    Collaborating with teams
                  </span>{" "}
                  to bring innovative ideas to life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" group w-full flex justify-center  mt-5   ">
        <div className="bg-white min-h-14 w-full sm:w-2/3 lg:w-2/5 px-5 py-3 text-gray-800 text-sm flex flex-wrap gap-3 justify-center items-center text-center rounded-2xl">
          <span className="font-bold  ">Ready to collaborate?</span> Let's build
          something amazing together!
          <div>
            <img
              className="h-5 brightness-40  transition-transform duration-300 group-hover:translate-x-2 "
              src={arrow}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* 12 */}
    </div>
  );
}

export default About;
