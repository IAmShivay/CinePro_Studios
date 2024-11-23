import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Settings, Image, Film, Users, Layout } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
// import ProjectsManager from './ProjectsManager';
import GalleryManager from './GalleryManager';
// import HeroManager from './HeroManager';
import UsersManager from './UsersManager';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <Link
              to="/admin"
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/projects"
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Film className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link
              to="/admin/gallery"
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Image className="w-5 h-5" />
              <span>Gallery</span>
            </Link>
            <Link
              to="/admin/hero"
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Layout className="w-5 h-5" />
              <span>Hero Section</span>
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-900/50 rounded-xl p-6">
            <Routes>
              <Route index element={<DashboardHome />} />
              {/* <Route path="projects" element={<ProjectsManager />} />
              <Route path="gallery" element={<GalleryManager />} /> */}
              {/* <Route path="hero" element={<HeroManager />} />
              <Route path="users" element={<UsersManager />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
    <p className="text-gray-400 mb-8">
      Manage your website content, users, and settings from here.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-800 p-6 rounded-xl">
        <Film className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Projects</h3>
        <p className="text-gray-400">Manage your film projects</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <Image className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Gallery</h3>
        <p className="text-gray-400">Update image gallery</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <Layout className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Hero Section</h3>
        <p className="text-gray-400">Edit hero content</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <Users className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Users</h3>
        <p className="text-gray-400">Manage user accounts</p>
      </div>
    </div>
  </div>
);

export default Dashboard;


