import React from 'react';

const ToDoHeader = () => {
  return (
    <header className="bg-indigo-700 border-b border-gray-200 fixed top-0 inset-x-0 z-100">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
    <div className="flex-shrink-0">
      <img
        className="h-12 w-auto mb-2 float-left content-start"
        src="/gaktoo-logo-transparent2.png"
        alt="Logo"
      />
    </div>

    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
      <a
        href="#"
        className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      >
        Projects
      </a>
      <a
        href="#"
        className="border-transparent text-gray-50 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      >
        Team
      </a>
    </div>

    <div className="hidden sm:flex sm:items-center sm:ml-6">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create
      </button>
      <a href="">Discord</a>
      <p>Book session & get accountability partner!</p>
    </div>
  </nav>
</header>

  );
};

export default ToDoHeader;
