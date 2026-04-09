import API from "./api";

export const authService = {
  login: async (email, password) => {
    const res = await API.post("/auth/login", { email, password });
    return res.data;
  },

  signup: async (userData) => {
    const res = await API.post("/auth/register", userData);
    return res.data;
  }
};

export const productService = {
  getAll: async () => {
    try {
      console.log("🌐 Calling API: GET /api/products");
      const res = await API.get("/products");
      console.log("✅ API Response received:", res.status, res.data);
      return res.data;
    } catch (error) {
      console.error("❌ API Error:", error.message);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
      throw error;
    }
  },

  getById: async (id) => {
    const res = await API.get(`/products/${id}`);
    return res.data;
  },

  create: async (productData) => {
    const res = await API.post("/products", productData);
    return res.data;
  },

  update: async (id, productData) => {
    const res = await API.put(`/products/${id}`, productData);
    return res.data;
  },

  delete: async (id) => {
    const res = await API.delete(`/products/${id}`);
    return res.data;
  }
};

export const orderService = {
  create: async (orderData) => {
    const res = await API.post("/orders", orderData);
    return res.data;
  },

  getAll: async () => {
    const res = await API.get("/orders");
    return res.data;
  }
};