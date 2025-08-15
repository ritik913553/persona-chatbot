import React, { useState } from "react";
import Button from "../component/Button";
import ChatUI from "../component/ChatUI";
import Teacher from "../component/Teacher";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const persona = [
    {
        name: "Hitesh Choudhary",
        image: "/hitesh.png",

        description:
            "Hanji to kaise ho aap, batein krni hai mere se ,ya motivation chaiyea ya phir khi fs rhe ho, aa jaw chat mein btata hun!",
        buttonTitle: "Chat with Hitesh",
        linkedin: "https://www.linkedin.com/in/hiteshchoudhary/",
    },
    {
        name: "Piyush Garg",
        image: "/piyush.png",
        description:
            "Alrignt,Hey there Welcome back to another exiciting chat , to aa jaw button pe click kr ke baten krte hai !",
        buttonTitle: "Chat with Piyush",
        linkedin: "https://www.linkedin.com/in/piyushgarg195/",
    },
];

const Home = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [whichTeacher, setWhichTeacher] = useState("");
    return (
        <div>
            {!isChatOpen ? (
                <div className="relative bg-gray-200  overflow-x-hidden  ">
                    <Navbar />
                    <motion.div className="relative   flex  items-center justify-center h-[100vh] mt-30 xl:mt-0 xl:h-screen w-screen">
                        <motion.div
                           
                            animate={{ height: "90vh", width: "100%" }}
                            transition={{ duration: 4, ease: "easeInOut" }}
                            className="relative rounded-xl shadow-xl overflow-hidden xl:h-[75%] xl:w-[70%]"
                            // className="relative h-[90%] w-full xl:h-[75%] xl:w-[70%] rounded-xl shadow-xl overflow-hidden"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src="https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg"
                                alt=""
                            />
                            <motion.div
                                className="absolute inset-0 bg-transparent bg-opacity-20 backdrop-blur-xl border border-[#F97316] border-opacity-20 rounded-xl w-[80%] sm:h-[40vh] sm:w-[50vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col items-start justify-center hover:backdrop-blur-xs transition duration-300 ease-in-out"
                                initial={{ opacity: 0.,}} // start invisible and scaled down
                                animate={{ opacity: 1, scale: 1 }} // animate to visible and full size
                                transition={{
                                    duration: 0.8,
                                    delay: 3,
                                    ease: "easeIn",
                                }} // delay for nice effect
                            >
                                <h1 className="text-[#F97316] text-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-3xl sm:text-5xl 2xl:text-7xl text-center mx-auto font-extrabold font-serif">
                                    Meet Your AI Teachers
                                </h1>
                                <p className="text-gray-200 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)] 2xl:text-lg sm:text-sm text-xs font-mono mt-5 xl:w-[70%] mx-auto text-center">
                                    Learn, explore, and chat with two unique
                                    teaching personalities—each ready to guide
                                    you with their own style and expertise.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className="sm:h-auto  mb-15 ">
                        <h1 className="text-[#F97316] text-center text-3xl sm:text-5xl 2xl:text-7xl font-bold font-serif mt-10">
                            Chat with Two AI Personas
                        </h1>
                        <div className="flex lg:flex-row flex-col gap-y-5 mt-10 justify-center items-center lg:gap-x-20 h-[100%] sm:h-[80%] p-5 sm:p-0 ">
                            {persona.map((persona, index) => (
                                <Teacher
                                    persona={persona}
                                    key={index}
                                    setIsChatOpen={setIsChatOpen}
                                    setWhichTeacher={setWhichTeacher}
                                />
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <ChatUI
                    setIsChatOpen={setIsChatOpen}
                    persona={persona.find(
                        (p) => p.name.toLowerCase() === whichTeacher
                    )}
                />
            )}
        </div>
    );
};

export default Home;
