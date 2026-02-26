import React, { useState, useEffect } from 'react';
import { productService } from '../../services/api';
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

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      if (selectedCategory !== 'All') {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }

      if (searchTerm) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
    };
    
    filterProducts();
  }, [searchTerm, selectedCategory, products]);

  const loadProducts = async () => {
    try {
      const data = await productService.getAll();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
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
