import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp,
  LogOut,
  Menu,
  X,
  Tags
} from 'lucide-react';
import { adminApi } from '../api/adminApi';
import BlogManagement from './BlogManagement';
import CategoryManagement from './CategoryManagement';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'blogs' | 'categories'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalLeads: 0,
    totalMessages: 0,
    publishedBlogs: 0
  });

  useEffect(() => {
    // Load stats
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await adminApi.getStats();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  useEffect(() => {
    // Update route based on activeTab
    const path = window.location.pathname;
    if (path.includes('/blog')) {
      setActiveTab('blogs');
    } else if (path.includes('/categories')) {
      setActiveTab('categories');
    } else if (path.includes('/dashboard')) {
      setActiveTab('dashboard');
    }
  }, []);

  const handleTabChange = (tab: 'dashboard' | 'blogs' | 'categories') => {
    setActiveTab(tab);
    const routes = {
      dashboard: '/admin/dashboard',
      blogs: '/admin/blog',
      categories: '/admin/categories'
    };
    window.history.pushState({}, '', routes[tab]);
    // Only close sidebar on mobile
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blogs' as const, label: 'Blog Management', icon: FileText },
    { id: 'categories' as const, label: 'Categories', icon: Tags }
  ];

  const statCards = [
    { label: 'Total Blogs', value: stats.totalBlogs, icon: FileText, color: 'from-blue-500 to-blue-600' },
    { label: 'Published Blogs', value: stats.publishedBlogs, icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'from-purple-500 to-purple-600' },
    { label: 'Messages', value: stats.totalMessages, icon: MessageSquare, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
     <motion.aside
  initial={false}
  animate={{ x: sidebarOpen ? 0 : -260 }}
  transition={{ duration: 0.3 }}
  className="
    fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50
    lg:static lg:translate-x-0 lg:shadow-lg
  "
>
  {/* Logo Section */}
  <div className="p-6 border-b border-gray-200">
    <h2 className="text-2xl font-bold text-gray-900">DBA Coach</h2>
    <p className="text-sm text-gray-600">Admin Panel</p>
  </div>

  {/* Navigation Items */}
  <nav className="p-4 space-y-2">
    {navItems.map((item) => {
      const Icon = item.icon;
      return (
        <button
          key={item.id}
          onClick={() => handleTabChange(item.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeTab === item.id
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </button>
      );
    })}
  </nav>

  {/* Bottom Space */}
  <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200"></div>
</motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'blogs' ? 'Blog Management' : 'Category Management'}
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl text-white shadow-lg`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-10 h-10 opacity-80" />
                        <span className="text-3xl font-bold">{stat.value}</span>
                      </div>
                      <p className="text-sm opacity-90 font-medium">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Welcome Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Admin Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Manage your DBA Coach blog content, view analytics, and control your website content from this centralized dashboard.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">📝 Blog Management</h3>
                    <p className="text-sm text-blue-700">Create, edit, and publish blog posts with ease.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">📊 Analytics</h3>
                    <p className="text-sm text-green-700">Track your website performance and engagement.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'blogs' && (
            <BlogManagement onStatsUpdate={fetchStats} />
          )}

          {activeTab === 'categories' && (
            <CategoryManagement />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
