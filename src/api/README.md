# Admin Panel API Configuration

This folder contains centralized API configuration for the admin panel.

## Files

### `config.ts`
- Contains the base API URL configuration
- Reads from `VITE_API_URL` environment variable
- Falls back to `http://localhost:5000` for development
- Exports all API endpoints
- Provides helper functions for authentication headers and error handling

### `adminApi.ts`
- Provides typed API methods for all admin operations
- Handles authentication automatically
- Includes methods for:
  - Authentication (login)
  - Dashboard stats
  - Blog CRUD operations
  - Category CRUD operations

## Usage

### In Components

```typescript
import { adminApi } from '../api/adminApi';

// Login
const data = await adminApi.login(email, password);

// Get blogs
const blogs = await adminApi.getBlogs();

// Create blog
const newBlog = await adminApi.createBlog(blogData);

// Update blog
const updated = await adminApi.updateBlog(id, blogData);

// Delete blog
const deleted = await adminApi.deleteBlog(id);

// Categories
const categories = await adminApi.getCategories();
const newCategory = await adminApi.createCategory(name);
const updatedCategory = await adminApi.updateCategory(oldName, newName);
const deletedCategory = await adminApi.deleteCategory(name);
```

## Environment Configuration

### Development
No configuration needed. Uses `http://localhost:5000` by default.

### Production
1. Copy `.env.example` to `.env`
2. Set `VITE_API_URL` to your production API URL:
   ```
   VITE_API_URL=https://your-backend-api.com
   ```

## Benefits

✅ **Centralized Configuration** - Change API URL in one place
✅ **Type Safety** - TypeScript interfaces for all API calls
✅ **Automatic Authentication** - Headers handled automatically
✅ **Error Handling** - Consistent error handling across all endpoints
✅ **Production Ready** - Environment-based configuration
✅ **Easy Testing** - Mock API calls easily for testing
✅ **Maintainable** - All API logic in one place

## Security

- JWT tokens stored in localStorage
- Automatic token inclusion in headers
- Automatic redirect on token expiration
- Token validation on each request
