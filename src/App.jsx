import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './routes/ProtectedRoute';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Public/Home';
import Products from './pages/Public/Products';
import ProductDetails from './pages/Public/ProductDetails';
import About from './pages/Public/About';
import Contact from './pages/Public/Contact';
import Cart from './pages/Buyer/Cart';
import Checkout from './pages/Buyer/Checkout';
import BuyerDashboard from './pages/Buyer/BuyerDashboard';
import ArtisanDashboard from './pages/Artisan/ArtisanDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute allowedRoles={['buyer']}>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute allowedRoles={['buyer']}>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/buyer/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['buyer']}>
                      <BuyerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/artisan/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['artisan']}>
                      <ArtisanDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
