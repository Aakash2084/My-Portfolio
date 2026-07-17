import React from "react";
import star from "../assets/starFooter.svg";
import email from "../assets/emailGreen.svg";
import arrow from "../assets/boxArrow.svg";
import linkedinB from "../assets/linkedinBlue.svg";
import githubA from "../assets/githubAmber.svg";
import code from "../assets/codePurple.svg";
import heart from "../assets/heart.svg";
import insta from "../assets/insta.svg";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import arrowTop from "../assets/arrowTop.svg";
import cup from "../assets/cup.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#242A31] mt-20 flex flex-col items-center gap-5">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
        <div className=" mt-15 h-10 w-72 rounded-full flex justify-center items-center gap-2  border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl ">
          {/* Ping Dot */}
          <div className=" relative flex items-center justify-center ">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </div>

          {/* Text */}
          <p className="text-green-400 font-bold text-sm ">
            Let's Connect & Build Together
          </p>

          {/* Star */}
          <img className="h-4 animate-pulse " src={star} alt="About" />
        </div>

        <p className="text-center text-2xl sm:text-3xl font-extrabold">
          Ready to Start Your Next Project?
        </p>
        <div className="text-gray-300 text-sm text-center flex flex-col items-center max-w-2xl px-4">
          <p>
            I'm always excited to work on new challenges and contribute to
            innovative projects. Let's
          </p>
          <p>discuss how we can bring your ideas to life.</p>
        </div>

        <div className="mt-5 grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-20 w-full bg-emerald-500/20 cursor-pointer backdrop-blur-xl rounded-xl border border-green-500/30 shadow-2xl flex justify-evenly items-center  group transition-transform duration-500 hover:scale-105  ">
              <div className="h-10 w-10 bg-emerald-500/20  rounded-xl flex justify-center items-center transition-transform duration-500 group-hover:bg-emerald-500/30  ">
                <img className="h-6" src={email} alt="" />
              </div>

              <div>
                <p className="text-xs text-white/80 ">EMAIL ME</p>
                <a className="text-xs font-bold " href="">
                  aakashsolanki325@g...
                </a>
              </div>

              <div>
                <img
                  className="h-4 brightness-70 transition-transform duration-500 group-hover:brightness-100 "
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/aakash-solanki-5530762b9/">
            <div className="h-20 w-full bg-blue-500/20 cursor-pointer backdrop-blur-xl rounded-xl border border-blue-500/30 shadow-2xl flex justify-evenly items-center  group transition-transform duration-500 hover:scale-105  ">
              <div className="h-10 w-10 bg-blue-500/20 rounded-xl flex justify-center items-center transition-transform duration-500 group-hover:bg-blue-500/30  ">
                <img className="h-4" src={linkedinB} alt="" />
              </div>

              <div>
                <p className="text-xs text-white/80 ">MESSAGE ME</p>
                <a className="text-xs font-bold " href="">
                  http://www.linkedi...
                </a>
              </div>

              <div>
                <img
                  className="h-4 brightness-70 transition-transform duration-500 group-hover:brightness-100 "
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          </a>

          <a href="https://github.com/Aakash2084">
            <div className="h-20 w-full bg-amber-500/20 cursor-pointer backdrop-blur-xl rounded-xl border border-amber-500/30 shadow-2xl flex justify-evenly items-center  group transition-transform duration-500 hover:scale-105  ">
              <div className="h-10 w-10 bg-amber-500/20 rounded-xl flex justify-center items-center transition-transform duration-500 group-hover:bg-amber-500/30  ">
                <img className="h-6" src={githubA} alt="" />
              </div>

              <div>
                <p className="text-xs text-white/80 ">GITHUB</p>
                <a className="text-xs font-bold " href="">
                  http://github/...
                </a>
              </div>

              <div>
                <img
                  className="h-4 brightness-70 transition-transform duration-500 group-hover:brightness-100 "
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          </a>

          <div className="h-20 w-full bg-purple-500/20 cursor-pointer backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-2xl flex justify-evenly items-center  group transition-transform duration-500 hover:scale-105  ">
            <div className="h-10 w-10 bg-purple-500/20 rounded-xl flex justify-center items-center transition-transform duration-500 group-hover:bg-purple-500/30  ">
              <img className="h-6" src={code} alt="" />
            </div>

            <div>
              <p className="text-xs text-white/80 ">AVAILABLE FOR</p>
              <a className="text-xs font-bold " href="">
                Full-time Opportunities
              </a>
            </div>

            <div>
              <img
                className="h-4 brightness-70 transition-transform duration-500 group-hover:brightness-100 "
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" mt-5 flex items-center gap-2 ">
          <p className="font-bold text-lg ">Follow My Journey </p>
          <img className="h-5 animate-pulse " src={heart} alt="" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-white/30 transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
              <img
                className="relative z-10 w-6 brightness-0 invert  transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                src={email}
                alt=""
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/aakash-solanki-5530762b9/">
            <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-white/30 transition-transform duration-300 group-hover:scale-y-100"></span>
              <img
                className="relative z-10 w-5 brightness-0  invert transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={linkedin}
                alt=""
              />
            </div>
          </a>

          <a href="https://github.com/Aakash2084">
            <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-white/30 transition-transform duration-300 group-hover:scale-y-100"></span>
              <img
                className="relative brightness-0 invert z-10 w-5 transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={github}
                alt=""
              />
            </div>
          </a>

          <a href="https://www.instagram.com/aakash_1364/">
            <div className="group relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-white/30 transition-transform duration-300 group-hover:scale-y-100"></span>
              <img
                className="relative brightness-0 invert z-10 w-6 transition duration-300 group-hover:brightness-0 group-hover:invert"
                src={insta}
                alt=""
              />
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div>
            <p className="text-green-500 font-extrabold text-2xl ">5+</p>
            <p className="text-white/70 text-sm ">Projects</p>
          </div>

          <div className="border-l border-blue-200/60  "></div>

          <div>
            <p className="text-amber-300 font-extrabold  text-2xl ">7.5</p>
            <p className="text-white/70 text-sm ">CGPA</p>
          </div>

          <div className="border-l border-blue-200/60  "></div>

          <div>
            <p className="text-blue-400 font-extrabold text-2xl ">2024</p>
            <p className="text-white/70 text-sm ">Graduate</p>
          </div>
        </div>
      </div>{" "}
      {/* max-w-7xl wrapper */}
      <div className="w-full bg-gray-900 mt-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-white/70 lg:flex-row">
          <p>© 2026 Aakash Solanki. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <p>Made with</p>
            <img className="h-5" src={heart} alt="" />
            <p>and</p>
            <img className="h-5" src={cup} alt="" />
            <p>in India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
