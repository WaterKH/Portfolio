import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills_frameworks, skills_languages, skills_other } from "../data";

export default function About() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Most of my skills have been learning on the job or honed through doing my personal projects. I tend to focus on Full-Stack Development as that allows me to really provide a good user experience, especially with mods as this usually needs interaction as well as processing on the backend. I've also been focused on Full-Stack Development ever since starting in my professional career.
                    </p>
                </div>

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="flex-shrink mx-4 text-white text-3xl font-bold">Languages</h2>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills_languages.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                            {skill}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
                
                <br />
                <br />

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="flex-shrink mx-4 text-white text-3xl font-bold">Frameworks</h2>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills_frameworks.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                            {skill}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
                
                <br />
                <br />

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="flex-shrink mx-4 text-white text-3xl font-bold">Other</h2>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills_other.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                            {skill}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}