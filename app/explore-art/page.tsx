"use client";

import React from "react";




const ExploreArt = () => {
  const artworks = [
    {
      id: 1,
      title: "Abstract Dream",
      image:
        "https://images.pexels.com/photos/1719233/pexels-photo-1719233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Modern Aesthetic",
      image:
        "https://images.pexels.com/photos/27640108/pexels-photo-27640108/free-photo-of-a-living-room-with-a-coffee-table-two-chairs-and-a-lamp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Vivid Imagination",
      image:
        "https://images.pexels.com/photos/3022003/pexels-photo-3022003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Art Nouveau",
      image:
        "https://images.pexels.com/photos/27681216/pexels-photo-27681216/free-photo-of-3d-render.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Renaissance Revival",
      image:
        "https://images.pexels.com/photos/4197170/pexels-photo-4197170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "Minimalism",
      image:
        "https://images.pexels.com/photos/5152679/pexels-photo-5152679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <main className="bg-steel-blue text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[url('https://images.pexels.com/photos/7241318/pexels-photo-7241318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-bittersweet">
            Explore Art
          </h1>
          <p className="mt-4 text-2xl text-gray-200 max-w-lg mx-auto">
            Discover unique, curated pieces of art that inspire and elevate your
            space.
          </p>
        </div>
      </section>

      {/* Art Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-primary">
            Gallery
          </h2>
          <p className="text-center text-textColor mt-4 max-w-md mx-auto">
            Browse through our collection of hand-picked artworks, carefully
            curated to suit a range of artistic tastes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-sunglow text-center px-4">
                    {artwork.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-sunglow">
            Start Your Collection Today
          </h2>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto">
            Whether you're a seasoned art collector or a newcomer, our
            collection has something for everyone. Explore the world of art with
            us and bring beauty into your home.
          </p>
          <button className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-3xl hover:bg-yellow-green transition-colors">
            Browse Collection
          </button>
        </div>
      </section>
    </main>
  );
};

export default ExploreArt;
