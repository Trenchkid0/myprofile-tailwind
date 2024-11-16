import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";
import WorkExperience from "./section/WorkExperience";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
