import React from "react";

const ChatLoader = () => {
    return (
        <div className="text-orange-500">
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default ChatLoader;

