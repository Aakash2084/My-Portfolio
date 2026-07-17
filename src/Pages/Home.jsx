import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import correctLogo from "../assets/correctLogo.svg";
import email from "../assets/email.svg";
import star from "../assets/star.svg";
import project from "../assets/project.svg";
import arrow from "../assets/arrow.svg";
import download from "../assets/download.svg";
import boxArrow from "../assets/boxArrow.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import insta from "../assets/insta.svg";
import profile from "../assets/profile.jpeg";
import code from "../assets/codeWhite.svg";
import flash from "../assets/flash.svg";
import star2 from "../assets/star2.svg";
import resume from "../assets/resume.pdf";
import target from "../assets/target.svg";

function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-6 xl:px-8 flex items-center">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
        {/* left */}
        <div className="w-full xl:w-[56%] text-center xl:text-left">
          <div className="inline-flex w-fit mx-auto xl:mx-0 flex-wrap items-center gap-2 rounded-r-full border border-l-4 border-green-600 bg-gray-200 px-4 py-3 sm:px-5">
            <div className="relative flex  items-center justify-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]"></span>
            </div>

            <TypeAnimation
              className="text-xs sm:text-sm font-semibold text-green-800 whitespace-nowrap"
              sequence={["Open to freelance opportunities", 2000]}
              speed={50}
              cursor={true}
              repeat={0}
            />
            <img src={correctLogo} alt="React Logo" className="w-5 h-5" />
            {/* Mobile Profile */}
          </div>
          <div className="mt-8 flex justify-center lg:hidden">
            <div className="relative w-fit">
              <div className="h-48 w-48 sm:h-52 sm:w-52 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_20px_60px_rgba(15,23,42,.20)]">
                <img
                  src={profile}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -top-2 right-2">
                <div className="animate-pulse rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Available
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start">
            <div className="mt-6 w-fit mx-auto xl:mx-0 bg-gradient-to-r  from-cyan-500 to-blue-600 bg-clip-text text-3xl sm:text-4xl text-3xl sm:text-4xl xl:text-5xl  font-black tracking-tight text-transparent transition-transform duration-300 hover:scale-105">
              Aakash Solanki
            </div>
            <div className="h-20 mt-5 overflow-hidden">
              <div className="move-up will-change-transform">
                <div className="min-h-[80px] flex flex-col justify-center">
                  <div className="flex justify-center xl:justify-start items-center gap-1">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Full Stack Developer{" "}
                    </h2>
                    <img className="h-5 animate-pulse " src={star2} alt="" />
                  </div>

                  <p className="text-blue-500">
                    Creating modern web applications with latest technologies
                  </p>
                </div>

                <div className="min-h-[80px] flex flex-col justify-center">
                  <div className="flex justify-center xl:justify-start items-center gap-1">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Full Stack Problem Solver
                    </h2>
                    <img className="h-5 animate-pulse " src={star2} alt="" />
                  </div>

                  <p className="text-blue-500">
                    Converting ideas into functional digital solutions
                  </p>
                </div>

                <div className="min-h-[80px] flex flex-col justify-center">
                  <div className="flex justify-center xl:justify-start items-center gap-1">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Full Stack Quick Learner
                    </h2>
                    <img className="h-5 animate-pulse " src={star2} alt="" />
                  </div>

                  <p className="text-blue-500">
                    Mastering new frameworks and tools rapidly
                  </p>
                </div>

                <div className="min-h-[80px] flex flex-col justify-center">
                  <div className="flex justify-center xl:justify-start items-center gap-1">
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Full Stack Team Player
                    </h2>
                    <img className="h-5 animate-pulse " src={star2} alt="" />
                  </div>

                  <p className="text-blue-500">
                    Collaborating effectively in development teams
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center xl:justify-start items-center">
            <div className="group bg-white/80 text-black cursor-pointer flex items-center  gap-5 text-xs font-bold h-16 px-5 w-full xl:w-72 rounded-lg transition-transform duration-500 hover:scale-105">
              <div className="h-8 w-8 flex justify-center items-center rounded-xl  bg-white group-hover:bg-white/70 ">
                <img src={email} alt="email" className="h-4 w-4" />
              </div>
              <div>
                <label className="opacity-50">EMAIL</label>
                <p className="group-hover:opacity-70">
                  aakashsolanki325@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white/80 group cursor-pointer text-black flex items-center gap-5 text-xs font-bold h-16 p-2 w-full xl:w-72 rounded-lg transition-transform duration-400 hover:scale-105  ">
              <div className="h-8 w-8 flex justify-center items-center rounded-xl  bg-yellow-100 group-hover:bg-amber-200 ">
                <img src={star} alt="email" className="h-4 w-4" />
              </div>
              <div>
                <label className="opacity-50">CGPA</label>
                <p className="group-hover:text-amber-600">7.5 /10.0</p>
              </div>
            </div>
          </div>

          <div
            className="
relative mt-10 mx-auto xl:mx-0 w-full xl:max-w-[660px] min-h-[250px]
overflow-hidden rounded-3xl
bg-[#34415A]
p-6 sm:p-8
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
            <div className="relative  z-10">
              <div className="mb-4 flex justify-center xl:justify-start items-center gap-4">
                <div>
                  <img className="h-5" src={target} alt="" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-[3px] text-slate-300">
                  Why Choose Me
                </h3>
              </div>

              <p className="text-center xl:text-left text-sm sm:text-base text-white/90 leading-8">
                Recent MCA graduate with{" "}
                <span className="font-bold text-white">solid foundation</span>{" "}
                in modern web technologies. I bring{" "}
                <span className="font-bold text-white">
                  fresh perspective, dedication,
                </span>{" "}
                and{" "}
                <span className="font-bold text-white">
                  strong project portfolio
                </span>{" "}
                showcasing my ability to build scalable applications. Ready to
                learn, contribute, and grow with your team.
              </p>
            </div>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row gap-4 text-sm font-semibold justify-center xl:justify-start items-center">
            <Link to="/projects">
              <div className="group relative mt-6 flex h-12 w-full xl:min-w-[230px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-6 font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Hover Effect */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-slate-700 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                {/* Content */}
                <img className="relative z-10 h-4 " src={project} alt="" />

                <p className="relative z-10 text-white">View My Projects</p>

                <img
                  className="relative z-10 h-4 transition-transform duration-500 group-hover:translate-x-2 "
                  src={arrow}
                  alt=""
                />
              </div>
            </Link>

            <a href={resume}>
              <div className="mt-6 flex h-12 w-full xl:min-w-[230px] cursor-pointer items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 font-semibold text-slate-900 shadow-lg transition-all duration-500 hover:scale-105 hover:bg-amber-400 hover:shadow-2xl">
                <img className="h-4" src={download} alt="" />
                <p className="text-white">Download Resume </p>
                <img className=" w-3" src={boxArrow} alt="" />
              </div>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center xl:justify-start items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
                <img
                  className="relative z-10 w-6 transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                  src={email}
                  alt=""
                />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aakash-solanki-5530762b9/">
              <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gray-900 transition-transform duration-300 group-hover:scale-y-100"></span>
                <img
                  className="relative z-10 w-5 transition duration-300 group-hover:brightness-0 group-hover:invert"
                  src={linkedin}
                  alt=""
                />
              </div>
            </a>

            <a href="https://github.com/Aakash2084">
              <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gray-900 transition-transform duration-300 group-hover:scale-y-100"></span>
                <img
                  className="relative z-10 w-5 transition duration-300 group-hover:brightness-0 group-hover:invert"
                  src={github}
                  alt=""
                />
              </div>
            </a>

            <a href="https://www.instagram.com/aakash_1364/">
              <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gray-900 transition-transform duration-300 group-hover:scale-y-100"></span>
                <img
                  className="relative z-10 w-6 transition duration-300 group-hover:brightness-0 group-hover:invert"
                  src={insta}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="w-full xl:w-[38%] flex flex-col items-center xl:items-end">
          <div className="relative hidden w-fit lg:block">
            {/* Profile */}
            <div className="h-56 w-56 xl:h-64 xl:w-64 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_20px_60px_rgba(15,23,42,.20)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(15,23,42,.30)]">
              <img
                src={profile}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Available Badge */}
            <div className="absolute top-3 -right-4">
              <div className="flex animate-pulse items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,.35)] transition-all duration-300 hover:scale-105">
                <p className="text-sm  font-semibold text-white">Available</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col xl:flex-row justify-end items-center gap-4 w-full">
            <div className="group bg-white/90 text-gray-700 flex flex-col justify-center items-center gap-2 text-xs font-bold h-28 p-2 w-full max-w-[320px] xl:w-56 mt-5 rounded-lg transition-transform duration-500 hover:scale-105">
              <p className="text-3xl font-extrabold  ">5+</p>
              <p className="text-sm font-bold text-gray-600 ">
                {" "}
                projects Built
              </p>
            </div>

            <div className="group bg-white/90 text-gray-800 flex flex-col justify-center items-center gap-2 text-xs font-bold h-28 p-2 w-full max-w-[320px] xl:w-56 mt-5 rounded-lg transition-transform duration-500 hover:scale-105">
              <p className="text-3xl text-green-700 font-extrabold ">7.5</p>
              <p className="text-sm font-bold text-gray-600 "> CGPA</p>
            </div>
          </div>

          <div className="relative mt-10 flex min-h-[300px] w-full xl:max-w-[450px] xl:ml-auto flex-col justify-center rounded-[28px] border border-slate-200 bg-white/90 p-8 text-slate-600 shadow-[0_20px_50px_rgba(15,23,42,.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,.18)]">
            {/* Floating Badge */}
            <div className="absolute -top-5 left-8 text-xs transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 rounded-full bg-slate-700 px-5 py-2 text-white font-bold shadow-[0_10px_30px_rgba(15,23,42,.25)]">
                <img src={flash} className="w-4 h-4 animate-pulse" alt="" />
                Featured Work
              </div>
            </div>
            <p className=" text-lg font-bold tracking-tight text-slate-800">
              Blog Application
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              A full-stack blog application built with Node.js, Express.js,
              MongoDB, and EJS. Users can create, read, update, and delete
              blogs, manage profiles, upload images, and interact through
              comments with secure authentication.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs ">
              <button className="rounded-full bg-white px-4 py-1 text-gray-600 transition-all duration-300 hover:bg-gray-200">
                EJS
              </button>
              <button className="rounded-full bg-white px-4 py-1 text-gray-600 transition-all duration-300 hover:bg-gray-200">
                Node.js
              </button>
              <button className="rounded-full bg-white px-4 py-1 text-gray-600 transition-all duration-300 hover:bg-gray-200">
                Mongo.DB
              </button>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3 text-xs font-bold sm:flex-row sm:justify-start sm:items-center">
              <a
                href="https://blog-application-xpjl.onrender.com"
                className="w-full sm:w-auto"
              >
                <button className="flex h-10 w-full sm:min-w-[120px] items-center justify-center gap-2 rounded-2xl bg-slate-800 text-white shadow-md transition-all duration-500 hover:scale-105 hover:bg-slate-700 hover:shadow-xl cursor-pointer">
                  <img className="h-3" src={boxArrow} alt="" />
                  Live Demo
                </button>
              </a>

              <a
                href="https://github.com/Aakash2084/blog-application"
                className="w-full sm:w-auto"
              >
                <button className="flex h-10 w-full sm:min-w-[90px] items-center justify-center gap-1 rounded-2xl border border-slate-300 bg-white group transition-all duration-500 hover:scale-105 hover:bg-slate-800 shadow-lg cursor-pointer">
                  <img
                    className="h-4 brightness-0 group-hover:brightness-100"
                    src={code}
                    alt=""
                  />
                  <p className="text-black group-hover:text-white">Code</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
