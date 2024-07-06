import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { kh_projects, other_projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Personal Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Personal Projects are how I enjoy spending my time. I use my projects to relax, explore new ideas or learn something new. I personally learn the best through directly working with what I'm trying to learn. Whenever I have found an interest in a technology or idea, I gravitate towards creating a project from it. It's a safe space for my to experiment, explore and create new things.
                    </p>
                </div>

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="flex-shrink mx-4 text-white text-3xl font-bold">Kingdom Hearts Projects</h2>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full mb-20">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        The Kingdom Hearts Community is something I'm heavily involved in, in many different ways. One major way is my involvement in the modding community. I've created several projects, that are viewable below with more information, ranging from mods to tools to resource management. I learned many of the skills I have today by exploring them through creating these projects. All of these are still being maintained by myself and others, as these are also open-source.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {kh_projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        target="_blank"
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>

                <br />
                <br />

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="flex-shrink mx-4 text-white text-3xl font-bold">Other Projects</h2>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full mb-20">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I do also participate in other communities, including Call of Duty, Alternate Reality Games and Game Development groups. These projects are much older than the ones above and are generally either waiting for new opportunities to show up or new game releases. I have not yet found a Game Development group in New Zealand, but I hope to start looking to explore Game Development again with a like-minded group of people.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {other_projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        target="_blank"
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}