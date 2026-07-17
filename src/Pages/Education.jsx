import React from "react";
import star from "../assets/star.svg";
import flash from "../assets/flash.svg";
import degree from "../assets/degree.svg";
import calender from "../assets/calender.svg";
import starGreen from "../assets/starGreen.svg";
import location from "../assets/location.svg";
import boxArrow from "../assets/boxArrow.svg";
import college from "../assets/college.svg";
import cap from "../assets/cap.svg";
import orangestar from "../assets/orangeStar.svg";

function Education() {
  return (
    <div className="flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="flex justify-evenly h-11 w-56 items-center rounded-r-full border-l-4 border-orange-400 bg-white/90 transition-transform duration-500 hover:scale-105">
        <img className="h-5" src={cap} alt="" />
        <p className="text-orange-800 font-bold text-sm">Academic Journey</p>
        <img className="h-4 animate-pulse" src={orangestar} alt="" />
      </div>

      <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200 text-center">
        Education & Achievements
      </p>

      <div className="text-amber-400 text-center max-w-2xl">
        <p>
          My academic foundation and continuous learning journey in technology
          and computer applications.
        </p>
      </div>

      {/* ================= MCA ================= */}

      <div className="relative mt-10 w-full max-w-4xl rounded-2xl bg-white/90 p-5 sm:p-7 transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute -top-4 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-xs font-bold h-8 px-4 flex items-center gap-2 rounded-2xl">
          <img className="h-4" src={flash} alt="" />
          <p>Latest Degree</p>
        </div>

        {/* Top */}
        <div className="flex flex-col sm:flex-row gap-5">
          <img className="h-14 w-14" src={degree} alt="" />

          <div>
            <p className="text-black text-xl sm:text-2xl font-bold hover:text-amber-600 transition-colors">
              Faridabad College of Engineering and Management
            </p>

            <p className="text-amber-600 font-bold">
              Master of Computer Applications (MCA)
            </p>

            <p className="text-gray-600 text-sm">Information Technology</p>
          </div>
        </div>

        {/* Duration + Grade */}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl h-15 flex items-center gap-4 px-4">
            <img className="h-5" src={calender} alt="" />

            <div>
              <p className="text-xs text-gray-500 font-bold">DURATION</p>

              <p className="font-bold text-sm">2024 - 2026</p>
            </div>
          </div>

          <div className="bg-green-100 rounded-xl h-15 flex items-center gap-4 px-4">
            <img className="h-5" src={starGreen} alt="" />

            <div>
              <p className="text-xs text-gray-500 font-bold">GRADE</p>

              <p className="text-green-800 font-bold text-sm">
                Last Result Pending!
              </p>
            </div>
          </div>
        </div>

        {/* Type */}

        <div className="mt-4 bg-blue-100 rounded-xl flex items-center gap-4 px-4 py-4">
          <img className="h-5" src={location} alt="" />

          <div>
            <p className="text-xs text-gray-500 font-bold">TYPE</p>

            <p className="text-blue-800 font-bold text-sm">Degree</p>
          </div>
        </div>

        <a href="https://www.fcem.in/">
          <button className="mt-5 bg-black h-9 w-full sm:w-40 rounded-xl cursor-pointer text-white text-xs font-bold flex justify-center items-center gap-2 hover:scale-105 transition">
            <img className="h-3" src={boxArrow} alt="" />
            Visit Institution
          </button>
        </a>
      </div>

      {/* ================= BCA ================= */}

      <div className="relative mt-6 w-full max-w-4xl rounded-2xl bg-white/90 p-5 sm:p-7 transition-transform duration-500 hover:scale-[1.02]">
        {/* Top */}

        <div className="flex flex-col sm:flex-row gap-5">
          <img className="h-12 w-12" src={college} alt="" />

          <div>
            <p className="text-black text-xl sm:text-2xl font-bold hover:text-amber-600 transition-colors">
              Pt. J. L. N. Govt. College, Faridabad
            </p>

            <p className="text-amber-600 font-bold">
              Bachelor of Computer Applications (BCA)
            </p>

            <p className="text-gray-600 text-sm">Information Technology</p>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl h-15 flex items-center gap-4 px-4">
            <img className="h-5" src={calender} alt="" />

            <div>
              <p className="text-xs text-gray-500 font-bold">DURATION</p>

              <p className="font-bold text-sm">2021 - 2024</p>
            </div>
          </div>

          <div className="bg-green-100 rounded-xl h-15 flex items-center gap-4 px-4">
            <img className="h-5" src={starGreen} alt="" />

            <div>
              <p className="text-xs text-gray-500 font-bold">GRADE</p>

              <p className="text-green-800 font-bold text-sm">7.5 CGPA</p>
            </div>
          </div>
        </div>

        {/* Type */}

        <div className="mt-4 bg-blue-100 rounded-xl flex items-center gap-4 px-4 py-4">
          <img className="h-5" src={location} alt="" />

          <div>
            <p className="text-xs text-gray-500 font-bold">TYPE</p>

            <p className="text-blue-800 font-bold text-sm">Degree</p>
          </div>
        </div>

        <a href="https://collegedunia.com/college/18466-pt-jawahar-lal-nehru-government-collegefaridabad-faridabad">
          <button className="mt-5 bg-black h-9 w-full sm:w-40 rounded-xl cursor-pointer text-white text-xs font-bold flex justify-center items-center gap-2 hover:scale-105 transition">
            <img className="h-3" src={boxArrow} alt="" />
            Visit Institution
          </button>
        </a>
      </div>
    </div>
  );
}

export default Education;
