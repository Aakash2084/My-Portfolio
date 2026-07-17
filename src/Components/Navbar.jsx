import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLink = ({ isActive }) =>
    `transition-all duration-300 hover:text-cyan-400 ${
      isActive ? "text-cyan-400" : "text-white"
    }`;

  const mobileLink = ({ isActive }) =>
    `w-[90%] rounded-xl py-3 text-center text-lg font-medium transition-all duration-300 ${
      isActive ? "bg-cyan-500 text-white" : "text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-md">
      <nav className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Aakash
          </h1>

          <span className="hidden text-lg text-gray-300 sm:block">
            Portfolio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          <NavLink to="/" className={desktopLink}>
            Home
          </NavLink>

          <NavLink to="/about" className={desktopLink}>
            About
          </NavLink>

          <NavLink to="/projects" className={desktopLink}>
            Projects
          </NavLink>

          <NavLink to="/skills" className={desktopLink}>
            Skills
          </NavLink>

          <NavLink to="/education" className={desktopLink}>
            Education
          </NavLink>

          <NavLink to="/contact" className={desktopLink}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white transition-all duration-300 hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col items-center gap-2 py-5">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              Projects
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              Skills
            </NavLink>

            <NavLink
              to="/education"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              Education
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={mobileLink}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
