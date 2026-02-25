import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Authentic Handloom',
      description: 'Genuine handcrafted products directly from skilled artisans',
      icon: '🧵'
    },
    {
      title: 'Global Reach',
      description: 'Connect with buyers worldwide and expand your market',
      icon: '🌍'
    },
    {
      title: 'Fair Trade',
      description: 'Ensuring fair prices and sustainable livelihoods for artisans',
      icon: '💰'
    },
    {
      title: 'Quality Assured',
      description: 'Every product is verified for authenticity and quality',
      icon: '✓'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Authentic Handloom Fashion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Connecting Traditional Artisans with Global Buyers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
              <Link
                to="/signup"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
              >
                Join as Artisan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Sarees', 'Kurtas', 'Shawls'].map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <img
                  src={`https://images.unsplash.com/photo-${
                    index === 0 ? '1610030469983-98e550d6193c' :
                    index === 1 ? '1596783074918-c84cb06531ca' :
                    '1601924994987-69e26d50dc26'
                  }?w=500`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8">Join thousands of artisans and buyers on our platform</p>
          <Link
            to="/signup"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
