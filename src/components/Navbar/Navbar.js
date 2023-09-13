const Navbar = () => {
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
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
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
