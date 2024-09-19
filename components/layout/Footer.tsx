import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Explore Art", href: "/explore-art" },
    { name: "Culture Events", href: "/culture-events" },
    { name: "Virtual Exhibitions", href: "/virtual-exhibitions" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactDetails = [
    { type: "Email", value: "support@infiniteworldvr.com" },
    { type: "Phone", value: "+1 234 567 890" },
    { type: "Address", value: "123 VR Avenue, Virtual City, World" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com" },
    { icon: <FaTwitter />, href: "https://www.twitter.com" },
    { icon: <FaInstagram />, href: "https://www.instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com" },
    { icon: <FaYoutube />, href: "https://www.youtube.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Platform Info Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Art Infinite World VR
            </h3>
            <p className="mb-4">
              Discover a new dimension of art and culture through immersive
              virtual reality experiences.
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Art.InfiniteWorldVR.com. All
              rights reserved.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href}>
                    <span className="hover:text-white">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <ul>
              {contactDetails.map((contact) => (
                <li key={contact.type} className="mb-2">
                  {contact.type}:{" "}
                  <span className="hover:text-white">{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-400 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center md:text-left">
          <hr className="border-gray-700 my-6" />
          <p className="text-gray-400">
            Step into the world of virtual reality at{" "}
            <a
              href="https://art.infiniteworldvr.com"
              className="hover:text-white"
            >
              art.infiniteworldvr.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
