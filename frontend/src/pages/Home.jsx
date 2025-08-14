import React, { useState } from "react";
import Button from "../component/Button";
import ChatUI from "../component/ChatUI";
import Teacher from "../component/Teacher";
import Navbar from "../component/Navbar";
const persona = [
    {
        name: "Hitesh Choudhary",
        image: "/hitesh.png",

        description:
            "Learn, explore, and chat with two unique teaching personalities—each ready to guide you with their own style and expertise.",
        buttonTitle: "Chat with Hitesh",
        linkedin:"https://www.linkedin.com/in/hiteshchoudhary/"
    },
    {
        name: "Piyush Garg",
        image: "/piyush.png",
        description:
            "Learn, explore, and chat with two unique teaching personalities—each ready to guide you with their own style and expertise.",
        buttonTitle: "Chat with Piyush",
        linkedin:"https://www.linkedin.com/in/piyushgarg195/"
    },
];

const Home = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [whichTeacher, setWhichTeacher] = useState("");
    return (
        <div>
            {!isChatOpen ? (
                <div className="relative bg-gray-200  overflow-x-hidden p-5 ">
                    <Navbar />
                    <div className="relative flex  items-center justify-center h-screen w-screen">
                        <div className="relative h-[75%] w-[70%] rounded-xl shadow-xl overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-transparent bg-opacity-20 backdrop-blur-md border border-[#F97316] border-opacity-20 rounded-xl h-[50%] w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col items-start justify-center">
                                <h1 className="text-[#F97316]  text-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-7xl text-center  mx-auto font-extrabold font-serif">
                                    Meet Your AI Teachers
                                </h1>
                                <p className="text-gray-200  text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]  text-lg font-mono mt-5 w-[70%] mx-auto text-center">
                                    Learn, explore, and chat with two unique
                                    teaching personalities—each ready to guide
                                    you with their own style and expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" h-screen  w-full px-10 ">
                        <h1 className="text-[#F97316] text-center text-7xl font-bold font-serif">
                            Chat with My Two AI Personas
                        </h1>
                        <div className="flex justify-center items-center gap-x-20 h-[80%] w-screen">
                            {persona.map((persona, index) => (
                                <Teacher persona={persona} key={index} setIsChatOpen={setIsChatOpen} setWhichTeacher={setWhichTeacher} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <ChatUI setIsChatOpen={setIsChatOpen} persona={persona.find((p) => p.name.toLowerCase() === whichTeacher)} />
            )}
        </div>
    );
};

export default Home;

