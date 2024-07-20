import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import TerminalController from "./Components/Terminal/TerminalController";
import ScrollProgressBar from "./Components/Progress";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <ScrollProgressBar />
      <div className="flex h-auto justify-center overflow-hidden border-red-600 p-5 sm:border-blue-600 md:border-green-600 lg:border-yellow-500 xl:border-white">
        <BgBlack />
        <Navbar />
        <div className="mt-24 w-[1000px]">
          <section id="home">
            <HeroSection />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="work">
            <WorkSection />
          </section>
          <TerminalController />
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

function BgBlack() {
  return (
    <div className="absolute inset-0 -z-10 mx-auto h-[400px] w-full bg-[#131319] opacity-90"></div>
  );
}

export default App;
