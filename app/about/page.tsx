import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <main className="bg-bgColor text-textColor">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center transition duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to Era Explore VR
          </h1>
          <p className="mt-4 text-lg text-dartText max-w-xl mx-auto">
            Revolutionizing how the world engages with history, culture, and
            heritage.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At <span className="text-primary font-semibold">Era Explore</span>,
            we strive to preserve history, culture, and heritage through
            immersive experiences.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600 mt-4">
              Era Explore was founded with a passion to bridge the gap between
              the past and the present.
            </p>
            <p className="text-gray-600 mt-4">
              Our team transforms how history is experienced, making it
              interactive and immersive for modern audiences.
            </p>
          </div>
          {/* Right Side */}
          <div className="animate-fade-in">
            <img
              src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Era Explore History"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing boundaries to create immersive experiences.",
              },
              {
                title: "Accessibility",
                description: "Cultural experiences available to everyone.",
              },
              {
                title: "Preservation",
                description:
                  "Safeguarding our heritage for future generations.",
              },
              {
                title: "Community",
                description: "Building a passionate global community.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold">Join Us on Our Journey</h2>
          <p className="mt-4 text-lg">
            Be part of a revolution in how we experience and preserve history.
          </p>
          <a
            href="/explore"
            className="inline-block mt-6 px-8 py-3 bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Start Exploring <FaArrowRight className="inline ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
