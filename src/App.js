import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex justify-between">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
