import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialMedia = [
    { icon: FaFacebookF, href: '#', color: '#1877F2' },
    { icon: FaTwitter, href: '#', color: '#1DA1F2' },
    { icon: FaGithub, href: '#', color: '#333333' },
    { icon: FaLinkedinIn, href: '#', color: '#0077B5' },
    { icon: FaInstagram, href: '#', color: '#E1306C' }
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-12 pb-6 mt-20 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo and tagline */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 text-transparent bg-clip-text mb-2">
            SMART BOLI
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering Nepali speakers through intelligent stutter detection. Speak with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Contact Us", to: "/contact" }
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="relative inline-block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="relative inline-block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="relative inline-block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="relative inline-block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="relative inline-block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 flex justify-center space-x-5">
        {socialMedia.map(({ icon: Icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-300 text-gray-700 dark:text-gray-300"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '';
            }}
            aria-label="social-link"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </button>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} SMART BOLI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
