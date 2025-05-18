import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-orange-400 uppercase tracking-wider mb-2">CAFEE</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Homemade <br />
                Coffee with <br />
                Amazing Vibes
              </h1>
              <p className="text-gray-300 mb-8 max-w-lg">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me to add your own content and make changes to the font.
              </p>
              <Link
                href="#explore"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-block"
              >
                Explore
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <Image
                  src="/home_img.png"
                  alt="Coffee splash"
                  width={600}
                  height={500}
                  className="rounded-lg z-10 relative"
                  priority
                />
                {/* Coffee splash effect */}
                <div className="absolute -top-10 -right-10 -left-10 -bottom-10 bg-orange-400/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-400/40 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Background coffee splatter */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-400/10 rounded-full blur-3xl"></div>
      </section>

  )
}

