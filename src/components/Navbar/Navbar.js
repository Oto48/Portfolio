import React, { useState, useEffect } from "react";
import GithubSvg from "../../assets/svg/GithubSvg";
import LinkedinSvg from "../../assets/svg/LinkedinSvg";
import EmailSvg from "../../assets/svg/EmailSvg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      if (
        projectsSection &&
        window.scrollY >= projectsSection.offsetTop - 130
      ) {
        setActiveLink("projects");
      } else if (
        experienceSection &&
        window.scrollY >= experienceSection.offsetTop - 130
      ) {
        setActiveLink("experience");
      } else if (
        aboutSection &&
        window.scrollY >= aboutSection.offsetTop - 130
      ) {
        setActiveLink("about");
      } else {
        setActiveLink("");
      }
    };

    const handleInitialHash = () => {
      const hash = window.location.hash.substr(1); // Get the hash portion without the "#"
      if (hash === "about" || hash === "experience" || hash === "projects") {
        setActiveLink(hash);
      } else if (window.scrollY === 0) {
        // If there's no hash and the page is at the top, set the first link as active (optional)
        setActiveLink("about");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Handle the initial hash when the component mounts
    handleInitialHash();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <nav className="flex flex-col justify-between gap-5 lg:gap-0 py-12 lg:py-32 lg:w-5/12 2xl:w-6/12 lg:h-screen lg:sticky top-0 font-sans z-50">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold capitalize text-3xl 2xl:text-4xl">
          oto tchokhonelidze
        </h1>
        <h2 className="font-bold capitalize text-xl 2xl:text-2xl">
          junior web developer
        </h2>
        <p className="text-base 2xl:text-lg 3xl:text-xl">
          I'm a junior web developer with a strong motivation to continuously
          expand my knowledge and skills in the ever-evolving world of web
          development.
        </p>
      </div>
      <ul className="capitalize hidden lg:flex flex-col gap-7 text-lg 2xl:text-xl">
        <div className="flex">
          <a
            href="#about"
            className={`group flex gap-5 items-center hover:text-white ${
              activeLink === "about" ? "" : "text-slate-400"
            }`}
          >
            <span
              className={`border h-0 transition-width group-hover:border-white group-hover:w-28 3xl:group-hover:w-32 duration-200 ${
                activeLink === "about"
                  ? "w-28 3xl:w-32"
                  : "w-12 3xl:w-16 border-slate-400"
              }`}
            ></span>
            about
          </a>
        </div>
        <div className="flex">
          <a
            href="#experience"
            className={`group flex gap-5 items-center hover:text-white ${
              activeLink === "experience" ? "" : "text-slate-400"
            }`}
          >
            <span
              className={`border h-0 transition-width group-hover:border-white group-hover:w-28 3xl:group-hover:w-32 duration-200 ${
                activeLink === "experience"
                  ? "w-28 3xl:w-32"
                  : "w-12 3xl:w-16 border-slate-400"
              }`}
            ></span>
            experience
          </a>
        </div>
        <div className="flex">
          <a
            href="#projects"
            className={`group flex gap-5 items-center hover:text-white ${
              activeLink === "projects" ? "" : "text-slate-400"
            }`}
          >
            <span
              className={`border h-0 transition-width group-hover:border-white group-hover:w-28 3xl:group-hover:w-32 duration-200 ${
                activeLink === "projects"
                  ? "w-28 3xl:w-32"
                  : "w-12 3xl:w-16 border-slate-400"
              }`}
            ></span>
            projects
          </a>
        </div>
      </ul>
      <ul className="flex gap-5 items-center">
        <a
          href="https://github.com/Oto48"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSvg fill={"#b4c8d3"} width={35} height={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/oto-chokhonelidze/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSvg fill={"#b4c8d3"} width={35} height={35} />
        </a>
        <a href="mailto:otchokhonelidze4@gmail.com">
          <EmailSvg fill={"#b4c8d3"} width={35} height={35} />
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
