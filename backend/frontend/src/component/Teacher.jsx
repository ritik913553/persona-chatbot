import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Teacher = ({ persona, setIsChatOpen, setWhichTeacher }) => {
    return (
        <div className="relative h-96 w-full sm:h-[75%] sm:w-[80%] lg:w-[40%] rounded-xl shadow-lg overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src={`${persona.image}`}
                alt={persona.name}
            />

            {/* Animated overlay */}
            <motion.div
                className="absolute inset-0 bg-transparent bg-opacity-20 backdrop-blur-xs sm:backdrop-blur-md border border-white border-opacity-20 rounded-xl sm:h-[50%] sm:w-[60%] w-[80%] h-[50%] sm:top-2/3 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col items-start justify-center hover:backdrop-blur-xs hover:bg-opacity-100 transition duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true, amount: 0.3 }} // animate once when 30% is visible
                transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }} 
            >
                <h1 className="text-[#F97316] text-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-2xl 2xl:text-5xl text-center mx-auto font-extrabold font-serif">
                    {persona.name}
                </h1>
                <p className="text-gray-200 text-shadow-[0_1px_3px_rgba(0,0,0,0.8)] text-xs 2xl:text-sm font-mono mt-5 sm:w-[90%] mx-auto text-center">
                    {persona.description}
                </p>
            </motion.div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <Button
                    onClick={() => {
                        setIsChatOpen(true);
                        setWhichTeacher(persona.name.toLowerCase());
                    }}
                    title={persona.buttonTitle}
                />
            </div>
        </div>
    );
};

export default Teacher;
