import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import correctLogo from "../assets/correctLogo.svg";
import star from "../assets/starAmber.svg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import github from "../assets/github.svg";
import target from "../assets/target.svg";
import flash from "../assets/flash.svg";
import privacy from "../assets/privacy.svg";
import message from "../assets/message.svg";
import profile from "../assets/profile.svg";
import emailGray from "../assets/emailGray.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import arrow from "../assets/arrow.svg";
function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tx27v3p",
        "template_1phy5nb",
        {
          from_name: Name,
          from_email: Email,
          message: Message,
        },
        "dZqdA8eFEodts02o1",
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <div className="flex flex-col items-center gap-5 px-5 lg:px-0">
      <div className="flex h-11 w-fit items-center gap-2 rounded-r-full border-l-4 border-green-500 bg-white/90 px-5 py-4 text-sm font-bold text-green-700 shadow-sm transition-transform duration-500 hover:scale-105 ">
        {/* Ping Dot */}
        <div className="relative flex items-center justify-center ">
          <span className="absolute h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
        </div>

        {/* Text */}
        <p>Available for new projects</p>

        {/* Star */}
        <img className="h-4" src={correctLogo} alt="About" />
      </div>

      <p className="text-3xl sm:text-4xl text-center font-extrabold text-gray-300">
        Let's Connect
      </p>

      <div className="h-20 overflow-hidden  ">
        <div className="move-up">
          <div className="h-20 flex flex-col items-center ">
            <div className="flex items-center gap-1">
              <h2 className="text-xl text-amber-400 font-bold">Email First </h2>
              <img className="h-5 animate-pulse " src={star} alt="" />
            </div>

            <p className="text-amber-400 text-lg">
              Professional communication via email
            </p>
          </div>

          <div className="h-20 flex flex-col items-center ">
            <div className="flex items-center gap-1">
              <h2 className="text-xl text-amber-400 font-bold">
                Social Connect{" "}
              </h2>
              <img className="h-5 animate-pulse " src={star} alt="" />
            </div>

            <p className="text-amber-400 text-lg">
              Connect through professional platforms
            </p>
          </div>

          <div className="h-20 flex flex-col items-center ">
            <div className="flex items-center gap-1">
              <h2 className="text-xl text-amber-400 font-bold">
                Quick Message{" "}
              </h2>
              <img className="h-5 animate-pulse " src={star} alt="" />
            </div>

            <p className="text-amber-400 text-lg">
              Send the message using the contact form
            </p>
          </div>

          <div className="h-20 flex flex-col items-center ">
            <div className="flex items-center gap-1">
              <h2 className="text-xl text-amber-400 font-bold">
                Direct Contact{" "}
              </h2>
              <img className="h-5 animate-pulse " src={star} alt="" />
            </div>

            <p className="text-amber-400 text-lg">
              Available upon request for urgent matters
            </p>
          </div>
        </div>
      </div>
      <div className="text-white/80 text-base sm:text-lg text-center flex flex-col items-center px-4">
        <p>
          Ready to bring your ideas to life? I'm here to help you build amazing
          digital{" "}
        </p>
        <p>experiences. Let's discuss your project and make it happen!</p>
      </div>

      <div className="mt-5 w-full max-w-6xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-blue-400 h-32 w-full rounded-xl flex flex-col items-center justify-evenly transition-transform duration-500 hover:scale-105">
            <div>
              <img className="h-10 brightness-0 invert " src={email} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm ">Email</p>
              <p className="text-xs">Preferred Method</p>
            </div>

            <div></div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/aakash-solanki-5530762b9/">
          <div className="bg-blue-800 h-32 w-full rounded-xl flex flex-col items-center justify-evenly transition-transform duration-500 hover:scale-105">
            <div>
              <img className="h-8 brightness-0 invert " src={linkedin} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm ">LinkedIn</p>
              <p className="text-xs ">Professional</p>
            </div>

            <div></div>
          </div>
        </a>

        <a href="https://www.instagram.com/aakash_1364/">
          <div className="bg-green-700 h-32 w-full rounded-xl flex flex-col items-center justify-evenly transition-transform duration-500 hover:scale-105">
            <div>
              <img className="h-10 brightness-0 invert " src={insta} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm ">Instagram</p>
              <p className="text-xs">Follow Me</p>
            </div>

            <div></div>
          </div>
        </a>

        <a href="https://github.com/Aakash2084">
          <div className="bg-gray-950 h-32 w-full rounded-xl flex flex-col items-center justify-evenly transition-transform duration-500 hover:scale-105">
            <div>
              <img className="h-8 brightness-0 invert " src={github} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm ">Github</p>
              <p className="text-xs ">Professional</p>
            </div>

            <div></div>
          </div>
        </a>
      </div>

      {/* 2nd part */}
      <div className="mt-5 w-full max-w-7xl px-4 flex flex-col lg:flex-row justify-center gap-10">
        <div className="w-full lg:w-auto">
          <div
            className="
relative w-full lg:w-[500px] min-h-[220px]
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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img className="h-5" src={target} alt="" />
                <p className="font-bold">WHY WORK WITH ME</p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-5" src={flash} alt="" />
                <p>Fast turnaround with quality results</p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-5" src={star} alt="" />
                <p>Modern technologies and best practice</p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-5" src={correctLogo} alt="" />
                <p>Dedicated support throught the project</p>
              </div>

              <div className="flex items-center gap-2">
                <img className="h-5" src={privacy} alt="" />
                <p>Privacy-focused communication</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
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
                  className="relative  z-10 w-6 transition duration-300 group-hover:brightness-0 group-hover:invert"
                  src={insta}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        <form
          action=""
          onSubmit={sendEmail}
          className="bg-white/90 backdrop-blur-sm w-full lg:w-1/2 p-6 sm:p-9 rounded-2xl flex flex-col gap-2"
        >
          <div className="flex gap-3 items-center ">
            <img className="h-6" src={message} alt="" />
            <p className="text-black font-bold text-xl ">Send a Message</p>
          </div>

          <label className="text-gray-500 mt-5 text-xs font-bold " htmlFor="">
            Your Name
          </label>
          <div className="relative w-full bg-white rounded-lg">
            <img
              src={profile}
              alt="Email"
              className="absolute left-3 top-1/2 h-4 -translate-y-1/2"
            />
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-lg text-gray-600 text-sm py-3 pl-10 pr-4 outline-none "
            />
          </div>

          <label className="text-gray-500 mt-5 text-xs font-bold " htmlFor="">
            Your Email
          </label>
          <div className="relative w-full bg-white rounded-lg">
            <img
              src={emailGray}
              alt="Email"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
            />
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg text-gray-600 text-sm py-3 pl-10 pr-4 outline-none "
            />
          </div>

          <label className="text-gray-500 mt-5 text-xs font-bold " htmlFor="">
            Your Message
          </label>
          <div className="relative w-full bg-white rounded-lg">
            <img
              src={comment}
              alt="Email"
              className="absolute left-3 top-6 h-5 w-5 -translate-y-1/2"
            />
            <textarea
              name=""
              id=""
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project "
              className="w-full rounded-lg text-gray-600 text-sm py-3 pl-10 pr-4 outline-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 cursor-pointer mt-5 h-13 w-full rounded-xl flex justify-center items-center gap-2 font-bold group transition-transform duration-500 hover:scale-105"
          >
            <img className="h-5" src={send} alt="" />
            Send Message{" "}
            <img
              className="h-5 transition-transform duration-300 group-hover:translate-x-2 "
              src={arrow}
              alt=""
            />{" "}
          </button>

          <div className=" mt-5 flex gap-2">
            <img className="h-4" src={privacy} alt="" />
            <p className="text-gray-400 text-xs">
              Your information is kept private and secure
            </p>
          </div>
        </form>

        {/* 2nd end */}
      </div>

      {/* djasnjm */}
    </div>
  );
}

export default Contact;
