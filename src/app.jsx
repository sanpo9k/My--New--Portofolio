import React from "react";
import Navbar from "./components/Navbar";
import PixelTransition from "./components/PixelTransition";
import SkillBadge from "./components/SkillBadge";
import ExperiencePage from "./Pages/ExperiencePage";
import DotGrid from "./components/DotGrid";
import DecryptedText from "./components/DecryptedText";
import ProjectPage from "./Pages/ProjectPage";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60">
        {/* Hero Section */}
        <div className="flex font-bold gap-10 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 pt-10 pb-10">
          <PixelTransition
            firstContent={<img src="./src/assets/Dither--Pas--Foto.png" alt="Rio Sidqi Putra Budi" style={{ width: "100%", height: "100%" }} />}
            secondContent={<img src="./src/assets/Pas--foto--utama.png" alt="Rio Sidqi Putra Budi" style={{ width: "100%", height: "100%" }} />}
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <div className="text-white text-4xl font-bold">
          <DecryptedText 
          text="Rio Sidqi's" 
          animateOn="view" 
          revealDirection="start"
          sequential="true"
          speed={75} 
          />
            <br />
            <DecryptedText 
          text="Portfolio" 
          animateOn="view" 
          revealDirection="start"
          sequential="true"
          speed={100} 
          />

            <hr />

            <p className="text-sm pt-2">
              A Novice
              <br />
              Frontend Engineer
            </p>

            <div className="text-white text-sm font-bold pt-4">
              <p className="pt-4">
                <span className="text-red-500">&#x2022; </span>Location: Jakarta, Indonesia
              </p>
              <p className="pt-4">
                <span className="text-red-500">&#x2022; </span>Email:{" "}
                <a className="hover:text-red-500" href="mailto:riosidqi21@gmail.com">
                  riosidqi21@gmail.com
                </a>
              </p>
              <p className="pt-4">
                <span className="text-red-500">&#x2022; </span>Linkedin:{" "}
                <a className="hover:text-red-500" href="https://www.linkedin.com/in/rio-sidqi">
                  www.linkedin.com/in/rio-sidqi
                </a>
              </p>
              <p className="pt-4">
                <span className="text-red-500">&#x2022; </span>Github:{" "}
                <a className="hover:text-red-500" href="https://github.com/riosidqi">
                  github.com/riosidqi
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <container className="text-white text-lg font-bold max-w-2xl">
          <div className="font-bold text-white flex pt-4">
            <h1 className="font-bold text-2xl p-2 outline-1 outline-white rounded-lg">
              <span className="text-red-500">&#x2022; </span>About Me.
            </h1>
          </div>
          <div className="pt-3">
            <p>
              I am a sixth-semester undergraduate student at Binus University, majoring in Information Systems. I have acquired a comprehensive understanding of the field through both theoretical and technical learning. My academic journey
              has equipped me with a solid foundation in information systems. Outside of college, I am passionate about learning new things, including exploring other things, such as following technology growth and improvement. I am eager
              to gain practical experience and further develop my skills in the professional world.
            </p>
          </div>

          <div className="pt-4">
            <SkillBadge />
          </div>
        </container>

        {/* Experience */}
        <container className="text-white text-lg font-bold max-w-2xl mx-auto mb-10 pt-4">
          <div className="font-bold text-white flex pt-10">
            <h1 className="font-bold text-2xl p-2 outline-1 outline-white rounded-lg">
              <span className="text-red-500">&#x2022; </span>Experience.
            </h1>
          </div>
          <div>
            <ExperiencePage />
          </div>
        </container>
        
        {/* Project */}
        <container className="text-white text-lg font-bold max-w-2xl mx-auto mb-10 pt-4">
          <div className="font-bold text-white flex pt-10">
            <h1 className="font-bold text-2xl p-2 outline-1 outline-white rounded-lg">
              <span className="text-red-500">&#x2022; </span>Project.
            </h1>
          </div>
          <div>
            <ProjectPage />
          </div>
        </container>
      </div>
    </div>
  );
}
