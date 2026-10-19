import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";



function App() {
  return (
    <div className="min-h-screen bg-[#111313] text-white">
      <Cursor />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;