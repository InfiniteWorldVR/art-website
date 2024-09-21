import React from "react";

const About: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to Era Explore
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
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
            At{" "}
            <span className="text-indigo-600 font-semibold">Era Explore</span>,
            we strive to preserve history, culture, and heritage through
            immersive experiences. Our mission is to empower people to connect
            with the past in ways never before possible, making cultural
            exploration accessible, engaging, and meaningful.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600 mt-4">
              Era Explore was founded with a deep passion to bridge the gap
              between the past and the present. Our team of innovators and
              history enthusiasts came together to create a platform that
              transforms how history is experienced, making it interactive and
              immersive for modern audiences.
            </p>
            <p className="text-gray-600 mt-4">
              What began as a vision to preserve our rich heritage has grown
              into a global movement, making cultural treasures accessible to
              everyone, anywhere in the world, through cutting-edge technology.
            </p>
          </div>
          {/* Right Side */}
          <div>
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
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">
                Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                Constantly pushing boundaries to create immersive experiences
                that captivate and inspire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">
                Accessibility
              </h3>
              <p className="text-gray-600 mt-2">
                Ensuring that cultural and historical experiences are available
                to everyone, no matter where they are.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">
                Preservation
              </h3>
              <p className="text-gray-600 mt-2">
                Committed to safeguarding our cultural heritage for future
                generations to experience and learn from.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">
                Community
              </h3>
              <p className="text-gray-600 mt-2">
                Building a global community passionate about history, culture,
                and preserving heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold">Join Us on Our Journey</h2>
          <p className="mt-4 text-lg">
            Be part of a revolution in how we experience and preserve history.
            Discover, explore, and immerse yourself with Era Explore.
          </p>
          <a
            href="/explore"
            className="inline-block mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100"
          >
            Start Exploring
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
