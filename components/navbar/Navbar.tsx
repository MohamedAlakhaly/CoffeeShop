import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm shadow-md px-4 py-6">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-white">net</span>
                <span className="text-orange-500">WO</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-orange-400 transition">
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-orange-400 transition">
                About
              </Link>
              <Link href="#services" className="text-white hover:text-orange-400 transition">
                Services
              </Link>
              <Link
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#1a1a1a] mt-4 rounded-lg p-4 shadow-lg">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-white hover:text-orange-400 transition py-2 px-4 hover:bg-[#222] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-white hover:text-orange-400 transition py-2 px-4 hover:bg-[#222] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#blog"
                  className="text-white hover:text-orange-400 transition py-2 px-4 hover:bg-[#222] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
  )
}
