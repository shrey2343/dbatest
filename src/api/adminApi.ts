import { API_ENDPOINTS, getAuthHeaders, handleApiError } from './config';

export const adminApi = {
  // Login
  async login(email: string, password: string) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Get stats
  async getStats() {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_STATS, {
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Blog operations
  async getBlogs() {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_BLOGS, {
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async createBlog(blogData: any) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_BLOGS, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(blogData)
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async updateBlog(id: string | number, blogData: any) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_BLOG_BY_ID(id), {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(blogData)
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async deleteBlog(id: string | number) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_BLOG_BY_ID(id), {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Category operations
  async getCategories() {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_CATEGORIES, {
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async createCategory(name: string) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_CATEGORIES, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ name })
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async updateCategory(oldName: string, newName: string) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_CATEGORY_BY_NAME(oldName), {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: newName })
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  async deleteCategory(name: string) {
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_CATEGORY_BY_NAME(name), {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  }
};

// Add public blogs method to adminApi for use in BlogDetailPage
adminApi.getPublicBlogs = async function() {
  try {
    const response = await fetch(API_ENDPOINTS.PUBLIC_BLOGS);
    return await response.json();
  } catch (error) {
    return handleApiError(error);
  }
};

// Public API
export const publicApi = {
  async getBlogs() {
    try {
      const response = await fetch(API_ENDPOINTS.PUBLIC_BLOGS);
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  }
};
