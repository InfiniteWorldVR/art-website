import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Art", href: "/explore-art" },
    { name: "Culture Events", href: "/culture-events" },
    { name: "Virtual Exhibitions", href: "/virtual-exhibitions" },
    { name: "About", href: "/about" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com" },
    { icon: <FaTwitter />, href: "https://www.twitter.com" },
    { icon: <FaInstagram />, href: "https://www.instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com" },
    { icon: <FaYoutube />, href: "https://www.youtube.com" },
  ];

  return (
    <header className="bg-gray-900 text-gray-300 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo Section */}
        <Link href="/">
          <span className="text-white text-3xl font-bold tracking-wide">
            Art Infinite World VR
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links for Desktop */}
        <nav
          className={`fixed inset-0 z-20 flex flex-col items-center justify-center space-y-6 bg-gray-900 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:flex md:flex-row md:space-y-0 md:space-x-8 md:translate-x-0 md:bg-transparent md:static`}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className="text-2xl md:text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}

          {/* Social Links for Mobile */}
          <div className="flex space-x-6 md:hidden">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Social Links for Desktop */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-transform duration-300 transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
