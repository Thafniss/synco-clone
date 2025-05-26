import React from "react";

export default function FeatureSection() {
  return (
    <section className="py-16 px-6 bg-gray-900" id="why-choose-synco">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 font-inter text-white">
          Why Choose Synco?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* All-in-One Platform */}
          <div className="rounded-xl shadow-2xl bg-gray-800 hover:bg-gray-700 transition-transform hover:scale-105 overflow-hidden">
            <div className="h-48 w-full">
              <img
                src="https://source.unsplash.com/featured/?technology"
                alt="All-in-One Platform"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">All-in-One Platform</h3>
              <p className="text-gray-300">
                Synco centralizes your operations, reducing complexity and improving efficiency.
              </p>
            </div>
          </div>

          {/* Scalable Solutions */}
          <div className="rounded-xl shadow-2xl bg-gray-800 hover:bg-gray-700 transition-transform hover:scale-105 overflow-hidden">
            <div className="h-48 w-full">
              <img
                src="https://source.unsplash.com/featured/?growth"
                alt="Scalable Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Scalable Solutions</h3>
              <p className="text-gray-300">
                Whether you're a startup or an enterprise, our tools adapt to your growth.
              </p>
            </div>
          </div>

          {/* Secure & Reliable */}
          <div className="rounded-xl shadow-2xl bg-gray-800 hover:bg-gray-700 transition-transform hover:scale-105 overflow-hidden">
            <div className="h-48 w-full">
              <img
                src="https://source.unsplash.com/featured/?security"
                alt="Secure & Reliable"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Secure & Reliable</h3>
              <p className="text-gray-300">
                Your data is protected with top-tier security standards and robust infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
