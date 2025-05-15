import Image from "next/image"
import Link from "next/link"
import { Coffee, CupSoda, Utensils, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-2xl shadow-md px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">net</span>
              <span className="text-orange-500">WO</span>
            </Link>
          </div>
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
          </div>
          <div>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
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
                  src="/coffee.png"
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

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 relative">
              <div className="relative z-10">
                <Image
                  src="/coffee.png"
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

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-400 uppercase tracking-wider mb-2">FEATURES</div>
            <h2 className="text-3xl md:text-4xl font-bold">OUR SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg relative group hover:bg-[#222] transition">
              <div className="text-orange-400 mb-4">
                <Coffee className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">I'm a Service</h3>
              <p className="text-gray-400 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me.
              </p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg relative group hover:bg-[#222] transition">
              <div className="text-orange-400 mb-4">
                <CupSoda className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">I'm a Service</h3>
              <p className="text-gray-400 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me.
              </p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg relative group hover:bg-[#222] transition">
              <div className="text-orange-400 mb-4">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">I'm a Service</h3>
              <p className="text-gray-400 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me.
              </p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg relative group hover:bg-[#222] transition">
              <div className="text-orange-400 mb-4">
                <Coffee className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">I'm a Service</h3>
              <p className="text-gray-400 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                double click me.
              </p>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

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
      <footer className="bg-[#0a0a0a] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">MENU</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Our Coffee
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Our Food
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Our Store
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICE</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-400 transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-400 transition"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-400 transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
