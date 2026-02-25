const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

export const authService = {
  login: async (email, password) => {
    const mockToken = 'mock-jwt-token-' + Date.now();
    const mockUser = {
      id: 1,
      email,
      role: email.includes('admin') ? 'admin' : email.includes('artisan') ? 'artisan' : 'buyer',
      name: email.split('@')[0]
    };
    return { user: mockUser, token: mockToken };
  },

  signup: async (userData) => {
    const mockToken = 'mock-jwt-token-' + Date.now();
    const mockUser = {
      id: Date.now(),
      ...userData
    };
    return { user: mockUser, token: mockToken };
  }
};

export const productService = {
  getAll: async () => {
    return mockProducts;
  },

  getById: async (id) => {
    return mockProducts.find(p => p.id === parseInt(id));
  },

  create: async (productData) => {
    return { id: Date.now(), ...productData };
  },

  update: async (id, productData) => {
    return { id, ...productData };
  },

  delete: async (id) => {
    return { success: true };
  }
};

export const orderService = {
  create: async (orderData) => {
    return {
      id: Date.now(),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
  },

  getAll: async () => {
    return mockOrders;
  }
};

const mockProducts = [
  {
    id: 1,
    name: 'Banarasi Silk Saree',
    description: 'Handwoven pure silk saree with intricate gold zari work',
    price: 8500,
    category: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
    artisan: 'Rajesh Kumar',
    stock: 15
  },
  {
    id: 2,
    name: 'Chanderi Cotton Dupatta',
    description: 'Lightweight handloom dupatta with traditional motifs',
    price: 1200,
    category: 'Dupatta',
    image: 'https://images.unsplash.com/photo-1583391733981-5ead0c0e0c5e?w=500',
    artisan: 'Meera Devi',
    stock: 25
  },
  {
    id: 3,
    name: 'Pashmina Shawl',
    description: 'Authentic Kashmiri pashmina with hand embroidery',
    price: 12000,
    category: 'Shawls',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500',
    artisan: 'Amir Hassan',
    stock: 8
  },
  {
    id: 4,
    name: 'Khadi Cotton Kurta',
    description: 'Handspun khadi cotton kurta with natural dyes',
    price: 1800,
    category: 'Kurtas',
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500',
    artisan: 'Sunita Sharma',
    stock: 30
  },
  {
    id: 5,
    name: 'Ikat Silk Stole',
    description: 'Traditional ikat weave silk stole from Odisha',
    price: 2500,
    category: 'Stoles',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
    artisan: 'Prakash Patel',
    stock: 20
  },
  {
    id: 6,
    name: 'Kanjivaram Silk Saree',
    description: 'Pure Kanjivaram silk with temple border design',
    price: 15000,
    category: 'Sarees',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500',
    artisan: 'Lakshmi Narayanan',
    stock: 10
  }
];

const mockOrders = [
  {
    id: 1,
    buyerName: 'John Doe',
    products: [mockProducts[0]],
    total: 8500,
    status: 'pending',
    date: '2024-01-15'
  },
  {
    id: 2,
    buyerName: 'Jane Smith',
    products: [mockProducts[1], mockProducts[3]],
    total: 3000,
    status: 'completed',
    date: '2024-01-14'
  }
];
