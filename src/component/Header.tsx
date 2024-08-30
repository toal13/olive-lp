import { useState } from "react";
import logo from "../assets/olive.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-amber-400">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* ロゴ */}
        <div>
          <a href="">
            <img src={logo} alt="My logo" className="h-12" />
          </a>
        </div>

        {/* バーガーメニューアイコン */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-50 focus:outline-none"
          >
            {/* ハンバーガーアイコン */}
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

        {/* ナビゲーションメニュー */}
        <nav
          className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center">
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
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav className="md:hidden bg-amber-800">
          <ul className="flex flex-col space-y-4 p-4">
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
