"use client";

import { useState } from "react";

export default function ErrorPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex flex-col items-center justify-center font-sans`}
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        {/* Eyes */}
        <div className="flex space-x-2">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
          </div>
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-medium text-yellow-400">
            This page is under construction
          </h1>
          <p className="text-xl font-light mt-2">404 error</p>
        </div>

        {/* Back to Home Button */}
        <a
          href="#"
          className="px-6 py-3 border border-yellow-400 rounded-lg shadow-md text-lg font-light transition-all hover:bg-yellow-400 hover:text-white"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
