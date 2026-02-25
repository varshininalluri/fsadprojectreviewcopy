import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, showActions = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1">by {product.artisan}</p>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
          {showActions && onAddToCart && (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">Stock: {product.stock} units</p>
      </div>
    </div>
  );
};

export default ProductCard;
