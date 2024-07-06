import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
// import ComingSoon from "./components/ComingSoon";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            {/* <ComingSoon /> */}
            <Skills />
            <Contact />

            <a target="_blank" href="https://icons8.com/icon/19318/youtube">YouTube</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            <a target="_blank" href="https://icons8.com/icon/13930/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            <a target="_blank" href="https://icons8.com/icon/63777/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            <a target="_blank" href="https://icons8.com/icon/ClbD5JTFM7FA/twitterx">TwitterX</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </main>
    );
}
