import { useState } from "react";
import logo from "../assets/olive.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-amber-400">
      <div className="container mx-auto flex justify-end items-center py-4 px-4 md:px-8">
        {/* logo */}
        <div className="flex-1">
          <a href="">
            <img src={logo} alt="My logo" className="h-12" />
          </a>
        </div>

        {/* icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-50 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* navigation menu */}
        <nav
          className={`flex space-x-4 justify-between ${isOpen ? "block" : "hidden"} `}
        >
          <ul className=" hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center">
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                Home
              </a>
            </li>
            
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                Product
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-amber-800">
          <ul className="flex flex-col space-y-4 p-4 text-center">
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-slate-50 hover:text-slate-100">
                Product
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
