import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send, Settings, Linkedin } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { sendMessage } from "../api";
import ChatLoader from "./ChatLoader";

export default function ChatUI({ setIsChatOpen, persona }) {
    console.log("ChatUI rendered with persona:", persona);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: `${persona.description}`,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        },
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!message.trim() || loading) return;
        setLoading(true);

        const newMessage = {
            role: "user",
            content: message,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages((prev) => [...prev, newMessage]);
        setMessage("");

        console.log("Sending message:", messages);
        try {
            const res = await sendMessage({
                persona: persona.name,
                messages: [...messages, newMessage],
            });
            const data = res.data;
            console.log("Received reply:", data.reply);

            const aiMessage = {
                role: "assistant",
                content: data.reply,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setLoading(false);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "error",
                    content: "Sorry, something went wrong.",
                    timestamp: "",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="bg-gray-200 h-screen ">
            {/* Header */}
            <div className="flex items-center text-black justify-between px-4 py-3 max-w-7xl mx-auto bg-gray-200">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setIsChatOpen(false)}
                        className="cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-orange-500 overflow-hidden">
                            <img
                                className="w-full h-full object-cover scale-110 "
                                src={persona.image}
                                alt=""
                            />
                        </div>
                        <span className="font-medium">{persona.name}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-3 font-medium">
                    <p className="text-sm ">Meet your teacher</p>
                    <a
                        href={persona.linkedin}
                        target="_blank"
                        className="p-2 rounded-full border-2 border-white bg-orange-500 cursor-pointer text-white"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

            <hr className="bg-gray-500" />

            {/* Chat Messages */}
            <div className="flex flex-col xl:p-0 p-5 max-h-[80%] max-w-5xl mx-auto text-white mt-6 space-y-4">
                <div
                    className="scroll-class flex-1 bg-gray-300 h-auto max-h-[70%] rounded-xl overflow-y-auto px-4 py-6 space-y-4"
                    style={{ minHeight: "150px" }}
                >
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={
                                msg.role === "user"
                                    ? "flex-row-reverse flex items-start gap-x-2"
                                    : "flex justify-start gap-x-2"
                            }
                        >
                            <div className="flex items-start space-x-2">
                                {msg.role === "assistant" && (
                                    <img
                                        src={persona.image}
                                        alt=""
                                        className="w-8 h-8 rounded-full object-cover border-2 border-orange-500"
                                    />
                                )}
                                {msg.role === "user" && (
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAQlBMVEX6+vqPj4////+Li4vx8fGioqKIiIiAgICnp6fs7Oz39/eDg4P09PTHx8fLy8vb29u0tLTT09Pl5eWYmJitra2+vr74UUVkAAAD+0lEQVR4nO2c3XKkIBBGtRsQ/ENE3/9VF8dJMpuNoxCFdotzkVQlNyekwQa+sSgymUwmk8lkMplM5j8DHqS28Mc5MzWOehxH1RZ3+gsAWt0NE7e2LK3l09zp+ib+AOPMLQrE8gEKgZbP6gb6Tp3jh/cX7gdyJG8/8uq7+AeVVKnt3gFsFv8M+svwY9eSHX3QXGyrL4iJau2AKXfcnb3VJO2d+5uS+SydkqI99LvD/sSQswdz1B2R2tjDeFB9sbeKln1tD9T7B4KTkofhaNGs9jMhe9A+6guElvuWexTNAsrUyp9A7+nuILPiMOktL4Y6tfUKaK/Z+mRMrf3Eb6l5Dn2X2nql9a94hyVRN2A2tx/vqEisljCFlDyRBxWEqLulnkaPEFQ1bugJyIMKlK8IzFgwTZh8Q2DGHt9BfZcn0CHAHCpPYDsYLC/uLE9i5G9d87debcZA+Yqlly/qwIdUQ8C9gMCatyTkfXffK0S6yrAZS6OfL1hY3RDoyxb8Dw+W44PU1ivHD4hf5XVq7RVQ/lMWJUut/QQ676FHAo3Niv/Qo2xTS3/if1hJZuAX/IZeTJTcgXk1OILIGv/E69iMyMP1C48Vh8L+7xv1fLDskcj58F+0xzazoqNV8E/q7kDdVya15gauOd4pHSGozdUvlkft27yNpJu3cfZFb7f0EbkhnjMDNnPxw8wVyDsKxwXvAVBmKpvXuBaKphwMsbTEBgCtMoNtqqpxuK/Wmde3UP+kVlobo0dVL3PhbgDcNUycyWRIAUXLTqBNsI4C0/Mg+a+RQ6cjd2sARrr+Fk/ANUIy6u0UtMOR3PBRRDnHqx1ge1Fzb/14kbNaBt6hbdPEOvGG7nT3eFfKgTchO2AU9+D7+vc0fYyhB3uFe1nGiG35JOW9wAh3JWAuko+R7IbuKvkIz9nr5CMsljcf+RO7mujyAUl/OvK3Xm28P9xylBjngeoq+Sj3yhe5R0k+QUhCZR8cosj3F7TzZVnF2cj63XYfpYmhvvTEF9QNyjg7qUvqJlLVFEV7/nYEebTjg9Ds8zYi3rkTC8uBboNTvOTT+f1N1AO/4dShxzmiegGn9ggiciYaivPmLJaxT+hhPOucOMWbBECf86BFniLFAqM9oXQET/ORZGDy1y1aNSRL4MC8F216Dyb9rBQoGT5vsZzSJnCgMPzdm5C2ESjTB5+A9fKnaNO+OoW8GQDTU+PT4mMjBk0os8W6sjo2ebGpbE8nPb8AAG3PF7ftbOL6G2lIvgoPoNbzwLl9vPJOvF5yL3PaPq7qCb+E0P0DaqVNPw/DNMlHNEHKaRrmuTejKm6Q2VpzZS1TTDnct7a4Y9bshsqZTCaTyWQymUwms88fqNsyIPDaIpkAAAAASUVORK5CYII="
                                        alt=""
                                        className="w-8 h-8 rounded-full object-cover border-2 border-orange-500"
                                    />
                                )}
                            </div>

                            <div className="flex flex-col">
                                <div
                                    className={`max-w-md px-4 py-2 rounded-lg ${
                                        msg.role === "user"
                                            ? "bg-gray-200 text-black"
                                            : msg.role === "assistant"
                                            ? "bg-gray-200 text-black "
                                            : "text-gray-400"
                                    }`}
                                >
                                    <p
                                        className="ai-message text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: msg.content,
                                        }}
                                    />
                                </div>
                                {msg.timestamp && (
                                    <span className="block text-xs text-gray-500 mt-1">
                                        {msg.timestamp}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    {loading && <ChatLoader />}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Box */}
                <div className="py-4 mt-5">
                    <div className="flex items-top justify-center space-x-2">
                        <div className="flex-1 relative">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={
                                    loading
                                        ? "Waiting for reply..."
                                        : "Type your message..."
                                }
                                disabled={loading}
                                className={`w-full bg-gray-300 text-black placeholder-gray-500 rounded-lg px-4 py-3 pr-12 resize-none outline-2 outline-orange-500 ${
                                    loading
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                rows="1"
                                style={{
                                    minHeight: "48px",
                                    maxHeight: "120px",
                                }}
                            />
                            {/* <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-gray-600 rounded"
                                disabled={loading}
                            >
                                <Settings size={16} className="text-gray-400" />
                            </button> */}
                        </div>
                        <button
                            onClick={handleSendMessage}
                            disabled={loading}
                            className={`bg-orange-500 h-full border-2 border-white text-white px-3 py-4 rounded-lg transition-colors ${
                                loading
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-orange-600"
                            }`}
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
