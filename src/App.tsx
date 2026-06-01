import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen gradient-mesh">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <ProjectDetail />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
