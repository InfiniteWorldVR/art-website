"use client";

import React, { useState } from "react";
import emailjs, { init } from "@emailjs/browser";

const Contact = () => {
  init("user_xxxxxxxxxxxxxxxxxxx");

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

    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        e.target,
        process.env.NEXT_PUBLIC_USER_ID || ""
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thank you for your message!");
  };

  return (
    <main className="bg-background text-textColor min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[url('https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-dartText drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-dartText max-w-lg mx-auto">
            We’d love to hear from you! Reach out for any inquiries or
            collaborations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-bgColor">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-textColor text-center">
            Contact Us
          </h2>
          <div className="mt-8 flex flex-col lg:flex-row lg:space-x-16">
            {/* Contact Information */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-semibold text-textColor">
                Our Contact Details
              </h3>
              <p className="text-gray-600">
                If you have any questions or need further information, please
                feel free to reach out.
              </p>
              <div className="text-gray-600 space-y-4">
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>1 KN 78 St, Kigali</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>250789530369</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>eraexploreltd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-4 bg-gray-200 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-4 bg-gray-200 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-600">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-4 bg-gray-200 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#FFAA2C] transition"
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
          <h2 className="text-4xl font-bold text-white text-center mb-10">
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
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
