import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-600 selection:text-black">
      
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
