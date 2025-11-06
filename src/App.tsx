import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import DarkVeil from "./components/DarkVeil";
import { AboutMe } from "./sections/AboutMe";
import { SkillsTech } from "./sections/SkillsTech";
import { Experience } from "./sections/Experience";
import { Project } from "./sections/Project";
import { CourseworkCertifications } from "./sections/CourseworkCertifications";
function App() {
  return (
    <div className="min-h-screen text-white">
      <DarkVeil
        className="fixed top-0 left-0 -z-10"
        noiseIntensity={0.05}
        scanlineIntensity={0.02}
        warpAmount={0.1}
        speed={0.3}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />

        <SkillsTech />

        <Experience />

        <Project />

        <CourseworkCertifications />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
