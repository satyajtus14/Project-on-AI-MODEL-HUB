import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="AI Hub Logo" className="h-10 w-auto" />
                <h2 className="text-3xl font-bold tracking-tighter text-white">
                  AI Hub
                </h2>
              </div>
  
              <p className="text-zinc-400 text-lg max-w-md">
                One subscription. Access to all frontier AI models in a single
                powerful platform.
              </p>
  
              {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                              <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                              <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
                              <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
                              <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
                              <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                          </div> */}
            </div>
  
            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Models
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="md:col-span-2">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="md:col-span-3">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">Legal</h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>
  
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-400 transition">
                Made with ❤️ for SJ TECH HUB
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;