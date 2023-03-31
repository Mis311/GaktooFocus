import React from "react";
import Link from "next/link";
const ToDoHeader = () => {
  return (
    <header className="bg-indigo-700 border-b border-gray-200 fixed top-0 inset-x-0 z-100">
      <nav className="mx-auto mx-8 sm:mx-8 lg:mx-12 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
        <Link href="ToDoForm">
          <img
            className="h-12 w-auto mb-2 flex"
            src="/gaktoo-logo-transparent2.png"
            alt="Logo"
          />
          </Link>
        </div>

        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          <Link
            href="/ToDoForm"
            className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Projects
          </Link>
          
          <Link href="/team"
            className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Team
          </Link>
        </div>

        <div className="hidden sm:flex sm:items-center sm:ml-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Focus Session
          </button>
          <Link href="#">
            <img
              src="/discord-icon.png"
              className="h-16 w-auto px-4 py-2"
            ></img>{" "}
          </Link>
          <p className="">
            Book session & get accountability partner on Discord!
          </p>
        </div>
        <div className="flex-shrink-0 justify-end">
          <Link href="/UserProfile">
            <img
              className="h-12 w-auto mb-2 rounded-full shadow bg-white"
              src="/profile_default.png"
              alt="Profile"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default ToDoHeader;
