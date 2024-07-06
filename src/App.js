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
        </main>
    );
}
