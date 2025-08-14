import React from 'react';

const AnimatedButton = ({ title,onClick }) => {
  return (
    <div className='p-1  flex justify-center items-center bg-transparent backdrop-blur-md rounded-full  border-l-2  border-yellow-500 box-content'>
        <button onClick={onClick} className="px-3 cursor-pointer py-3 bg-[#F97316] text-black font-bold text-xs rounded-full shadow-lg  transition duration-300 ease-in-out transform hover:scale-105">
            {title}
        </button>
    </div>
  );
};

export default AnimatedButton;
