import DecryptedText from "../components/DecryptedText";
import BlurText from "../components/BlurText";

import GradientCard from "../components/GradientCard";
import SocialButtonGroup from "../components/SocialButtonGroup";
import { Download } from "lucide-react";

export function AboutMe() {
  const aboutMeText = `I am a final-year Software Engineering student at FPT University with a passion for building complete, end-to-end applications. My practical experience is rooted in developing scalable backend systems, where I've applied my knowledge of Object-Oriented Design and Java-based frameworks to build secure RESTful APIs and manage complex data. I have hands-on experience with various database technologies and implementing modern authentication mechanisms. My goal is to bridge the gap between backend infrastructure and user-centric front-end development. I am seeking a challenging internship where I can leverage my strong Java and Data Structures foundation to grow as a versatile fullstack developer and
     `;

  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col justify-center items-center py-24"
    >
      {/* 1. TIÊU ĐỀ  */}
      <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
        <BlurText
          text="ABOUT MYSELF"
          delay={500}
          animateBy="words"
          direction="top"
          className="text-6xl mb-8"
        />
      </h1>

      {/* 2. DIV  */}
      <div
        className="
        flex flex-col lg:flex-row 
        items-center lg:items-start 
        gap-12 mt-12 px-6          
        max-w-7xl                   
      "
      >
        {/* MỤC 1:  */}
        <GradientCard className="min-w-[300px] lg:min-w-[350px]">
          <h3 className="text-2xl font-bold mb-4 text-white">Personal Info</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <strong>Name:</strong> Lê Duy Khang
            </li>
            <li>
              <strong>Born:</strong> 2004
            </li>
            <li>
              <strong>School:</strong> FPT University
            </li>
            <li>
              <strong>Major:</strong> Software Engineering
            </li>
            <li>
              <strong>Status:</strong> Final Year Student
            </li>
            <li>
              <strong>CV Đính kèm:</strong>
              <a
                href="/LeDuyKhang_CV.pdf"
                download="LeDuyKhang_CV.pdf"
                className="
              flex items-center justify-center gap-2
              w-full mt-6 py-3 px-4
              bg-indigo-600 hover:bg-indigo-700
              text-white font-semibold rounded-lg
              transition-all duration-300
              shadow-lg hover:shadow-indigo-500/50
            "
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </GradientCard>

        {/* CARD ABOUT ME  */}
        <GradientCard className="max-w-2xl">
          <DecryptedText
            speed={200}
            maxIterations={20}
            text={aboutMeText}
            animateOn="view"
            revealDirection="start"
          />
        </GradientCard>

        {/*  SOCIAL BUTTONS */}
        <div className="lg:pt-2">
          <SocialButtonGroup />
        </div>
      </div>
    </section>
  );
}
