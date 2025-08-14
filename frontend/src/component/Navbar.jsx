import { Github, Linkedin, X } from "lucide-react";
import React from "react";

const Navbar = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/ritik-gupta-52aa982a7/",
            icon: <Linkedin size={17} />,
        },
        {
            href: "https://x.com/RitikGu24346807",
            icon: <X size={17} />,
        },
        {
            href: "https://github.com/ritik913553",
            icon: <Github size={17} />,
        },
    ];
    return (
        <div className="absolute top-0 left-0 z-50 w-full ">
            <div className=" py-5 max-w-[90rem] mx-auto flex justify-between items-center text-black">
                <h1 className="font-bold font-serif text-2xl">
                    Persona Chatbot
                </h1>
                <div className="flex gap-4">
                    {socialLinks.map((item, index) => (
                        <div
                            key={index}
                            className="relative border-2 hover:scale-110 transform duration-75 ease-in-out  border-white  rounded-full cursor-pointer text-sm p-2 h-10 w-10 flex items-center justify-center"
                        >
                            <div className="absolute -z-10 h-full w-full border-t-4 rounded-full border-orange-500 animate-spin"></div>
                            <a
                                href={item.href}
                                className="rounded-full   text-sm bg-gray-200 p-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
