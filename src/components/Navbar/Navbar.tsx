import { useState } from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition ${
                index === 0
                  ? "text-pink-500"
                  : "text-slate-600 hover:text-pink-500"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium ${
                  index === 0
                    ? "text-pink-500"
                    : "text-slate-600"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;