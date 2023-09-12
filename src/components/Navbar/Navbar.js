const Navbar = () => {
  return (
    <nav className="flex flex-col h-screen justify-between py-40 w-6/12 sticky top-0">
      <div>
        <h1>Oto Tchokhonelidze</h1>
        <h2>Junior Front-End Developer</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <ul>
        <p>about</p>
        <p>experience</p>
        <p>projects</p>
      </ul>
      <ul>
        <p>github</p>
        <p>linkedin</p>
        <p>email</p>
      </ul>
    </nav>
  );
};

export default Navbar;
