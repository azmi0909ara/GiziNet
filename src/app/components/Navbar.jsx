"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">Gizinet</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-gray-700 gap-6 items-center">
          <li>
            <a href="/" className="hover:text-red-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-red-500 transition">
              Features
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-red-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg font-medium border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-red-600 to-orange-500 text-white shadow hover:opacity-90 transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 p-6 text-gray-700">
          <li>
            <a
              href="/"
              className="hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-3 p-6 border-t">
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg font-medium border border-red-500 text-red-600 text-center hover:bg-red-50 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-red-600 to-orange-500 text-white shadow text-center hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
