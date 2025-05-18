import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 relative">
              <div className="relative z-10">
                <Image
                  src="/about_img.png"
                  alt="Cafe interior"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              {/* Orange blob decorations */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500 rounded-full z-0"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-orange-400 rounded-full z-0"></div>
            </div>
            <div className="md:w-3/5">
              <div className="text-orange-400 uppercase tracking-wider mb-2">ABOUT US</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT CAFEE</h2>
              <p className="text-gray-300 mb-6">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me to add your own content and make changes to the font.
              </p>
              <p className="text-gray-400 mb-8">
                I'm a paragraph. Click here to add your own content and edit me. I'm a great place for you to tell a
                story and let your users know a little more about you.
              </p>
              <Link
                href="#learn-more"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}