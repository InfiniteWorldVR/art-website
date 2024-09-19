import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[url('/images/about-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">
            About Infinite World VR
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            Discover how we're shaping the future of art and culture through
            virtual reality.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Our mission at{" "}
            <span className="text-blue-400">Infinite World VR</span> is to
            revolutionize the way people experience art and culture by bringing
            it into the virtual realm. We aim to make cultural experiences
            accessible to everyone, anywhere in the world, through immersive and
            engaging virtual environments.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              How It All Started
            </h2>
            <p className="text-gray-400 mt-4">
              Art and culture have always been integral parts of human society.
              As technology advances, we saw an opportunity to blend the beauty
              of cultural experiences with the immersive power of virtual
              reality.
            </p>
            <p className="text-gray-400 mt-4">
              <span className="text-blue-400">Infinite World VR</span> was born
              out of a passion for art and innovation. What started as a small
              project has grown into a global platform where artists and
              cultural enthusiasts can connect, showcase, and experience the
              world’s cultural treasures like never before.
            </p>
          </div>
          {/* Right Side */}
          <div>
            <img
              src="/images/vr-journey.jpg"
              alt="The Journey"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white">Innovation</h3>
              <p className="text-gray-400 mt-2">
                Pushing the boundaries of what's possible with technology.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white">
                Accessibility
              </h3>
              <p className="text-gray-400 mt-2">
                Making art and culture experiences accessible to everyone.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white">Creativity</h3>
              <p className="text-gray-400 mt-2">
                Celebrating artistic expression in all forms.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-white">Community</h3>
              <p className="text-gray-400 mt-2">
                Building a global community of artists and enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
          <p className="text-gray-400 mt-2 mb-10">
            The minds behind Infinite World VR.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/team-member1.jpg"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Alex Johnson</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/team-member2.jpg"
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Maria Garcia</h3>
              <p className="text-gray-400">Lead VR Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/team-member3.jpg"
                alt="Team Member 3"
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Samuel Lee</h3>
              <p className="text-gray-400">Art Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold">Join Us on Our Journey</h2>
          <p className="mt-4 text-xl">
            Be part of the future of art and culture. Discover, explore, and
            create with Infinite World VR.
          </p>
          <Link href="/explore-art">
            <span className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
              Start Exploring
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
