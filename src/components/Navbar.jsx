import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'admin': return '/admin/dashboard';
      case 'artisan': return '/artisan/dashboard';
      case 'buyer': return '/buyer/dashboard';
      default: return '/';
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Handloom</span>
              <span className="text-2xl font-light text-secondary ml-1">Fashion</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
            
            {user ? (
              <>
                <Link to={getDashboardLink()} className="text-gray-700 hover:text-primary transition">
                  Dashboard
                </Link>
                {user.role === 'buyer' && (
                  <Link to="/cart" className="relative text-gray-700 hover:text-primary transition">
                    Cart
                    {itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                )}
                <button onClick={handleLogout} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary transition">Login</Link>
                <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</Link>
            {user ? (
              <>
                <Link to={getDashboardLink()} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Dashboard
                </Link>
                {user.role === 'buyer' && (
                  <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                    Cart ({itemCount})
                  </Link>
                )}
                <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Login</Link>
                <Link to="/signup" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
