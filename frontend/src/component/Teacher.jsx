import React from "react";
import Button from "./Button";
const Teacher = ({persona,setIsChatOpen,setWhichTeacher}) => {
    return (
        <div className="relative h-[75%] w-[40%] rounded-xl shadow-lg overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src={`${persona.image}`}
                alt=""
            />
            <div className="absolute inset-0 bg-transparent bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-xl h-[50%] w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col items-start justify-center hover:backdrop-blur-xs hover:bg-opacity-100 transition duration-300 ease-in-out">
                <h1 className="text-[#F97316]  text-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-5xl text-center  mx-auto font-extrabold font-serif">
                   {persona.name}
                </h1>
                <p className="text-gray-200  text-shadow-[0_1px_3px_rgba(0,0,0,0.8)]  text-sm font-mono mt-5 w-[90%] mx-auto text-center">
                {persona.description}
                </p>
            </div>
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
