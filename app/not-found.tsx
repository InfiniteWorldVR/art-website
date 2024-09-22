import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgColor">
      <h1 className="text-7xl font-extrabold text-textColor mb-4">
        Coming Soon
      </h1>
      <p className="text-lg text-gray-500 mb-6 text-center max-w-2xl">
        The page or feature you're looking for is currently under development.
        We are working hard to bring exciting updates your way. Please check
        back soon!
      </p>

      <div className="mt-8">
        <Link href="/">
          <span className="px-8 py-3 bg-gradient-to-r bg-primary to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-700 transition duration-300 ease-in-out">
            Go Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
