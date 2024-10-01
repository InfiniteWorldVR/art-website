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
    { type: "Email", value: "eraexploreltd@gmail.com" },
    { type: "Phone", value: "+250789530369" },
    { type: "Address", value: "1 KN 78 St, Kigali" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com",
      label: "Facebook",
    },
    { icon: <FaTwitter />, href: "https://www.twitter.com", label: "Twitter" },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com",
      label: "LinkedIn",
    },
    { icon: <FaYoutube />, href: "https://www.youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Platform Info Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Welcome to Era Explore
            </h3>
            <p className="mb-4">
              We are revolutionizing how the world experiences and engages with
              our country’s rich and diverse legacy. With our mission to{" "}
              <em>
                Preserve history, culture, and heritage through immersive
                experiences
              </em>
              , we empower people to connect with the past in ways never before
              possible.
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} EraExplore.rw. All rights
              reserved.
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
                    <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
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
            <address className="not-italic">
              <ul>
                {contactDetails.map((contact) => (
                  <li key={contact.type} className="mb-2">
                    {contact.type}:{" "}
                    <span className="hover:text-white transition-colors duration-300">
                      {contact.value}
                    </span>
                  </li>
                ))}
              </ul>
            </address>
          </div>

          {/* Social Media Section */}
          {/* <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-white text-gray-400 text-xl transition-transform transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center md:text-left">
          <hr className="border-gray-700 my-6" />
          <p className="text-gray-400">
            Step into the world of immersive culture at{" "}
            <a
              href="https://eraexplore.com"
              className="hover:text-white transition-colors duration-300"
            >
              eraexplore.rw
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
