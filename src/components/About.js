import React, { useEffect } from "react";
import { contacts, interests } from "../data";

export default function About() {
    const [cycleText, setCycleText] = React.useState("Sleeping");

    useEffect(() => {
        const filteredInterests = interests.filter(x => x != cycleText);
        const tempText = filteredInterests[Math.floor(Math.random() * filteredInterests.length)];

        setTimeout(() => 
        {
            setCycleText(tempText);
        }, 1500);
    }, [cycleText]);

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Jacob.
                        <br className="hidden lg:inline-block" />I love <span className="text-blue-400">{cycleText}</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I am self-driven and self-motivated, teaching myself most of what I know in terms of Game and App Development through self-started projects. I have a deep curiousity in figuring out how things work, specifically reverse engineering games and packages to see how they function and how I can alter them. My most recent programming adventures have revolved around my online prescence in a gaming community where I have decompiled and reverse engineered several Square Enix titles to allow for mods and tools to be created.

                    <br />
                    <br />

                    Outside of technical experience, I have a beautiful wife and an equally amazing step-daughter. I have an interest in skateboarding that I'm now learning more with them as they pick it up for the first time. I used to focus on tricks, so now I'm learning to ride down ramps and bowls with them. More of my interests involve games that are focused on narrative or co-operative play, movies/shows that break away from the formulaic Hollywood style, and adventures/travels to places I have never been before to experience their food, culture and people. Finally, I also love exploring different things on my YouTube channel, mostly focusing on Video Essays and Game Development updates.
                    </p>
                    <div className="justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Contact Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg">
                        See My Work
                        </a>
                        {/* <a
                        href="#comingSoon"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        What Am I Working On?
                        </a> */}
                        
                        <span className="flex">
                        {contacts.map((contact) => (
                            <a
                            href={contact.link}
                            key={contact.image}
                            target="_blank"
                            className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                    <img
                                    alt="gallery"
                                    src={contact.image}
                                    />
                                </div>
                            </a>
                        ))}
                        </span>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="waterkh - my online handle"
                    src="./waterkh.gif"
                />
                </div>
            </div>
        </section>
    );
}