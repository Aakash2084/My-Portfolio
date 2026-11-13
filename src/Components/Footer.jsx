
import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
FaExternalLinkAlt,
  FaHeart,
  FaCoffee,
  FaStar,
  FaBriefcase
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactCards = [
    {
      title: "EMAIL ME",
      value: "aakashsolanki325@g...",
      icon: FaEnvelope,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com",
    },
    {
      title: "MESSAGE ME",
      value: "LinkedIn Profile",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aakash-solanki-5530762b9/",
    },
    {
      title: "GITHUB",
      value: "github.com/Aakash2084",
      icon: FaGithub,
      link: "https://github.com/Aakash2084",
    },
  ];

  const socialLinks = [
    {
      icon: FaEnvelope,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=aakashsolanki325@gmail.com",
      label: "Email",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/aakash-solanki-5530762b9/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Aakash2084",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/aakash_1364/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="mt-20 bg-[#171B2D] text-white">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-12 sm:py-16">

        {/* Connect Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
            </span>

            <p className="text-sm font-semibold text-indigo-300">
              Let's Connect & Build Together
            </p>

            <FaStar className="text-violet-400" size={15} />

          </div>
        </div>

        {/* Heading */}
        <div className="mt-7 text-center">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to Start Your Next Project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-400">
            I'm always excited to work on new challenges and contribute to
            innovative projects. Let's discuss how we can bring your ideas
            to life.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center justify-between gap-3 rounded-xl border border-indigo-400/20 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-950/30"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/25 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium tracking-wider text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-slate-200">
                    {item.value}
                  </p>
                </div>

              <FaExternalLinkAlt
  size={16}
  className="shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-300"
/>

              </a>
            );
          })}

          {/* Availability Card */}
          <div className="flex min-h-20 items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
              <FaBriefcase size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium tracking-wider text-slate-400">
                OPEN TO
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-200">
                Full-time Opportunities
              </p>
            </div>

          </div>

        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">

          <div className="flex items-center justify-center gap-2">
            <h3 className="text-lg font-bold">
              Follow My Journey
            </h3>

            <FaHeart className="text-rose-400" size={18} />
          </div>

          <div className="mt-5 flex justify-center gap-4">

            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <Icon size={21} />
                </a>
              );
            })}

          </div>

        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">

          <div className="text-center">
            <p className="text-2xl font-extrabold text-indigo-400">
              5+
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Projects
            </p>
          </div>

          <div className="hidden sm:block h-10 w-px bg-white/15"></div>

          <div className="text-center">
            <p className="text-2xl font-extrabold text-violet-400">
              7.0
            </p>
            <p className="mt-1 text-sm text-slate-400">
              CGPA
            </p>
          </div>

          <div className="hidden sm:block h-10 w-px bg-white/15"></div>

          <div className="text-center">
            <p className="text-2xl font-extrabold text-indigo-300">
              2026
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Post Graduate
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#121626]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-sm text-slate-400 sm:px-8 md:flex-row">

          <p>
            © 2026 Aakash Solanki. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-rose-400" />
            <span>and</span>
            <FaCoffee className="text-amber-400" />
            <span>in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="cursor-pointer font-semibold text-indigo-300 transition-colors hover:text-white"
          >
            Back to top ↑
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
