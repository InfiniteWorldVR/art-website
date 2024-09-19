import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <main className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">
            Explore Art & Culture in Virtual Reality
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            Step into a new world of immersive virtual exhibitions and events.
          </p>
          <Link href="/explore-art">
            <span className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
              Start Exploring <FaArrowRight className="inline ml-2" />
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white text-center">
            Featured Virtual Exhibitions
          </h2>
          <p className="text-gray-400 text-center mt-2 mb-10">
            Discover the latest exhibitions in art and culture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exhibition 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Exhibition 1"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                The Art of Virtual Reality
              </h3>
              <p className="text-gray-400 mt-2">
                Explore how artists are embracing virtual reality in their work.
              </p>
              <Link href="https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <span className="text-blue-400 hover:underline mt-4 inline-block">
                  View Exhibition
                </span>
              </Link>
            </div>

            {/* Exhibition 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Exhibition 2"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                Cultural Heritage in VR
              </h3>
              <p className="text-gray-400 mt-2">
                Experience cultural landmarks and events in an immersive virtual
                world.
              </p>
              <Link href="/virtual-exhibitions/2">
                <span className="text-blue-400 hover:underline mt-4 inline-block">
                  View Exhibition
                </span>
              </Link>
            </div>

            {/* Exhibition 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Exhibition 3"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                Future of Digital Art
              </h3>
              <p className="text-gray-400 mt-2">
                Explore the future of art in a world powered by VR and AI.
              </p>
              <Link href="https://images.pexels.com/photos/5273638/pexels-photo-5273638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <span className="text-blue-400 hover:underline mt-4 inline-block">
                  View Exhibition
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Art Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Explore Virtual Art Collections
          </h2>
          <p className="text-gray-400 mt-2 mb-10">
            Dive deep into curated collections of stunning digital art pieces.
          </p>
          <Link href="/explore-art">
            <span className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
              Browse Art
            </span>
          </Link>
        </div>
      </section>

      {/* Culture Events Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Culture Events in VR
          </h2>
          <p className="text-gray-400 mt-2 mb-10">
            Attend live cultural events from the comfort of your home.
          </p>
          <Link href="/culture-events">
            <span className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
              View Events
            </span>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold">
            Join the Future of Art & Culture in VR
          </h2>
          <p className="mt-4 text-xl">
            Sign up to stay updated on new exhibitions, events, and more.
          </p>
          <Link href="/sign-up">
            <span className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
              Get Started
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
