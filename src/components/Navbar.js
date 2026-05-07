"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-barber-black-lighter border-b border-barber-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-barber-gold hover:text-barber-gold-dark transition"
          >
            Fade Flow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-barber-gray hover:text-barber-gold transition"
            >
              Home
            </Link>
            <Link
              href="/booking"
              className="text-barber-gray hover:text-barber-gold transition"
            >
              Book Now
            </Link>
            <Link
              href="/appointments"
              className="text-barber-gray hover:text-barber-gold transition"
            >
              My Appointments
            </Link>
            <Link
              href="/auth"
              className="px-4 py-2 bg-barber-gold text-barber-black rounded hover:bg-barber-gold-dark transition font-semibold"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-barber-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-barber-gold pt-4">
            <Link
              href="/"
              className="block py-2 text-barber-gray hover:text-barber-gold transition"
            >
              Home
            </Link>
            <Link
              href="/booking"
              className="block py-2 text-barber-gray hover:text-barber-gold transition"
            >
              Book Now
            </Link>
            <Link
              href="/appointments"
              className="block py-2 text-barber-gray hover:text-barber-gold transition"
            >
              My Appointments
            </Link>
            <Link
              href="/auth"
              className="block mt-4 px-4 py-2 bg-barber-gold text-barber-black rounded hover:bg-barber-gold-dark transition font-semibold text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
