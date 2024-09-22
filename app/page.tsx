import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const exhibitions = [
    {
      id: 1,
      title: "The Art of Virtual Reality",
      description:
        "Explore how artists are embracing virtual reality in their work.",
      image:
        "https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/virtual-exhibitions/1",
    },
    {
      id: 2,
      title: "Cultural Heritage in VR",
      description:
        "Experience cultural landmarks and events in an immersive virtual world.",
      image:
        "https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/virtual-exhibitions/2",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 ">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-wide">
            Welcome to Era Explore
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-lg mx-auto italic">
            Revolutionizing how the world experiences our rich and diverse
            legacy.
          </p>
          <Link href="/explore-art">
            <span className="inline-block mt-6 px-10 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
              Start Exploring <FaArrowRight className="inline ml-2" />
            </span>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-bgColor">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Preserving History, Culture & Heritage
          </h2>
          <p className="text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
            Our mission is to "Preserve history, culture, and heritage through
            immersive experiences." We empower people to connect with the past
            like never before.
          </p>
          <Link href="/about">
            <span className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-yellow-500 transition duration-300">
              Learn More
            </span>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-bgColor">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Featured Virtual Exhibitions
          </h2>
          <p className="text-textColor text-center mt-2 mb-10">
            Discover the latest exhibitions in art and culture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
            {exhibitions.map((exhibition) => (
              <div
                key={exhibition.id}
                className="relative group rounded-lg shadow-lg overflow-hidden bg-gray-800 transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exhibition.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {exhibition.description}
                    </p>
                    <Link href={exhibition.link}>
                      <span className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                        View Exhibition
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Events Section */}
      <section className="py-16 bg-bgColor">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Culture Events in VR
          </h2>
          <p className="text-gray-600 mt-2 mb-10">
            Attend live cultural events from the comfort of your home.
          </p>
          <Link href="/culture-events">
            <span className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-yellow-500 transition duration-300">
              View Events
            </span>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-5xl font-bold">
            Join the Future of Art & Culture in VR
          </h2>
          <p className="mt-4 text-xl">
            Sign up to stay updated on new exhibitions, events, and more.
          </p>
          <Link href="/sign-up">
            <span className="inline-block mt-6 px-8 py-3 bg-white text-yellow-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
