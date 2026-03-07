// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Chat endpoints
  CHAT: `${API_BASE_URL}/api/chat`,
  
  // Lead endpoints
  LEAD: `${API_BASE_URL}/api/lead`,
  
  // Admin auth endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_STATS: `${API_BASE_URL}/api/admin/stats`,
  
  // Blog endpoints
  ADMIN_BLOGS: `${API_BASE_URL}/api/admin/blogs`,
  ADMIN_BLOG_BY_ID: (id: string | number) => `${API_BASE_URL}/api/admin/blogs/${id}`,
  PUBLIC_BLOGS: `${API_BASE_URL}/api/blogs`,
  
  // Category endpoints
  ADMIN_CATEGORIES: `${API_BASE_URL}/api/admin/categories`,
  ADMIN_CATEGORY_BY_NAME: (name: string) => `${API_BASE_URL}/api/admin/categories/${encodeURIComponent(name)}`,
};

// API helper functions
export const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  if (error.message === 'Invalid or expired token') {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin';
  }
  return {
    success: false,
    message: error.message || 'An error occurred'
  };
};

export default API_BASE_URL;
