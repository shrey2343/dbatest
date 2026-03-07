import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Calendar,
  Clock,
  Save,
  X,
  AlertCircle,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { BlogPost } from '../data/blogPosts';
import { adminApi } from '../api/adminApi';

interface BlogManagementProps {
  onStatsUpdate: () => void;
}

const BlogManagement: React.FC<BlogManagementProps> = ({ onStatsUpdate }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Research Topic',
    readTime: '',
    image: '',
    fullContent: ''
  });

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await adminApi.getCategories();
      if (data.success) {
        setCategories(data.categories.map((cat: any) => cat.name));
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const data = await adminApi.getBlogs();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  const handleCreateNew = () => {
    setEditingBlog(null);
    setFormData({
      title: '',
      excerpt: '',
      category: 'Research Topic',
      readTime: '',
      image: '',
      fullContent: ''
    });
    setImagePreview('');
    setShowEditor(true);
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      readTime: blog.readTime,
      image: blog.image || '',
      fullContent: blog.fullContent || ''
    });
    setImagePreview(blog.image || '');
    setShowEditor(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData({ ...formData, image: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview('');
    setFormData({ ...formData, image: '' });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const data = await adminApi.deleteBlog(id);
      if (data.success) {
        await fetchBlogs();
        onStatsUpdate();
      }
    } catch (error) {
      console.error('Failed to delete blog:', error);
      alert('Failed to delete blog. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = editingBlog 
        ? await adminApi.updateBlog(editingBlog.id, formData)
        : await adminApi.createBlog(formData);

      if (data.success) {
        await fetchBlogs();
        onStatsUpdate();
        setShowEditor(false);
        setEditingBlog(null);
      }
    } catch (error) {
      console.error('Failed to save blog:', error);
      alert('Failed to save blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Create New Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="grid gap-4">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{blog.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                  {blog.featured && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-col gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-all"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No blogs found</p>
        </div>
      )}

      {/* Blog Editor Modal */}
      <AnimatePresence>
        {showEditor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowEditor(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <button
                  onClick={() => setShowEditor(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter blog title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the blog..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.length > 0 ? (
                        categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))
                      ) : (
                        <>
                          <option value="Research Topic">Research Topic</option>
                          <option value="FREE Templates">FREE Templates</option>
                          <option value="Proposal Writing">Proposal Writing</option>
                          <option value="Literature Review">Literature Review</option>
                          <option value="Methodology & Analysis">Methodology & Analysis</option>
                          <option value="Academic Writing">Academic Writing</option>
                        </>
                      )}
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                      Manage categories in the Categories section
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Read Time *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 8 min read"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image
                  </label>
                  
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Blog Featured" 
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 font-medium">Click to upload image</p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                      </label>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Content (HTML) *
                  </label>
                  <div className="mb-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-gray-700">
                    <p className="font-semibold mb-2">📝 HTML Formatting Guide:</p>
                    <ul className="space-y-1 ml-4 list-disc">
                      <li><code className="bg-white px-1">&lt;h2&gt;</code> for main sections (Introduction, Conclusion, FAQ, etc.)</li>
                      <li><code className="bg-white px-1">&lt;h3&gt;</code> for sub-topics within sections</li>
                      <li><code className="bg-white px-1">&lt;p&gt;</code> for paragraphs</li>
                      <li><code className="bg-white px-1">&lt;ul&gt;&lt;li&gt;</code> for bullet points</li>
                      <li><code className="bg-white px-1">&lt;strong&gt;</code> for bold text/keywords (close with &lt;/strong&gt;)</li>
                      <li><code className="bg-white px-1">&lt;a href="..."&gt;</code> for links (close with &lt;/a&gt;)</li>
                    </ul>
                    <p className="mt-2 text-orange-600 font-semibold">⚠️ Important: Always close ALL HTML tags!</p>
                    <p className="mt-1">✅ Correct: <code className="bg-white px-1">&lt;strong&gt;text&lt;/strong&gt;</code></p>
                    <p>❌ Wrong: <code className="bg-white px-1">&lt;strong&gt;text&lt;strong&gt;</code></p>
                  </div>
                  <textarea
                    required
                    value={formData.fullContent}
                    onChange={(e) => setFormData({ ...formData, fullContent: e.target.value })}
                    rows={16}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    placeholder="<h2>Introduction</h2>
<p>Your introduction text here...</p>

<h2>Main Section Title</h2>
<h3>Subtopic</h3>
<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>Q1: Question here?</h3>
<p>Answer here...</p>

<h2>External Links</h2>
<ul>
  <li><a href='https://example.com'>Link Title</a></li>
</ul>"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Use proper HTML tags for structured content. Preview will match the format shown on the blog page.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-all"
                  >
                    <Save className="w-5 h-5" />
                    {loading ? 'Saving...' : (editingBlog ? 'Update Blog' : 'Create Blog')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEditor(false)}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogManagement;
