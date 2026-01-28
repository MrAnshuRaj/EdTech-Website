import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/edunitilogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold text-black"
        >
          <img
            src={logo}
            alt="EduNiti Logo"
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
          Eduniti
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/courses" className="hover:text-gray-600">
            Courses
          </Link>
          <Link to="/tests" className="hover:text-gray-600">
            Tests
          </Link>
          <Link to="/store" className="hover:text-gray-600">
            Store
          </Link>
          <Link to="/about" className="hover:text-gray-600">
            About
          </Link>

          <Link
            to="/auth?mode=login"
            className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/auth?mode=signup"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="block w-full text-center py-2 rounded hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/courses"
            onClick={closeMenu}
            className="block w-full text-center py-2 rounded hover:bg-gray-100"
          >
            Courses
          </Link>

          <Link
            to="/tests"
            onClick={closeMenu}
            className="block w-full text-center py-2 rounded hover:bg-gray-100"
          >
            Tests
          </Link>

          <Link
            to="/store"
            onClick={closeMenu}
            className="block w-full text-center py-2 rounded hover:bg-gray-100"
          >
            Store
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="block w-full text-center py-2 rounded hover:bg-gray-100"
          >
            About
          </Link>

          <div className="flex flex-col gap-3 pt-3">
            <Link
              to="/auth?mode=login"
              onClick={closeMenu}
              className="w-full text-center border border-black text-black py-2 rounded hover:bg-black hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/auth?mode=signup"
              onClick={closeMenu}
              className="w-full text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
