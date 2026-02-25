import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Preserving Heritage, Empowering Artisans</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Handloom Fashion Platform is dedicated to connecting traditional handloom artisans with global buyers,
            preserving India's rich textile heritage while ensuring sustainable livelihoods for skilled craftspeople.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe in fair trade, authentic craftsmanship, and the power of technology to bridge the gap between
            traditional artisans and modern consumers who value quality and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Authentic Craftsmanship</h3>
            <p className="text-gray-600">Every product is handcrafted by skilled artisans using traditional techniques</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Fair Trade</h3>
            <p className="text-gray-600">We ensure artisans receive fair compensation for their exceptional work</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2">Sustainable</h3>
            <p className="text-gray-600">Eco-friendly practices and natural materials for a better tomorrow</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2024, our platform emerged from a vision to preserve India's handloom heritage while
            empowering artisans with access to global markets. We recognized that talented craftspeople often
            struggled to reach buyers who would appreciate their work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we're proud to support hundreds of artisans across India, helping them showcase their
            beautiful creations to customers worldwide. Every purchase on our platform directly supports
            traditional craftsmanship and helps preserve centuries-old weaving techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
