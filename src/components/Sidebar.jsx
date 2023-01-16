import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="relative bg-gray-200">
        <div className="absolute top-0 right-0 z-10">
          <button className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-6">
          <h3 className="text-lg font-medium">Sidebar</h3>
          <nav className="mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
