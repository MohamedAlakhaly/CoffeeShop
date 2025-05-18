"use client"
import Link from "next/link"
import {Download} from "lucide-react"
import Home from "@/sections/Home"
import Image from "next/image"
import AboutUs from "@/sections/About"
import Services from "@/sections/Services"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
export default function Main() {

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-28">
      {/* Navigation */}
      <Navbar/>      

      {/* Hero Section */}
      <Home/>


      {/* Rest of the content remains the same */}

      {/* About Section */}
      <AboutUs/>

      {/* Services Section */}
      <Services/>

      {/* App Download Section */}
      <section className="py-16 bg-[#1a1a1a] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl mb-4 text-orange-400">JOIN OUR COFFEE COMMUNITY</h3>
          <h2 className="text-3xl font-bold mb-8">Download My App</h2>
          <Link
            href="#download"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download
          </Link>
        </div>
        {/* Orange blob decorations */}
        <div className="absolute top-0 right-10 w-32 h-32 bg-orange-500/30 rounded-full"></div>
        <div className="absolute bottom-0 left-10 w-24 h-24 bg-orange-400/30 rounded-full"></div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
