import { Link } from "react-router-dom";
import logo from "../assets/edunitilogo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t ">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-5">
        {/* ===== BRAND SECTION ===== */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="EduNiti" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">EduNiti</span>
          </div>

          <p className="text-gray-600 text-sm max-w-md">
            We help students achieve their dreams with expert educators, live
            classes, recorded sessions, doubt support and smart test series.
          </p>

          {/* App Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Google Play
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              App Store
            </button>
          </div>

          {/* Social */}
          <p className="mt-6 font-semibold">Let’s get social:</p>
          <div className="flex gap-3 mt-3 text-xl">
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
            <span>💼</span>
            <span>🐦</span>
          </div>
        </div>

        {/* ===== COMPANY ===== */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Updates</Link>
            </li>
            <li>
              <Link to="#">Account Deletion</Link>
            </li>
          </ul>
        </div>

        {/* ===== CENTRES ===== */}
        <div>
          <h4 className="font-semibold mb-4">Our Centres</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Delhi</li>
            <li>Patna</li>
            <li>Kota</li>
            <li>Noida</li>
            <li>Dhanbad</li>
            <li>Varanasi</li>
          </ul>
        </div>

        {/* ===== EXAMS ===== */}
        <div>
          <h4 className="font-semibold mb-4">Popular Exams</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>GATE</li>
            <li>UPSC</li>
            <li>Banking</li>
            <li>School Prep</li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EduNiti. All rights reserved.
      </div>
    </footer>
  );
}
