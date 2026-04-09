import React, { useState, useEffect } from 'react';
import { productService } from '../../services/apiService';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { user } = useAuth();

  // ✅ LOAD PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        console.log("📡 Fetching products from API...");
        const data = await productService.getAll();

        console.log("🔥 API DATA:", data);
        console.log("📊 Data type:", typeof data, "Is array:", Array.isArray(data));

        // ✅ SAFETY CHECK
        if (Array.isArray(data)) {
          console.log(`✅ Loaded ${data.length} products`);
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error("❌ API did not return array:", data);
          setProducts([]);
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error("❌ Failed to load products:", error);
        console.error("Error message:", error.message);
        console.error("Error response:", error.response?.data);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // ✅ FILTER LOGIC
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  // ✅ CATEGORY LIST
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  // ✅ LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-b-2 border-primary rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">Our Products</h1>

        {/* 🔍 SEARCH + FILTER */}
        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* ✅ SHOW PRODUCTS */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            {products.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-yellow-800 font-semibold mb-2">⚠️ No Products Available</p>
                <p className="text-yellow-700 text-sm mb-4">Make sure:</p>
                <ul className="text-yellow-700 text-sm text-left space-y-1 mb-4">
                  <li>✓ Backend is running on port 8080</li>
                  <li>✓ Database is connected</li>
                  <li>✓ Products have been added</li>
                </ul>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
                >
                  Refresh
                </button>
              </div>
            ) : (
              <p className="text-gray-600 text-lg">No products match your filters</p>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={user?.role === 'buyer' ? handleAddToCart : null}
                showActions={user?.role === 'buyer'}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
