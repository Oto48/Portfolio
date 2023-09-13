import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links with a "href" attribute starting with "#"
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex justify-between px-40 text-xl gap-16">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
