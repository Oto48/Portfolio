import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      // if (
      //   projectsSection &&
      //   window.scrollY >= projectsSection.offsetTop - 130
      // ) {
      //   setActiveLink("projects");
      // } else
      if (
        experienceSection &&
        window.scrollY >= experienceSection.offsetTop - 130
      ) {
        setActiveLink("experience");
      } else if (
        aboutSection &&
        window.scrollY >= aboutSection.offsetTop - 130
      ) {
        setActiveLink("about");
        console.log(
          "this is about ===>>>" + aboutSection.offsetTop,
          "this is experience ===>>>" + experienceSection.offsetTop
          // "this is project ===>>>" + projectsSection.offsetTop
        );
        console.log("this is window scroll ===>>>" + window.scrollY);
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
    <nav className="flex flex-col h-screen justify-between py-32 w-6/12 sticky top-0 font-sans">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold capitalize">oto tchokhonelidze</h1>
        <h2 className="text-2xl font-bold capitalize">junior web developer</h2>
        <p>
          I'm a junior web developer with a strong motivation to continuously
          expand my knowledge and skills in the ever-evolving world of web
          development.
        </p>
      </div>
      <ul className="flex flex-col gap-5 capitalize">
        <a href="#about" className="flex gap-5 items-center">
          <span
            className={`border h-0 border-white block transition-width duration-200 ${
              activeLink === "about" ? "active w-32" : "w-16"
            }`}
          ></span>
          about
        </a>
        <a href="#experience" className="flex gap-5 items-center">
          <span
            className={`border h-0 border-white block transition-width duration-200 ${
              activeLink === "experience" ? "active w-32" : "w-16"
            }`}
          ></span>
          experience
        </a>
        <a href="#projects" className="flex gap-5 items-center">
          <span
            className={`border h-0 border-white block transition-width duration-200 ${
              activeLink === "projects" ? "active w-32" : "w-16"
            }`}
          ></span>
          projects
        </a>
      </ul>
      <ul className="flex gap-5">
        <p>github</p>
        <p>linkedin</p>
        <p>email</p>
      </ul>
    </nav>
  );
};

export default Navbar;
