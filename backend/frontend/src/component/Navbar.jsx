import { Github, Linkedin, X } from "lucide-react";
import React from "react";

const Navbar = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/ritik-gupta-52aa982a7/",
            icon: <Linkedin size={16} />,
        },
        {
            href: "https://x.com/RitikGu24346807",
            icon: <X size={16} />,
        },
        {
            href: "https://github.com/ritik913553",
            icon: <Github size={16} />,
        },
    ];

    return (
        <div className="absolute top-0 left-0 z-50 w-full backdrop-blur-sm border-b-2">
            <div className="py-3 px-4 sm:px-6 md:px-10 max-w-[90rem] mx-auto flex flex-col sm:flex-row justify-between items-center text-black gap-3 sm:gap-0">
                {/* Title */}
                <h1 className="font-bold font-serif text-xl sm:text-2xl text-center sm:text-left">
                    Persona Chatbot
                </h1>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((item, index) => (
                        <div
                            key={index}
                            className="relative border hover:scale-110 transform duration-75 ease-in-out border-white rounded-full cursor-pointer text-sm p-1.5 sm:p-2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center"
                        >
                            <div className="absolute -z-10 h-full w-full border-t-4 rounded-full border-orange-600 animate-spin"></div>
                            <a
                                href={item.href}
                                className="rounded-full text-sm bg-gray-200 p-1.5 sm:p-2"
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
