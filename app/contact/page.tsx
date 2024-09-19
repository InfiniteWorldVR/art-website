"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
  };

  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[url('/images/contact-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            We'd love to hear from you! Reach out to us for any inquiries or
            collaborations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white text-center">
            Contact Us
          </h2>
          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-16">
            {/* Contact Information */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Our Contact Details
              </h3>
              <p className="text-gray-400">
                If you have any questions or need further information, please
                feel free to contact us.
              </p>
              <div className="text-gray-400 space-y-4">
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>123 VR Art Avenue, Metropolis, VR 12345</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>contact@infiniteworldvr.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our Location
          </h2>
          {/* Embedded Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.46948351252!2d-74.08508419442089!3d40.64515948185557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a0c31f%3A0x34af49e2d7d8f795!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1627384848306!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
